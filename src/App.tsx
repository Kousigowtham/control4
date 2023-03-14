import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./views/About/About";
import Home from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
