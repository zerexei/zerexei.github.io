type SectionProps = {
  name: string;
  children: any;
};
const Section = ({ name, children }: SectionProps) => {
  return (
    <section className="mb-12 pb-6">
      <h2 className="mb-6 px-6 pb-2 text-4xl text-center uppercase text-gray-500">
        {name}
      </h2>

      <div className="flex justify-center flex-wrap mb-4">{children}</div>

      <div className="text-center">
        <a href="#a" className="btn">
          View more...
        </a>
      </div>
    </section>
  );
};

export default Section;
