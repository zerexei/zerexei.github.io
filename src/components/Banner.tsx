import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import DiscordIcon from "./icons/DiscordIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import SteamIcon from "./icons/SteamIcon";

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen pb-6 text-center">
      <div>
        <div className="w-1/3 pt-6 mx-auto">
          <img
            src="https://picsum.photos/200"
            alt="user avatar"
            className="w-full object-cover rounded-full"
          />
        </div>

        <p className="mb-1">Web Developer</p>

        <div className="flex justify-center gap-2 mb-4">
          {/* GITHUB */}
          <a href="#github">
            <GithubIcon css="w-7 h-7" />
          </a>

          {/* Discord */}
          <a href="#discord">
            <DiscordIcon css="w-7 h-7 text-blue-800" />
          </a>

          {/* STEAM */}
          <a href="#steam">
            <SteamIcon css="w-7 h-7" />
          </a>

          {/* GMAIL */}
          <a href="mailto:angeloarcillas64@gmail.com">
            <MailIcon css="w-7 h-7 text-red-500" />
          </a>
        </div>

        <p className="p-2 py-4 bg-red-200">
          I am Angelo Arcillas, an aspiring web developer from the philippines.
          I love back-end development and Cybersecurity.
        </p>

        <div className="scroll-down">
          <ChevronDoubleDownIcon className="w-8 h-8 text-current" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
