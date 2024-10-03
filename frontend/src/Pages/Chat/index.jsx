import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ContactsContainer from "./components/contacts-container";
import EmptyChatContainer from "./components/empty-chat-container";
import ChatContainer from "./components/chat-container";
import Header from "@/components/Header";

const ChatRoom = () => {
  
  const { userInfo, selectedChatType,isUploading,
    isDownloading,
    fileUploadProgress,
    fileDownloadProgress, } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Please setup profile to continue.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flex h-[100vh] text-white overflow-hidden ">
          <Header className="bg-[#2a2b33]"/>

      {
        isUploading && <div className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-black/80 z-10 flex items-center justify-center flex-col gap-5 backdrop-blur-lg">
          <h5 className="text-5xl animate-pulse">Uploading File</h5>
          {fileUploadProgress}%
        </div>
      }
      {
        isDownloading && <div className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-black/80 z-10 flex items-center justify-center flex-col gap-5 backdrop-blur-lg">
          <h5 className="text-5xl animate-pulse">Downloading File</h5>
          {fileDownloadProgress}%
        </div>
      }
      <ContactsContainer />
      {selectedChatType === undefined ? (
        <EmptyChatContainer />
      ) : (
        <ChatContainer />
      )}
    </div>
  );
};

export default ChatRoom;
