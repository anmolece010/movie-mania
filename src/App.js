import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Error from "./Components/Error";
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
