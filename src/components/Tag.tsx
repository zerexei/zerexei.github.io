type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => {
  return (
    <span className="p-1 px-1.5 text-gray-400 border border-gray-500 rounded-full ">
      {name}
    </span>
  );
};

export default Tag;
