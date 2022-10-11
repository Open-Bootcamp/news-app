import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Search from "./pages/Search";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/general" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
