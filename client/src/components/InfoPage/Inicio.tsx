// Assets
import asset1 from "../../assets/liquid_metal_asset_modified.svg";
import asset2 from "../../assets/menu_assets/salad.jpeg";
import asset3 from "../../assets/asset_3.svg";

function Inicio() {
  return (
    <div className="flex w-full h-full gap-2">
      <div className="bg-black w-[45%] h-full flex flex-col justify-end items-center overflow-hidden relative">
        <div
          className="w-full h-full bg-center bg-no-repeat -mb-[45%]"
          style={{
            backgroundImage: `url('${asset1}')`,
            backgroundSize: "100%",
          }}
        ></div>

        <div className="w-full h-full absolute flex flex-col justify-start text-white font-light font-lato text-2xl text-justify p-2">
          <span>
            <b>Kaos</b> es una experiencia gastronómica exclusiva, donde cada
            semana ofrecemos una cena para 20 comensales. El menú, definido unos
            días antes del evento, se caracteriza por su espontaneidad y
            creatividad, fusionando ingredientes y técnicas tradicionales con
            una clara influencia de la cocina mexicana. Cada platillo es una
            reinterpretación regional que honra los sabores auténticos de
            México, sin seguir estrictos lineamientos, pero siempre con un
            enfoque de alta cocina.
          </span>
        </div>
      </div>

      <div className="w-[55%] h-full flex flex-col">
        <div
          className="w-full h-[60%] bg-cover bg-center flex justify-end items-end p-1"
          style={{ backgroundImage: `url('${asset2}')` }}
        >
          <span className="font-lato font-thin text-white text-xl">
            ensalada de burrata, prosciutto, y durazno
          </span>
        </div>
        <div className="py-2 pr-2 h-[40%] w-full relative">
          <div className="w-full h-full flex justify-center items-center">
            <img src={asset3} className="w-[90%]" />
          </div>
          <div className="font-climate text-7xl flex flex-col justify-between items-start absolute w-full h-[95%] top-0">
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
  );
}

export default Inicio;
