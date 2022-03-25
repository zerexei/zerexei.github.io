const Tools = () => {
  const tools = Array.from(Array(21).keys());
  return (
    <div className="flex flex-wrap gap-6 justify-center p-12">
      {tools.map(() => (
        <div className="p-20 bg-red-400"></div>
      ))}
    </div>
  );
};
export default Tools;
