import Section from "./Section";
import { neuraLabNexus, smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import {LeftLine,RightLine} from "./design/Pricing";

const Pricing = () => {
  return (
    <Section crosses
    crossesOffset="lg:translate-y-[5.25rem]" className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[3.5rem] lg:flex">
          <img
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
            src={neuraLabNexus}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />{" "}
          </div>
        </div>
        <Heading
          tag="GET STARTED WITH NeuraLab Nexus"
          title="Pay once, use forever"
        />
        <div className="relative"><PricingList/><LeftLine/><RightLine/></div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
