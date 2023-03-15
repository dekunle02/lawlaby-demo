import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Promo from "./pages/Promo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="end" element={<Promo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
