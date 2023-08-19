const ProjectShowcase = () => {
  return (
    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {/* main main */}
      <div className="mt-4">
        <figure className="">
          <img
            src="https://picsum.photos/1000"
            alt="project image"
            width={500}
            height={500}
            loading="lazy"
            className="w-full md:h-[50vh] h-[50vw] rounded-md shadow"
          />
        </figure>
      </div>

      {/* project images */}
      <div className="flex flex-wrap gap-2 mt-2">
        {[1, 1, 1, 1, 11].map((x) => (
          <span
            key={x}
            className="
                   md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] bg-gray-300 rounded-md opacity-75 cursor-pointer hover:opacity-100 shadow"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
