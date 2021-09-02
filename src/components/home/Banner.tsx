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
        <ScrollDown />
      </div>
    </section>
  );
};

export default Banner;
