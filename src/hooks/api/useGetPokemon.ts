import { useEffect, useState } from "react";
import { supabase } from "../../config/supabase";

// 타입 한국어 매핑
const TYPE_KO: Record<string, string> = {
  normal: "노말",
  fire: "불꽃",
  water: "물",
  electric: "전기",
  grass: "풀",
  ice: "얼음",
  fighting: "격투",
  poison: "독",
  ground: "땅",
  flying: "비행",
  psychic: "에스퍼",
  bug: "벌레",
  rock: "바위",
  ghost: "고스트",
  dragon: "드래곤",
  dark: "악",
  steel: "강철",
  fairy: "페어리",
};

interface Pokemon {
  id: number;
  name: string; // 한국어 이름
  imageUrl: string; // 이미지
  types: string; // 한국어 타입
  description: string; // 한국어 설명
}

export const useGetPokemon = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    // 1단계: 포켓몬 목록 가져오기
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300`)
      .then((response) => response.json())
      .then((result) => {
        // console.log("1단계: 포켓몬 목록 받음", result.results.length, "개");

        // 2-3단계: 각 포켓몬 상세 정보 가져오기
        const pokemonPromises = result.results.map((pokemon: any) => {
          let pokemonBasicData: any;

          // 2단계: 기본 정보 (이미지, 타입)
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((basicData) => {
              pokemonBasicData = basicData;
              //   console.log("2단계: 기본 정보 -", basicData.name);

              // 3단계: 한국어 정보 (이름, 설명)
              return fetch(basicData.species.url);
            })
            .then((res) => res.json())
            .then((speciesData) => {
              //   console.log("3단계: 한국어 정보 -", speciesData.name);

              // 1. 한국어 이름
              const koreanNameObj = speciesData.names.find(
                (name: any) => name.language.name === "ko"
              );
              const koreanName = koreanNameObj
                ? koreanNameObj.name
                : pokemonBasicData.name;

              // 2. 이미지
              const imageUrl = pokemonBasicData.sprites.front_default;

              // 3. 한국어 타입
              const koreanTypes = pokemonBasicData.types.map(
                (typeInfo: any) => {
                  return TYPE_KO[typeInfo.type.name] || typeInfo.type.name;
                }
              );

              // 4. 한국어 설명
              const koreanDescObj = speciesData.flavor_text_entries.find(
                (entry: any) => entry.language.name === "ko"
              );
              const koreanDesc = koreanDescObj
                ? koreanDescObj.flavor_text.replace(/\n|\f/g, " ")
                : "설명이 없습니다";

              return {
                id: pokemonBasicData.id,
                name: koreanName,
                imageUrl: imageUrl,
                types: koreanTypes,
                description: koreanDesc,
              };
            });
        });

        // Promise.all로 모든 포켓몬 동시 처리
        return Promise.all(pokemonPromises);
      })
      .then((pokemons) => {
        console.log("✅ 완료! 한국어 포켓몬 데이터:", pokemons);
        setData(pokemons);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ 에러 발생:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  //   async function refreshHistory() {
  //     let { data: Pokemon, error } = await supabase.from("Pokemon").select("*");
  //     // console.log(Pokemon);
  //     //   console.log(data);
  //   }

  data.forEach((value) => {
    const { id, name, imageUrl, description, types } = value;

    async function recordHandler() {
      const { data, error } = await supabase
        .from("Pokemon")
        .insert([{ id: id, name: name, imageUrl, description, types }])
        .select();
      //   refreshHistory();
    }
    // recordHandler();
  });

  return { data, loading, error };
};
