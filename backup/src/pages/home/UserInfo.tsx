import { DownloadIcon } from "@heroicons/react/solid";

const UserInfo = () => {
  return (
    <div className="flex justify-center gap-2 mb-12">
      <button className="flex gap-2 btn uppercase text-white  border-white">
        Resume <DownloadIcon className="w-5 h-5" />
      </button>
      <button className="btn uppercase text-white border-white">
        About me
      </button>
    </div>
  );
};

export default UserInfo;
