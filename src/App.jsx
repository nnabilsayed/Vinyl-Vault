import { Routes, Route } from "react-router";
import Homepage from "./Pages/Homepage";
import AlbumDetails from "./Compnents/AlbumDetails";
import Navbar from "./Compnents/Navbar";
import Fotter from "./Compnents/Fotter";
import NewsLetter from "./Compnents/NewsLetter";
import Vinyls from "./Pages/Vinyls";
import Cart from "./Compnents/CartPage";
import About from "./Pages/About";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/albumdetails/:id"
          element={<AlbumDetails></AlbumDetails>}
        ></Route>
        <Route path="/vinyls" element={<Vinyls></Vinyls>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <NewsLetter></NewsLetter>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
