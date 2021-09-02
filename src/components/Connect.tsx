import DiscordIcon from "./icons/DiscordIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import SteamIcon from "./icons/SteamIcon";

const connect = () => {
  return (
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
  );
};

export default connect;
