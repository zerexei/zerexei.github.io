import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import Connect from "./Connect";

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
        <Connect />

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
