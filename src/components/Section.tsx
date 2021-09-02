type SectionProps = {
  name: string;
  children: any;
};
const Section = ({ name, children }: SectionProps) => {
  return (
    <section className="py-6">
      <h2 className="mb-6 text-4xl text-center uppercase">{name}</h2>

      <div className="flex justify-center flex-wrap">{children}</div>
    </section>
  );
};

export default Section;
