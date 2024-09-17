import { useAppStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { colors, getColor } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { UPDATE_PROFILE_ROUTE } from "@/utils/constants";

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(3);

  useEffect(() => {
    if (userInfo.profileSetup) {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setSelectedColor(userInfo.color);
    }
  }, [userInfo]);

  const validateProfile = () => {
    if (!firstName) {
      toast.error("First name is required.");
      return false;
    }
    if (!lastName) {
      toast.error("Last name is required.");
      return false;
    }
    return true;
  };

  const saveChanges = async () => {
    if (validateProfile()) {
      try {
        const response = await apiClient.post(
          UPDATE_PROFILE_ROUTE,
          { firstName, lastName, color: selectedColor },
          { withCredentials: true }
        );
        if (response.status === 200 && response.data) {
          setUserInfo({ ...response.data });
          toast.success("Profile updated successfully.");
          navigate("/courses");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleNavigate = () => {
    if (userInfo.profileSetup) {
      navigate("/courses");
    } else {
      toast.error("Complete profile setup!");
    }
  };

  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col ">
      <div className="flex flex-col justify-center gap-10 w-[80vw] h-[20vh] ">
        <div onClick={handleNavigate}>
          <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer " />
        </div>
      </div>
      <div className="flex-col md:flex-row md:gap-20 gap-5 h-[60vh] flex items-center justify-center ">
        <div
          className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Avatar className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden ">
            {image ? (
              <AvatarImage
                src={image}
                alt="Profile"
                className="object-cover w-full h-full bg-black"
              />
            ) : (
              <div
                className={`uppercase h-32 w-32 md:h-48 md:w-48 text-5xl flex items-center justify-center border-[1px] rounded-full ${getColor(
                  selectedColor
                )}`}
              >
                {firstName
                  ? firstName.split("").shift()
                  : userInfo.email.split("").shift()}{" "}
              </div>
            )}
          </Avatar>
          {hovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer ">
              {image ? (
                <FaTrash className="text-white text-3xl cursor-pointer " />
              ) : (
                <FaPlus className="text-white text-3xl cursor-pointer " />
              )}
            </div>
          )}
          {/* <input type="text" /> */}
        </div>
        <div className="flex items-center justify-center min-w-32 md:min-w-64 flex-col gap-5 text-white">
          <div className="w-full">
            <Input
              placeholder="Email"
              type="email"
              disabled
              value={userInfo.email}
              className="rounded-lg p-6 bg-[#2c2e3b] border-none "
            />
          </div>
          <div className="w-full">
            <Input
              placeholder="First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="rounded-lg p-6 bg-[#2c2e3b] border-none "
            />
          </div>
          <div className="w-full">
            <Input
              placeholder="Last Name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="rounded-lg p-6 bg-[#2c2e3b] border-none "
            />
          </div>
          <div className="flex w-full gap-5">
            {colors.map((color, index) => (
              <div
                className={`h-8 w-8 ${color} ${
                  selectedColor === index
                    ? "outline outline-white outline-2"
                    : ""
                } rounded-full cursor-pointer transition-all duration-300`}
                key={index}
                onClick={() => setSelectedColor(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-10">
        <Button
          className="h-12 bg-purple-700 hover:bg-purple-900 transition-all duration-300 "
          onClick={saveChanges}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Profile;
