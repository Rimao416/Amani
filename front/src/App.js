import "./main.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom"; 
import Accueil from "./pages/Accueil";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Accueil />} />
  </Routes>
  );
}

export default App;
