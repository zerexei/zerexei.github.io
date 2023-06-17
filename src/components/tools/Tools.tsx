const Tools = () => {
  return (
    <section id="tools" className="pt-6 pb-12">
      <h2 className="text-center mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
        Tools
      </h2>

      <div className="flex gap-4 justify-center flex-wrap">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_) => (
          <div className="group/tool h-[15rem] w-[15rem] flex flex-col p-4 rounded-md border border-gray-500 group-hover/project:bg-gray-800 shadow-md shadow-gray-800 cursor-pointer">
            <h3 className="group-hover/tool:underline text-2xl font-semibold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-500 text-sm">Short descriptio nqcwrqwrmqw rqw qw  qw qw rqw r qwr qw wq</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
