const UserInfo = () => {
  return (
    <div className="flex items-center mb-12">
      <div className="flex-1">
        <h1 className="text-4xl font-bolder">Angelo Arcillas</h1>
        <h2 className="text-sm text-gray-500">angeloarcillas64@gmail.com</h2>
        <h3 className="text-xl font-bold text-gray-500">Web Developer</h3>
      </div>
      <div className="w-28">
        <img
          className="object-cover rounded-full"
          src="https://picsum.photos/500"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default UserInfo;
