function App() {
  return (
    <div className="font-mono container mx-auto p-8">
      // ---------------
      <div className="flex items-center">
        <p className="flex-1">
          <h1 className="text-4xl font-bolder">John Doe</h1>
          <h3 className="text-xl font-bold text-gray-500 tracking-wide">
            Web Developer
          </h3>
        </p>
        <div className="w-28">
          <img
            className="relative object-cover rounded-full"
            src="https://picsum.photos/500"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
