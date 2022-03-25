import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

const Connect = () => {
  const iconClassName = "w-8 h-8 text-red-400 hover:text-red-500";

  return (
    <div className="flex items-center space-x-2">
      <a href="https://www.linkedin.com/in/angeloarcillas" alt="linkedin link">
        <FaLinkedin className={iconClassName} />
      </a>

      <a href="https://github.com/zerexei" alt="github link">
        <FaGithub className={iconClassName} />
      </a>

      <a href="/" alt="stack overflow link">
        <FaStackOverflow className={iconClassName} />
      </a>

      <a href="/" alt="twitter link">
        <FaTwitter className={iconClassName} />
      </a>

      <a href="/" alt="discord link">
        <FaDiscord className={iconClassName} />
      </a>
    </div>
  );
};

export default Connect;
