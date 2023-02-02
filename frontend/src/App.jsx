import "reset-css";
import { Routes, Route } from "react-router-dom";
import Booking from "@pages/Booking/Booking";
import Home from "@pages/Home/Home";
import Header from "@components/Header/Header";
import Login from "@pages/login/Login";
import Style from "./style";

function App() {
  return (
    <Style>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Style>
  );
}

export default App;
