import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

type VisitTagProps = {
  url: string;
};

const VisitTag = ({ url }: VisitTagProps) => {
  const icon = <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />;

  if (url.match(/^https?:\/\//)) {
    return (
      <a href={url} className="btn text-sm tracking-widest select-none">
        Visit {icon}
      </a>
    );
  }

  return (
    <Link to={url} className="btn text-sm tracking-widest select-none">
      Visit {icon}
    </Link>
  );
};

export default VisitTag;
