import "bootstrap-icons/font/bootstrap-icons.css";

export const Navbar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center sm:font-semibold text-[#3c3c43]">
        <li className="hover:text-[#8e5cd9]">
          <a href="">Guide</a>
        </li>
        <li className="hover:text-[#8e5cd9]">
          <a href="">Config</a>
        </li>
        <li className="hover:text-[#8e5cd9]">
          <a href="">Plugins</a>
        </li>
        <li className="hover:text-custom-gray">
          <a href="">
            Resources <span className="text-[13px]">˅</span>
          </a>
        </li>
        <li className="hover:text-custom-gray">
          <a href="">
            Version <span className="text-[13px]">˅</span>
          </a>
        </li>
        <i className="bi bi-three-dots mr-6"></i>
      </ul>
      <div className="sm:hidden cursor-pointer">
        <i className="bi bi-search mr-8"></i>
        <i className="bi bi-list-nested mr-8 font-bold"></i>
      </div>
    </>
  );
};
