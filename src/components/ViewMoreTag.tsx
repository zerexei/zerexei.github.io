import { Link } from "react-router-dom";

type ViewMoreTagProps = {
  url: string;
};

const ViewMoreTag = ({ url }: ViewMoreTagProps) => {
  if (url.match(/^https?:\/\//)) {
    return (
      <a href={url} className="underline hover:text-red-400">
        View more ...
      </a>
    );
  }

  return (
    <Link to={url} className="underline hover:text-red-400">
      View more
    </Link>
  );
};

export default ViewMoreTag;
