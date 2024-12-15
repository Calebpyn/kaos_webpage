//Assets
import asset1 from "../../assets/menu_assets/papas_bravas.jpeg";
import chaos_menu from "../../assets/chaos_menu_logo.svg";

function ChaosMenu() {
  return (
    <div className="w-full h-full flex bg-black">
      <div
        className="w-[45%] h-full bg-cover bg-center flex flex-col justify-end items-start p-1"
        style={{ backgroundImage: `url('${asset1}')` }}
      >
        <span className="font-lato font-thin text-white text-xl">
          papas bravas de guajillo y pasilla
        </span>
      </div>

      <div className="w-[55%] h-full flex flex-col justify-between items-center p-2">
        <span className="w-full text-white font-thin font-lato text-2xl text-justify">
          “Chaos Menu” es un concepto culinario basado en la espontaneidad y la
          creatividad, donde los platillos no siguen reglas estrictas ni recetas
          preestablecidas. Cada menú se crea de manera improvisada y única,
          fusionando sabores y técnicas de diversas culturas, con un fuerte
          enfoque en la gastronomía mexicana. El resultado es una experiencia
          gastronómica impredecible y emocionante, donde cada cena se convierte
          en una sorpresa para los comensales.”
        </span>

        <span className="w-full flex justify-start items-end">
          <img src={chaos_menu} className="w-[60%]" />
        </span>
      </div>
    </div>
  );
}

export default ChaosMenu;
