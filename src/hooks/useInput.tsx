import { useContext, useRef, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const useInput = () :[
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
] => {
  const context = useContext(PokemonContext);
  //확인하기(코파일럿 수정)
  const { setSearchQuery } = context || {};
  const [searchData, setSearchData] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  // 입력창 텍스트 검사
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSearchData(e.target.value);
    } else if (e.target.value === "") {
      setSearchData("");
    }
  };

  // 텍스트 조회
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //확인하기(코파일럿 수정)
    if (setSearchQuery) {
      setSearchQuery(searchData);
    }
    if (ref.current) {
      ref.current.blur();
    }
  };

  return [searchData, handleSearch, handleSubmit];
};
