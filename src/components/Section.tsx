import ViewMoreTag from "./ViewMoreTag";

type SectionProps = {
  title: string;
  moreItemsUrl: string;
  className?: string;
  children: JSX.Element[];
};

/**
 * Container for a self-contained content
 */
const Section = ({
  title,
  moreItemsUrl,
  className = "",
  children,
}: SectionProps) => {
  return (
    <section className={`mb-12 py-6 ${className}`}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="section-body">
        {children}
      </div>

      <div className="section-footer">
        <div className="text-center">
          <ViewMoreTag url={moreItemsUrl} />
        </div>
      </div>
    </section>
  );
};

export default Section;
