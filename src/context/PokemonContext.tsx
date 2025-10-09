import { createContext, useState } from "react";
import { Pokemon } from "../types/pokemons";
import { useSupabasePokemon } from "../hooks/api/useSupabasePokemon.ts";

type PokemonContextType = {
  data: Pokemon[] | null;
  loading: boolean;
  error: Error | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: string; // 추가
  setFilterType: (type: string) => void; // 추가
};

export const PokemonContext = createContext<PokemonContextType | null>(null); //data

export const PokemonProvider = ({ children }) => {
  const { data, loading, error } = useSupabasePokemon();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All"); // 타입 필터 상태 추가

  const value = {
    data,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    filterType,
    setFilterType,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
