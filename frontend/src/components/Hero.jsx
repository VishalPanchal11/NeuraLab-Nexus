import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { heroIcons, navigation } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] ">
          <h1 className="h3 mb-6">
            Enhance Your Learning Experience and Boost Your Efficiency with
            Collaborative CodeLab and Personalized Courses{" "}
            <span className="inline-block relative">
              NeuraLab Nexus
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              ></img>
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
             Upgrade your productivity with NeuraLab Nexus, the All-in-One workspace.
          </p>
          <Button href="/auth" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="z-1 relative p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] h-full ">
                <img
                  src={robot}
                  className="w-full scale-1.7 -translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%] md:scale-1 "
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating text="Knowledge is Infinite" className="absolute left-4 right-4 bottom-5 md:left-1/2 md:bottom-8 md:right-auto md:w-[31rem] md:-translate-x-1/2 " />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
                    {heroIcons.map((icon, index) => (
                      <a className="p-5 z-10 cursor-pointer" key={index} href={navigation[index].url}>
                        <img src={icon} width={24} height={25} alt={navigation[index].title} />
                      </a>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <a className="cursor-pointer" href="/chatroom" >
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex "
                      title="ChatRoom"
                    />
                  </a>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
