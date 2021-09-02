type SectionProps = {
  name: string;
  children: any;
};
const Section = ({ name, children }: SectionProps) => {
  return (
    <section className="pb-6">
      <h2 className="mb-6 px-6 pb-2 text-4xl text-center uppercase text-gray-400">
        {name}
      </h2>

      <div className="flex justify-center flex-wrap">
        {children}
      </div>
    </section>
  );
};

export default Section;
