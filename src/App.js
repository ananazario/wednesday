import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Cast from "./paginas/Cast";
import Curiosities from "./paginas/Curiosities";
import PaginaDeErro from "./paginas/PaginaDeErro";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/curiosities" element={<Curiosities />} />
        <Route path="/*" element={<PaginaDeErro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
