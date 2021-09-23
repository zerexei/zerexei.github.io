import DiscordIcon from "../../components/icons/DiscordIcon";
import GithubIcon from "../../components/icons/GithubIcon";
import MailIcon from "../../components/icons/MailIcon";
import SteamIcon from "../../components/icons/SteamIcon";

const connect = () => {
  return (
    <div className="flex justify-center gap-2 mb-6 text-gray-300">
      <a href="#github">
        <GithubIcon css="w-6 h-6" />
      </a>
      <a href="#discord">
        <DiscordIcon css="w-6 h-6" />
      </a>
      <a href="#steam">
        <SteamIcon css="w-6 h-6" />
      </a>
      <a href="mailto:angeloarcillas64@gmail.com">
        <MailIcon css="w-6 h-6" />
      </a>
    </div>
  );
};

export default connect;
