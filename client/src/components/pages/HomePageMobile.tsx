//Assets
import logo_name from "../../assets/kaos_vertical.svg";
import logo from "../../assets/Logo_kaos.svg";
import asset1 from "../../assets/liquid_metal_asset.png";
import { useNavigate } from "react-router-dom";

function HomePageMobile() {
  //Navigation
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-main-gray relative flex flex-col justify-end items-center overflow-hidden">
      <div
        className="w-full h-full bg-bottom bg-no-repeat -mb-[15%]"
        style={{
          backgroundImage: `url('${asset1}')`,
          backgroundSize: "170%",
        }}
      ></div>

      <div className="absolute w-full h-screen flex justify-between items-center">
        <div className="h-full py-1 w-[50%]">
          <img src={logo_name} className="h-full" />
        </div>
        <div className="h-full w-[50%] flex flex-col items-end justify-start">
          <div className="py-32 flex flex-col gap-5 items-end px-2">
            <span className="font-lato font-thin text-white text-4xl text-nowrap">
              open table
            </span>
            <img src={logo} />
          </div>

          <div className="flex flex-col gap-4 items-end px-2">
            <button
              className="text-4xl font-lato font-light bg-main-gray hover:text-white hover:bg-black tr"
              onClick={() => {
                navigate("/info");
              }}
            >
              +INFO
            </button>
            <button className="text-4xl font-lato font-light bg-main-gray hover:text-white hover:bg-black tr">
              RESERVAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMobile;
