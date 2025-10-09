import { useEffect, useState } from "react";
import { supabase } from "../../config/supabase";
import { Pokemon } from "../../types/pokemons";

export const useSupabasePokemon = () => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("Pokemon")
        .select("*")
        .order("id", { ascending: true }); // id 순서대로 정렬

      if (error) {
        console.error("Supabase 에러:", error);
        return;
      }
      setData(data);
      return data;
    } catch (err) {
      console.error("데이터 로딩 실패:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { data, loading, error };
};
