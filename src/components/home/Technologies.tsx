import UpIcon from '@components/icons/UpIcon';

const Technologies = () => {
  return (
    <section id="technologies" className="pt-6 pb-12">
      <h2 className="text-center mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-2">
        {[1, 1, 1, 1, 1, 1, 1].map(() => {
          return (
            <div className="px-6 py-4 cursor-pointer hover:text-red-300 border border-transparent hover:border-red-400 rounded-full flex items-center gap-2 text-sm">
              <div className="bg-red-400 rounded-full p-2">
                <UpIcon />
              </div>
              <div className="flex-1">JavaScript</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
