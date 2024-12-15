//Components
import HomePageMobile from "../pages/HomePageMobile";
import HomePage from "../pages/HomePage";

function HomeFrame() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex lg:hidden">
        <HomePageMobile />
      </div>

      <div className="w-full h-full lg:flex hidden">
        <HomePage />
      </div>
    </div>
  );
}

export default HomeFrame;
