import ButtonGradient from "../assets/svg/ButtonGradient";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Videos from "../components/Videos";
import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Courses = () => {
  
  const { userInfo } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Please setup profile to continue.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Videos />
        <Cards />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Courses;
