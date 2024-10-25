import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";
import Client from "../components/Client.jsx";
import Editor from "../components/Editor.jsx";
import LanguageSelector from "../components/LanguageSelector";
import Output from "../components/Output.jsx";
import { useAppStore } from "@/store";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { CODE_SNIPPETS } from "../constants";
// Import your default code snippets

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
  const editorRef = useRef(null);
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  const [language, setLanguage] = useState("javascript"); // New language state
  const { userInfo } = useAppStore();

  useEffect(() => {
    codeRef.current = CODE_SNIPPETS[language] || "";
  }, [language]);

  useEffect(() => {
    const init = async () => {
      socketRef.current = io("http://localhost:6969", {
        withCredentials: true,
        query: { userId: userInfo.id },
      });

      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast("Socket connection failed, try again later.");
        reactNavigator("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: `${userInfo.firstName} ${userInfo.lastName}`,
      });

      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username !== `${userInfo.firstName} ${userInfo.lastName}`) {
            toast(`${username} joined the room.`);
          }
          setClients(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

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
    }
  }

  function leaveRoom() {
    reactNavigator("/codelab");
  }

  if (!userInfo) return <Navigate to="/" />;

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
        <div className="editorWrap flex flex-row w-full">
          <div className="editorContainer w-3/4">
            <LanguageSelector language={language} onSelect={setLanguage} />
            <Editor
              socketRef={socketRef}
              roomId={roomId}
              language={language}
              initialCode={CODE_SNIPPETS[language] || ""}
              onCodeChange={(code) => {
                codeRef.current = code;
              }}
              editorRef={editorRef} // Pass editorRef down to Editor
            />
          </div>
          <div className="outputContainer w-1/4">
            <Output editorRef={editorRef} language={language} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
