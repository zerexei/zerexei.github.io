import { ArrowRightIcon } from "@heroicons/react/solid";

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
        <span
          key={tag.id}
          className="p-1 px-2 text-white bg-red-400 rounded-full"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-white p-4">
      <h4 className="inline-block pr-6 mb-2 text-xl border-b-4 border-red-400">
        {name}
      </h4>
      <p className="mb-6 text-sm tracking-wider text-gray-900">{description}</p>
      <div className="flex items-center justify-between pb-6">
        {tagsHTML}
        <a
          href={url}
          className="py-1.5 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 text-sm tracking-wider"
        >
          View
          <ArrowRightIcon className="inline-block w-5 h-5 ml-2 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Card;
