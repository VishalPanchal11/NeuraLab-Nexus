import { message } from "@/assets";
import { useAppStore } from "@/store";
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const socket = useRef();
  const { userInfo } = useAppStore();

  useEffect(() => {
    if (userInfo) {
      socket.current = io("http://localhost:6969", {
        withCredentials: true,
        query: { userId: userInfo.id },
      });
      socket.current.on("connect", () => {
        console.log("Connected to socket sever.");
      });
      socket.current.on("connect_error", (err) => {
        console.error("Connection error:", err);
      });

      const handleRecieveMessage = (message) => {
        const { selectedChatData, selectedChatType,addMessage } = useAppStore.getState();
        if (
          selectedChatType !== undefined &&
          (selectedChatData._id === message.sender._id ||
            selectedChatData._id === message.recipient._id)
        ) {
          console.log("mess r",message)
          addMessage(message);
        }
      };

      socket.current.on("recieveMessage",handleRecieveMessage)

      return () => {
        socket.current.disconnect();
      };
    }
  }, [userInfo]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};
