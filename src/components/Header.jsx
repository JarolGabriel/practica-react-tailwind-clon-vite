import { Navbar } from "./Navbar";
import logo from "../assets/vite.svg";
import { Input } from "../components/Input";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mt-3">
      <div className="flex items-center pl-8">
        <img className="cursor-pointer text-xl" src={logo} alt="logo-vite" />
        <span className="ml-2 mr-6 font-bold text-custon-gray-black">Vite</span>
        <Input />
      </div>
      <Navbar />
    </header>
  );
};
