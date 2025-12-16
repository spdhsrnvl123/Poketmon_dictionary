import GlobalStyle from "./assets/styles/GlobalStyle";
import Header from "./components/common/Header";
// import SearchBar from "./components/common/SearchBar";
import Category from "./components/common/Category";
import PokemonListPage from "./pages/PokemonListPage/\bPokemonPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
        {/* <SearchBar /> */}
        <Category />
        <PokemonListPage />
    </>
  );
}

export default App;
