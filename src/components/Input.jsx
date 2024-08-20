import "bootstrap-icons/font/bootstrap-icons.css";

export const Input = () => {
  return (
    <button
      className="hidden sm:block border border-transparent hover:border-[#8e5cd9] py-2 px-5 rounded-lg transition-all duration-700 ease-in-out bg-slate-100"
      type="button"
    >
      <i className="bi bi-search text-custom-gray">
        <span className="font-semibold ml-2 text-custom-gray">Search</span>
      </i>
      <span className="text-[13px] ml-3 text-custom-gray font-semibold border rounded-md px-1">
        Ctrl K
      </span>
    </button>
  );
};
