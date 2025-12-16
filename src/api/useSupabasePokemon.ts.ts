import { supabase } from "../config/supabase";

export const useSupabasePokemon = async () => {
  const {data, error} = await supabase
    .from("Pokemon")
    .select("*")
    .order("id", { ascending: true });

    if(error) throw new Error(error.message);

  return data;
};  