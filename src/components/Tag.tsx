type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => {
  return (
    <span className="p-1 px-1.5 text-gray-200 border border-gray-400 rounded-full ">
      {name}
    </span>
  );
};

export default Tag;