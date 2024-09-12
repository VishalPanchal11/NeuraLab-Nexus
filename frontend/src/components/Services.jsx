import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container ">
        <Heading
          title="NeuraLab Nexus is made for Tech Enthusiasts."
          text="Student, Teachers, Employee, Entrepreneur everybody can use it"
          className="text-center"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] p-8 mb-5 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto flex items-center">
              <img
                className="w-[100%] h-[67.5%] object-cover md:object-right"
                alt="Learning Platform"
                width={800}
                height={730}
                src={service1}
              />
            </div>
            <div className="relative ml-auto xl:mr-[1rem] max-w-[25rem]">
              <h4 className="h4 mb-4">E-Learning</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                NeuraLab Nexus unlocks potential of tech learners
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-4 items-start border-t border-b border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <VideoBar />
            <a href="#courses">
              <Generating
                text="Search Keyword..."
                className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-[40rem] md:left-1/2 md:right-auto md:bottom-8 md:-translate-x-1/2 md:w-[40rem]"
              />
            </a>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <a href="#chatroom">
              <div className="relative min-h-[39rem] xl:h-[46.5rem] border border-n-1/10 rounded-3xl overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    src={service2}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="Realtime Chat"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Realtime Chat</h4>
                  <p className="body-2 mb-[3rem] ">
                    Instant communication and collaboration among users,
                    enhancing interaction and productivity during collaborative
                    tasks.
                  </p>
                </div>
                <PhotoChatMessage />
              </div>
            </a>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden xl:min-h-[46.5rem] min-h-[39rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">CodeLab</h4>
                <p className="mb-[2rem] body-2 text-n-3 ">
                  Multiple users can code together simultaneously, fostering
                  teamwork through shared code editing and real-time updates.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 1
                          ? "w-[3rem] h-[3rem] pd-0.1rem md:p-[0.2rem] bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 1
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[0.9rem]"
                            : ""
                        }
                      >
                        <img
                          src={item}
                          width={40}
                          height={40}
                          alt="icon"
                          className="rounded-[5px]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                  alt="CodeLab"
                />
                <VideoChatMessage />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
