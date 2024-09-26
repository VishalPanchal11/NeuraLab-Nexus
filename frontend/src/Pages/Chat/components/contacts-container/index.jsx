import { neuraLabNexus } from "@/assets";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import React from "react";
import ProfileInfo from "./components/profile-info";
import NewDM from "./components/new-dm";

const ContactsContainer = () => {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
      <div className="p-5">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages"/>
          <NewDM/>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Channels"/>
        </div>
      </div>
      <ProfileInfo/>
    </div>
  );
};

export default ContactsContainer;