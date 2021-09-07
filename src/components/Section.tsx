type SectionProps = {
  name: string;
  children: any;
  className?: string;
};
const Section = ({ name, children, className = "" }: SectionProps) => {
  return (
    <section className={`mb-12 py-6 ${className}`}>
      <h2 className="mb-6 px-6 pb-2 text-4xl text-center uppercase text-gray-500">
        {name}
      </h2>

      <div className="flex flex-col flex-wrap items-center lg:flex-row lg:justify-center lg:items-stretch lg:gap-5 mb-6">
        {children}
      </div>

      <div className="text-center">
        <a href="#a" className="btn">
          View more...
        </a>
      </div>
    </section>
  );
};

export default Section;
