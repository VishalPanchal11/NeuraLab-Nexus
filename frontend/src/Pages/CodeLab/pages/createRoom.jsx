import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import { useAppStore } from "@/store";

const CodeLab = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
    const { userInfo } = useAppStore();
     const username = userInfo.firstName+" "+userInfo.lastName;

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId) {
      toast("ROOM ID is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (<>
  <Header/>
    <div className="homePageWrapper">
      <div className="formWrapper">
        <Logo />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <div
            className="inputBox  "
            
          ><h1 className="text-[#333] text-xl font-extrabold">{username}</h1></div>
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <div className="flex justify-evenly items-center w-full">
            <button className="btn joinBtn" onClick={joinRoom}>
              Join
            </button>
            <a onClick={createNewRoom} href="" className="btn createNewBtn">
              New Room
            </a>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default CodeLab;
