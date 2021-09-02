import { ArrowRightIcon } from "@heroicons/react/solid";
import Tag from "./Tag";

type TagProps = {
  id: number;
  name: string;
};

type CardProps = {
  name: string;
  description: string;
  tags?: TagProps[];
  url: string;
};

const Card = ({ name, description, tags, url }: CardProps) => {
  const tagsHTML = tags && (
    <div className="flex-1 flex flex-wrap gap-1 text-xs">
      {tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  );

  return (
    <div className="p-6">
      <h4 className="inline-block pr-4 mb-2 text-xl text-red-400 border-b border-red-400">
        {name}
      </h4>

      <p className="mb-6 text-sm">{description}</p>
      
      <div className="flex items-center justify-between">
        {tagsHTML}
        <a href={url} className="btn text-sm tracking-widest">
          Visit
          <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Card;
