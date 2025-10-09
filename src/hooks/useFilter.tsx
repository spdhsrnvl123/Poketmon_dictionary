import { useContext, useMemo } from "react";
import { Pokemon } from "../types/pokemons";
import { PokemonContext } from "../context/PokemonContext";

export const useFilter = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("useFilter must be used within PokemonProvider");
  }

  const { data, searchQuery } = context;

  // 검색별 포켓몬 필터링 (useMemo로 성능 최적화)
  const filteredData = useMemo(() => {
    if (!data) return null;

    // 검색어가 없으면 전체 데이터 반환
    if (!searchQuery.trim()) {
      return data;
    }

    // 검색어로 필터링
    return data.filter((pokemon: Pokemon) => {
      const pokemonName = pokemon.name.toLowerCase();
      const searchTerm = searchQuery.toLowerCase();
      
      return pokemonName.includes(searchTerm);
    });
  }, [data, searchQuery]); // data나 searchQuery 변경 시 재계산

  return {
    filteredData,
    count: filteredData?.length || 0,
  };
};
