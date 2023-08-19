const GenericModal = ({ children }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center ">
          <div className="relative overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-main-primary sm:my-8 sm:w-full sm:max-w-5xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
