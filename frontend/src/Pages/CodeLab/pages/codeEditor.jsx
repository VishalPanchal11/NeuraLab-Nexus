import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";
import Client from "../components/Client.jsx";
import Editor from "../components/Editor.jsx"; // Using Monaco Editor instead of Codemirror
import { useAppStore } from "@/store"; // Use user info from store
import { useNavigate, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";

const ACTIONS = {
  JOIN: "join",
  JOINED: "joined",
  DISCONNECTED: "disconnected",
  CODE_CHANGE: "code-change",
  SYNC_CODE: "sync-code",
  LEAVE: "leave",
}; 

const CodeEditor = () => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);

  // Fetch user info from your store (Redux/Context)
  const { userInfo } = useAppStore();

  useEffect(() => {
    const init = async () => {
      // Connect to the existing socket server
      socketRef.current = io("http://localhost:6969", {
        withCredentials: true,
        query: { userId: userInfo.id }, // Using userId from database
      });

      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast("Socket connection failed, try again later.");
        reactNavigator("/");
      }

      // Join the room with the current user's info

      socketRef.current.on("connect", () => {
        console.log("Socket connected:", socketRef.current.id);
      });
      

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: userInfo.firstName + " " + userInfo.lastName,
      });
      console.log(`User ${userInfo.firstName} joined room ${roomId}`);
      

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          console.log("JOINED event received:", clients); // Log clients
          if (username !== userInfo.firstName + " " + userInfo.lastName) {
            toast(`${username} joined the room.`);
            console.log(`${username} joined`);
          }
          setClients(clients); // Update clients array
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

      // Listening for disconnected users
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast(`${username} left the room.`);
        setClients((prev) =>
          prev.filter((client) => client.socketId !== socketId)
        );
      });
    };
    init();

    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
  }, [userInfo]);

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast("Room ID has been copied to your clipboard");
    } catch (err) {
      toast("Could not copy the Room ID");
      console.error(err);
    }
  }

  function leaveRoom() {
    reactNavigator("/codelab");
  }

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className="mainWrap h-[100vh] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className="aside">
          <div className="asideInner">
            <div className="clientsList">
              {clients.map((client) => (
                <Client key={client.socketId} username={client.username} />
              ))}
            </div>
          </div>
          <button className="btn copyBtn" onClick={copyRoomId}>
            Copy ROOM ID
          </button>
          <button className="btn leaveBtn" onClick={leaveRoom}>
            Leave
          </button>
        </div>
        <div className="editorWrap">
          <Editor
            socketRef={socketRef}
            roomId={roomId}
            onCodeChange={(code) => {
              codeRef.current = code;
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
