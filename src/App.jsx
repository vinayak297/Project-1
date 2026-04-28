import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/translator" element={<Translator />} />
    </Routes>
  );
}

export default App;