import Tag from "./Tag";
import VisitTag from "./VisitTag";

interface TagType {
  id: number;
  name: string;
}

export interface CardType {
  id: number;
  name: string;
  description: string;
  url: string;
  tags?: TagType[];
}

type CardProps = Omit<CardType, "id">;

/**
 * Container for contents
 */
const Card = ({ name, description, tags, url }: CardProps) => {
  // set jsx tags if available
  const tagsJSX = tags && (
    <div className="flex-1 flex flex-wrap gap-1 text-xs">
      {tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  );

  return (
    <div className="p-6 lg:w-1/5 lg:bg-gray-800 lg:rounded">
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
      </div>

      <div className="card-body">
        <p className="mb-6 text-sm">{description}</p>
      </div>

      <div className="card-footer">
        {tagsJSX}
        <VisitTag url={url} />
      </div>
    </div>
  );
};

export default Card;
