import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Background from "../../assets/login2.png";
import { neuraLabNexus } from "@/assets";
import Victory from "../../assets/victory.svg";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const Auth = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be same.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      const response = await apiClient.post(
        LOGIN_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      if (response.data.user.id) {
        setUserInfo(response.data.user);
        if (response.data.user.profileSetup) navigate("/courses");
        else navigate("/profile");
      }
      console.log({ response });
    }
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      const response = await apiClient.post(
        SIGNUP_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 201) {
        setUserInfo(response.data.user);
        navigate("/profile");
      }
      console.log({ response });
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center ">
      <div className="h-[80vh]  border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 ">
        <div className="flex items-center justify-center flex-col gap-10 ">
          <div className="flex items-center justify-center flex-col ">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-bold md:text-5xl pl-6 ">Welcome</h1>
              <img src={Victory} alt="Welcome" className="h-[100px]" />
            </div>
            <p className="font-medium text-center pl-6 pr-6 ">
              Fill in the details to get started with NeuraLab Nexus
            </p>
          </div>
          <div className="flex items-center justify-center w-full ">
            <Tabs defaultValue="login" className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger
                  className="data-[state=active]:bg-transparent  text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 "
                  value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent  text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 "
                  value="signup"
                >
                  Signup
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col mt-7 gap-4" value="login">
                <Input
                  placeholder="xyz@gmail.com"
                  type="email"
                  className="rounded-full pl-6 pr-6 pt-4 pb-4 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="******"
                  type="password"
                  className="rounded-full pl-6 pr-6 pt-4 pb-4 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="rounded-full pl-6 pr-6 pt-4 pb-4"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Input className="invisible" />
              </TabsContent>
              <TabsContent className="flex flex-col -mt-1 gap-4" value="signup">
                <Input
                  placeholder="xyz@gmail.com"
                  type="email"
                  className="rounded-full pl-6 pr-6 pt-4 pb-4 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="** Password **"
                  type="password"
                  className="rounded-full pl-6 pr-6 pt-4 pb-4 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="** Confirm Password **"
                  type="password"
                  className="rounded-full pl-6 pr-6 pt-4 pb-4 text-black"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  className="rounded-full pl-6 pr-6 pt-4 pb-4"
                  onClick={handleSignup}
                >
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="xl:flex justify-center items-center hidden">
          <img src={neuraLabNexus} alt="NeuraLab Nexus" className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
