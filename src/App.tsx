import GlobalStyle from "./assets/styles/GlobalStyle";
import Router from "./router/router";
import Header from "./components/common/Header";
import SearchBar from "./components/common/SearchBar";
import Category from "./components/common/Category";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PokemonProvider>
        <SearchBar />
        <Category />
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
