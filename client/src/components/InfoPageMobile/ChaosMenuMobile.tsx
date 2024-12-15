//Assets
import asset1 from "../../assets/chaos_menu_2.svg";

function ChaosMenuMobile() {
  return (
    <div className=" w-full bg-black flex flex-col p-2 justify-between gap-10">
      <span className="text-white font-thin font-lato sm:text-2xl text-xl text-justify w-full">
        “Chaos Menu” es un concepto culinario basado en la espontaneidad y la
        creatividad, donde los platillos no siguen reglas estrictas ni recetas
        preestablecidas. Cada menú se crea de manera improvisada y única,
        fusionando sabores y técnicas de diversas culturas, con un fuerte
        enfoque en la gastronomía mexicana. El resultado es una experiencia
        gastronómica impredecible y emocionante, donde cada cena se convierte en
        una sorpresa para los comensales.”
      </span>

      <img src={asset1} />
    </div>
  );
}

export default ChaosMenuMobile;
