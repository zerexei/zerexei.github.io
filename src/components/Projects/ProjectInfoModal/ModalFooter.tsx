type ModalFooterProps = {
  title: string;
  description: string;
  tools: string[];
  viewProjectUrl: string;
  close: () => void;
};

const ModalFooter = ({
  title,
  description,
  tools,
  viewProjectUrl,
  close,
}: ModalFooterProps) => {
  return (
    <div className="flex flex-col w-full pb-4 md:pb-6 md:items-end md:flex-row bg-slate-50 dark:bg-slate-700">
      <div className="flex-1 px-4 text-white sm:px-6">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="font-semibold">{description}</p>
        <div className="flex gap-2 mt-2 md:w-[25rem] overflow-x-auto select-none project-info-modal-tools">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="whitespace-nowrap px-4 pb-.5 text-xs border rounded-full text-slate-400 border-slate-500 "
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-4 px-4 pt-4 sm:px-6">
        <button
          onClick={close}
          type="button"
          className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-200 ring-1 ring-inset ring-gray-300 md:w-auto"
        >
          close
        </button>
        <a
          href={viewProjectUrl}
          type="button"
          className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md md:w-auto hover:bg-indigo-500"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ModalFooter;
