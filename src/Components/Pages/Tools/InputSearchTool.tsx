const InputSearchTool = ({
  search,
  handleSearch,
}: {
  search: string;
  handleSearch: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search tool..."
      autoComplete="search"
      className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
    />
  );
};

export default InputSearchTool;
