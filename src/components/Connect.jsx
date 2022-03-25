import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

const Connect = () => {
  return (
    <div className="flex items-center space-x-2 text-red-400">
      <a href="#" alt="linkedin link">
        <FaLinkedin className="w-8 h-8 hover:text-red-500" />
      </a>

      <a href="#" alt="github link">
        <FaGithub className="w-8 h-8 hover:text-red-500" />
      </a>

      <a href="#" alt="stack overflow link">
        <FaStackOverflow className="w-8 h-8 hover:text-red-500" />
      </a>

      <a href="#" alt="twitter link">
        <FaTwitter className="w-8 h-8 hover:text-red-500" />
      </a>

      <a href="#" alt="discord link">
        <FaDiscord className="w-8 h-8 hover:text-red-500" />
      </a>
    </div>
  );
};
export default Connect;
