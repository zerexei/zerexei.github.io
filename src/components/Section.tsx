import ViewMoreTag from "./ViewMoreTag";

type SectionProps = {
  name: string;
  moreItemsUrl: string;
  children: any;
  className?: string;
};

//TODO: create a reusable button if possible
const Section = ({
  name,
  moreItemsUrl,
  children,
  className = "",
}: SectionProps) => {
  return (
    <section className={`mb-12 py-6 ${className}`}>
      <h2 className="mb-6 px-6 pb-2 text-4xl text-center uppercase text-gray-500">
        {name}
      </h2>

      <div className="flex flex-col flex-wrap items-center lg:flex-row lg:justify-center lg:items-stretch lg:gap-5 mb-6">
        {children}
      </div>

      <div className="text-center">
        <ViewMoreTag url={moreItemsUrl} />
      </div>

      <div className="text-center"></div>
    </section>
  );
};

export default Section;
