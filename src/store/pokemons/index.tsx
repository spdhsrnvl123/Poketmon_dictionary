import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  FlavorTextEntry,
  Pokemon,
  PokemonType,
} from "../../types/pokemons";
import { sortPokemonByName } from "../../utils/sortPokemonByName";
import { PokemonListResponse } from "../../types/pokemonsSummary";

//포켓몬 상세데이터 요청
const fetchPokemonDetail = async(url: string) : Promise<Pokemon> =>{
    const pokemonRes = await fetch(url);
    const pokemonData = await pokemonRes.json();

    // 포켓몬 설명을 가져오기
    const speciesResponse = await fetch(pokemonData.species.url);
    const speciesData = await speciesResponse.json();
    const description = speciesData.flavor_text_entries.find((entry: FlavorTextEntry) => entry.language.name === "en").flavor_text;

    return {
        name: pokemonData.name, // 포켓몬 이름
        imageUrl: pokemonData.sprites.front_default, // 포켓몬 이미지
        id: pokemonData.id, // 포켓몬 ID
        types: pokemonData.types.map((type: PokemonType) => type.type.name), // 포켓몬 타입들
        description: description || "No description available",
    };
}

// 포켓몬 데이터를 요청
const getPokemonData = createAsyncThunk<Pokemon[], number>(
  "getData/getPokemonData",
  async (offset) => {
    try {
      // 포켓몬 목록을 가져오기
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`);
      const data: PokemonListResponse = await res.json();
      // 각 포켓몬 URL을 통해 상세 정보를 가져오기
      const pokemons = await Promise.all(data.results.map((pokemon) => fetchPokemonDetail(pokemon.url)));     

      return sortPokemonByName(pokemons);
    } catch(error){
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch pokemon data"); // 에러 발생 시 처리
    }
  }
);

// Redux slice 설정
let pokemonData = createSlice({
  name: "pokemonData", // slice 이름
  initialState: {
    value: [] as Pokemon[], // 초기 데이터는 빈 배열
    status: "Loading", // 로딩 상태
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonData.pending, (state) => {
        state.status = "Loading"; // 데이터 로딩 중
      })
      .addCase(getPokemonData.fulfilled, (state, action) => {
        const newPokemons = action.payload.filter(
          (newPokemon) =>
            !state.value.some(
              (existingPokemon) => existingPokemon.id === newPokemon.id
            )
        );
        state.value = [...state.value, ...newPokemons]; // 데이터 로딩 완료 후 값 저장
        state.status = "complete"; // 로딩 완료 상태
      })
      .addCase(getPokemonData.rejected, (state) => {
        state.status = "fail"; // 에러 발생 시 실패 상태
        console.error("error");
      });
  },
});

export default pokemonData;
export { getPokemonData };
