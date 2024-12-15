//Assets
import { useState } from "react";
import logo from "../../assets/Logo_kaos.svg";

//Icons
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

//Prop type
type SideBarType = {
  handleScroll: (id: number) => void;
};

const SideBar: React.FC<SideBarType> = ({ handleScroll }) => {
  //Side bar state
  const [isOpen, setIsOpen] = useState(false);

  //Navigation
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-0 w-full bg-main-gray h-[100px] p-2 flex justify-between items-end z-[10]">
        <img
          src={logo}
          className="h-full cursor-pointer"
          onClick={() => navigate("/")}
        />

        <span
          className="flex flex-col gap-3 items-end group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="w-[40px] h-[1px] bg-white group-hover:w-[50px] tr"></span>
          <span className="w-[30px] h-[1px] bg-white group-hover:w-[40px] tr"></span>
          <span className="w-[40px] h-[1px] bg-white group-hover:w-[50px] tr"></span>
        </span>
      </div>
      <div
        className={`fixed p-2 h-screen bg-black bg-opacity-30 z-[999] backdrop-blur-md top-0 tr right-0 ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
      >
        <span className="w-full flex justify-start items-center mt-5 mb-2">
          <GrClose
            className="text-5xl text-white hover:scale-105 tr cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </span>

        <div className="flex flex-col font-climate text-white text-4xl gap-1">
          <span
            className="hover:text-main-green tr cursor-pointer"
            onClick={() => handleScroll(1)}
          >
            INICIO
          </span>
          <span
            className="hover:text-main-green tr cursor-pointer"
            onClick={() => handleScroll(2)}
          >
            KAOS
          </span>
          <span
            className="hover:text-main-green tr cursor-pointer"
            onClick={() => handleScroll(3)}
          >
            MENÚ
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
