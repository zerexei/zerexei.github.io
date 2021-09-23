import Avatar from "./Avatar";
import Bio from "./Bio";
import Connect from "./Connect";
import Role from "./Role";
import ScrollDown from "./ScrollDown";
import UserInfo from "./UserInfo";

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen pb-6 text-center text-gray-200">
      <div>
        <Avatar />
        <Role />
        <Connect />
        <Bio />
        <UserInfo />
        <ScrollDown />
      </div>
    </section>
  );
};

export default Banner;
