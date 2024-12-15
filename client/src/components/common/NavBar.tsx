//Assets
import logo_name from "../../assets/Kaos_logo.svg";
import logo from "../../assets/Logo_kaos.svg";

//React-router-dom
import { useNavigate } from "react-router-dom";

//Component Type
type NavBarProps = {
  scrollFunction: (id: number) => void;
};

const NavBar: React.FC<NavBarProps> = ({ scrollFunction }) => {
  //Navigation
  const navigate = useNavigate();

  return (
    <div className="w-full bg-main-gray h-[140px] p-2 flex justify-between items-end fixed top-0 z-[999]">
      <div className="h-full flex justify-start items-end gap-3">
        <img
          src={logo_name}
          className="h-full cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <img src={logo} className="" />
      </div>

      <div className="flex items-end justify-end px-2 gap-3 text-2xl leading-none font-thin font-lato text-white">
        <button
          className="hover:text-black tr"
          onClick={() => scrollFunction(1)}
        >
          Inicio
        </button>
        <button
          className="hover:text-black tr"
          onClick={() => scrollFunction(2)}
        >
          Kaos
        </button>
        <button
          className="hover:text-black tr"
          onClick={() => scrollFunction(3)}
        >
          Menú
        </button>
      </div>
    </div>
  );
};

export default NavBar;
