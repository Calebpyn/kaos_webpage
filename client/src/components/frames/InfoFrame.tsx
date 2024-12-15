import InfoPage from "../pages/InfoPage";
import InfoPageMobile from "../pages/InfoPageMobile";

function InfoFrame() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex lg:hidden">
        <InfoPageMobile />
      </div>

      <div className="w-full h-full lg:flex hidden">
        <InfoPage />
      </div>
    </div>
  );
}

export default InfoFrame;
