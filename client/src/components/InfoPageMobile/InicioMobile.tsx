//Assets
import asset1 from "../../assets/liquid_metal_asset_modified.svg";
import asset2 from "../../assets/asset_3.svg";

function InicioMobile() {
  return (
    <div className="w-full h-full">
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="w-full bg-black flex flex-col justify-end items-center relative overflow-hidden h-[70%]">
          <div className="absolute w-full h-full flex p-2 pb-16">
            <span className="text-white font-thin font-lato sm:text-2xl text-xl text-justify w-full">
              <b>Kaos</b> es una experiencia gastronómica exclusiva, donde cada
              semana ofrecemos una cena para 20 comensales. El menú, definido
              unos días antes del evento, se caracteriza por su espontaneidad y
              creatividad, fusionando ingredientes y técnicas tradicionales con
              una clara influencia de la cocina mexicana. Cada platillo es una
              reinterpretación regional que honra los sabores auténticos de
              México, sin seguir estrictos lineamientos, pero siempre con un
              enfoque de alta cocina.
            </span>
          </div>
          <img src={asset1} className="w-full -mb-[20%]" />
        </div>
        <div className="w-full h-[30%] bg-main-gray">
          <div className="flex justify-center items-center w-full h-full relative">
            <img src={asset2} className="w-[80%]" />
            <div className="font-climate text-5xl sm:text-7xl flex flex-col justify-between items-start absolute w-full h-[95%] top-0 px-2">
              <button className="text-left text-white hover:tracking-wide tr">
                NUESTRAS
                <br />
                FECHAS
              </button>
              <button className="hover:tracking-wide tr">RESERVAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioMobile;
