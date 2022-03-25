const Project = ({ title, url, role, year, img_url, description }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <h3 className="flex-1">
          <a
            href={url}
            alt={title}
            className="mr-2 font-bold text-red-500 hover:text-red-600 hover:underline"
          >
            {title}
          </a>
          <span className="text-gray-500">
            {role} - {year}
          </span>
        </h3>
        <div className="w-12 h-12">
          <img src={img_url} alt="project logo" className="object-cover" />
        </div>
      </div>
      <p className="text-sm"> {description}</p>
    </div>
  );
};
export default Project;
