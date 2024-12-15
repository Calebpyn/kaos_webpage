// Assets
import asset1 from "../../assets/liquid_metal_asset.png";
import asset2 from "../../assets/home_asset.png";
import logo_name from "../../assets/Kaos_logo.svg";
import logo from "../../assets/Logo_kaos.svg";
import chaos_menu from "../../assets/chaos_menu.svg";

//React-router-dom
import { useNavigate } from "react-router-dom";

function HomePage() {
  //Navigation hook
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex lg:flex-row flex-col justify-between bg-main-gray">
      <div className="w-[65%] h-full flex flex-col justify-end items-center relative overflow-hidden">
        <div
          className="w-full h-full bg-center bg-no-repeat -mb-[40%]"
          style={{
            backgroundImage: `url('${asset1}')`,
            backgroundSize: "130%",
          }}
        ></div>

        <div className="absolute w-full h-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-col items-center">
            <div className="w-full text-white leading-none">
              <div className="w-full -mt-8 py-9 px-1">
                <img src={logo_name} className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full flex justify-between items-end px-2">
              <span>
                <img src={logo} />
              </span>
              <span className="font-lato font-thin text-white text-5xl">
                open table
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between p-2 items-end">
            <button
              className="text-5xl font-lato font-light bg-main-gray hover:text-white hover:bg-black tr"
              onClick={() => {
                navigate("/info");
              }}
            >
              +INFO
            </button>
            <button className="text-5xl font-lato font-light bg-main-gray hover:text-white hover:bg-black tr">
              RESERVAR
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-[35%] h-full bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center"
        style={{ backgroundImage: `url('${asset2}')` }}
      >
        <div className="w-full px-2">
          <img src={chaos_menu} className="w-[85%]" />
        </div>

        <div className="w-full flex justify-end p-1">
          <span className="font-lato font-thin text-white text-xl">
            bruschetta de higo, prosciutto, y pistache
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
