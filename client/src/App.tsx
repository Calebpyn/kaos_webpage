import { HashRouter, Route, Routes } from "react-router-dom";
import HomeFrame from "./components/frames/HomeFrame";
import InfoFrame from "./components/frames/InfoFrame";

function App() {
  return (
    <HashRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<HomeFrame />} />
          <Route path="/info" element={<InfoFrame />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
