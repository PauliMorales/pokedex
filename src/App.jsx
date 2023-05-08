import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokeInfo from "./pages/PokeInfo";
import { useState } from "react";
import PokeLoad from "./components/Pokedex/PokeLoad";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/pokedex"
            element={<Pokedex setLoading={setLoading} />}
          />
          <Route
            path="/pokedex/:name"
            element={<PokeInfo setLoading={setLoading} />}
          />
        </Route>
      </Routes>
      {loading && <PokeLoad />}
    </div>
  );
}

export default App;
