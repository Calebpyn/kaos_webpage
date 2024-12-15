import NavBar from "../common/NavBar";
import Inicio from "../InfoPage/Inicio";
import ChaosMenu from "../InfoPage/ChaosMenu";
import Menu from "../InfoPage/Menu";
import { useRef } from "react";

function InfoPage() {
  //Scroll to refs
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
    const offsetPosition = window.pageYOffset + elementPosition! - 140;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full bg-main-gray pt-[140px]">
      <NavBar scrollFunction={handleScrolling} />
      <div className="w-full h-full lg:flex hidden" ref={ref1}>
        <Inicio />
      </div>
      <div className="w-full h-full" ref={ref2}>
        <ChaosMenu />
      </div>
      <div className="w-full h-full" ref={ref3}>
        <Menu />
      </div>
    </div>
  );
}

export default InfoPage;
