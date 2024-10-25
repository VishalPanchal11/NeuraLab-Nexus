import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import Logo from "./Logo";
import { useAppStore } from "@/store";
import ProfileInfo from "@/Pages/Chat/components/contacts-container/components/profile-info";

const Header = () => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Logo />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex bg-n-8 lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transitions-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden " : ""
                } py-6 px-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        {isAuthenticated ? (
          <ProfileInfo />
        ) : (
          <>
            <a
              href="/auth"
              className={`button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 text-sm lg:flex ${
                pathname.hash === "#signup"
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
              }`}
            >
              New account
            </a>
            <Button className="hidden text-sm lg:flex" href="/auth">
              Sign in
            </Button>
          </>
        )}

        <Button className={`ml-auto lg:hidden px-3`} onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
