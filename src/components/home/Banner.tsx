import { DownloadIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Connect from "./Connect";
import Role from "./Role";
import ScrollDown from "./ScrollDown";

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen pb-6 text-center text-gray-200">
      <div>
        <Avatar />
        <Role />
        <Connect />
        <Bio />
        <div className="flex justify-center gap-2 mb-12">
          <button className="uppercase flex gap-2 btn text-white  border-white">
            Resume <DownloadIcon className="w-5 h-5" />
          </button>
          <button className="uppercase btn text-white border-white">
            About me
          </button>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Banner;
