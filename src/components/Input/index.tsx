import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const StyledInput = styled.input`
  width: 300px;
  height: 43px;
  padding: 9px 18px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
  border: 0 none;
  border-radius: 25px;
  box-sizing: border-box;
  outline: none;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 9px;
  right: 18px;
  width: 23px;
  height: 23px;

  &::before {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 2px solid #3377ff;
    border-radius: 50%;
    box-sizing: border-box;
    content: "";
  }
  &::after {
    position: absolute;
    right: 3px;
    bottom: 4px;
    width: 6px;
    /* height: 15px; */
    border-top: 2px solid #3377ff;
    border-radius: 5px;
    transform: rotate(45deg);
    content: "";
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Input = () => {
  const [searchData, handleSearch, handleSubmit] = useInput();
  const searchInputRef = useRef<HTMLInputElement>(null);

  //초기 로딩 검색창 포커스
  useEffect(() => {
    if (!searchData) {
      searchInputRef.current?.focus()
    }
  }, []);

  return(
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="포켓몬을 이름을 입력해주세요."
        value={searchData} // input 값은 state로 관리
        ref={searchInputRef}
        onChange={handleSearch}
      />
      <StyledButton />
    </form>
  );
};

export default Input;