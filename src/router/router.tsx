import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PokemonsDetailPage from "../pages/PokemonDetailPage";
import PokemonListPage from "../pages/PokemonListPage/\bPokemonPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/poketmon_dictionary" element={<PokemonListPage />}>
          {/* <Route path="poketmon/:poketmonId" element={<PokemonsDetailPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;