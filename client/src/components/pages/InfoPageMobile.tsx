//Components
import SideBar from "../common/SideBar";
import InicioMobile from "../InfoPageMobile/InicioMobile";

//Assets
import asset1 from "../../assets/menu_assets/salad.jpeg";
import asset2 from "../../assets/menu_assets/papas_bravas.jpeg";
import ChaosMenuMobile from "../InfoPageMobile/ChaosMenuMobile";
import MenuMobile from "../InfoPageMobile/MenuMobile";
import { useRef } from "react";

function InfoPageMobile() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  //Scroll Logic
  const handleScrolling = (id: number) => {
    console.log(id);
    let elementPosition;
    if (id == 1) {
      elementPosition = ref1.current?.getBoundingClientRect().top;
    } else if (id == 2) {
      elementPosition = ref2.current?.getBoundingClientRect().top;
    } else if (id == 3) {
      elementPosition = ref3.current?.getBoundingClientRect().top;
    }
    const offsetPosition = window.pageYOffset + elementPosition! - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-black relative">
      <SideBar handleScroll={handleScrolling} />
      <div className="w-full h-screen pt-[100px]" ref={ref1}>
        <InicioMobile />
      </div>
      <div
        style={{ backgroundImage: `url('${asset1}')` }}
        className="w-full h-[400px] bg-center bg-cover flex justify-end items-end p-1"
      >
        <span className="text-white font-thin">
          ensalada de burrata, prosciutto, y durazno
        </span>
      </div>

      <div className="w-full" ref={ref2}>
        <ChaosMenuMobile />
      </div>

      <div
        style={{ backgroundImage: `url('${asset2}')` }}
        className="w-full h-[400px] bg-center bg-cover flex justify-end items-start p-1"
      >
        <span className="text-white font-thin mt-16">
          papas bravas de guajillo y pasilla
        </span>
      </div>

      <div className="w-full" ref={ref3}>
        <MenuMobile />
      </div>
    </div>
  );
}

export default InfoPageMobile;
