import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { neuraLabNexus } from "../assets/index";
import { BottomLine } from "./design/Hero";


const Register = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem] sm:ml-[10rem] md:ml-[13rem] lg:ml-5">
          <h2 className="h2 mb-4 md:mb-4">
            Register now for&nbsp;seamless collaboration
          </h2>
          <ul className="max-w-[24rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>{" "}
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 text-justify">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Button className={`lg:ml-12 md:ml-6 sm:ml-3`} href="/auth">Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[32rem] lg:mt-4 mt-8">
          <p className="sm:ml-[10rem] md:ml-[12.5rem] lg:ml-auto body-2  text-n-4  md:mb-[3.3rem] lg:mb-[5.65rem] max-w-[24rem] lg:mx-auto text-justify">
          NeuraLab Nexus integrates real time collaboration tools for enhanced project-based learning and communication.
          </p>
          <div className=" relative left-1/2 flex w-[22rem] aspect-square rounded-full border border-n-6 -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto rounded-full border border-n-6">
              <div className="rounded-full  w-[6rem] aspect-square m-auto p-[0.3rem] bg-conic-gradient">
                <div className="flex w-full h-full bg-n-8 rounded-full items-center justify-center">
                  <img
                    src={neuraLabNexus}
                    width={50}
                    height={50}
                    alt="NeuraLab Nexus"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute cursor-pointer top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15  rounded-[1.25rem] -rotate-${
                      index * 45
                    } `}
                  >
                    <img
                      className="m-auto rounded-[10px]"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Register;
