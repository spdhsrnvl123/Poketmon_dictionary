//포켓몬 데이터
export interface Pokemon {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  types: string;
}


//---

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Type {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: Type;
}
