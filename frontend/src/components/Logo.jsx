import { neuraLabNexus } from "@/assets";

const Logo = () => {
  return (
    <div className="flex  justify-start items-center gap-2">
      <img src={neuraLabNexus} width={50} height={50} alt="neuraLabNexus" />
      <span className="text-[27px] leading-[33px] text-opacity-90 text-white font-semibold ">
        <span className="text-purple-500"> N</span>euraLab{" "}
        <span className="text-purple-500">N</span>exus
      </span>
    </div>
  );
};

export default Logo;
