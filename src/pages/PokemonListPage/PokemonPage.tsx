import styled from "styled-components";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSupabasePokemon } from "../../api/useSupabasePokemon.ts";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  h3 {
    text-align: center;
  }
`;

const UpButtonStyle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 2px;
  transform: translate(-50%, -50%);
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 100%;
  background-color: white;
  padding: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const PokemonListPage = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  // const { filteredData, count } = useFilter();
  // console.log(filteredData);

  //맨 위로 올리기
  const handleScrollToTop = (): void => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = useSupabasePokemon();
  console.log(data);

  return (
    <>
      <StyledContainer>
        <ContentArticle ref={mainContentRef}>
          {/* <ul>
            {filteredData?.map((value) => (
              <Card key={value.id} value={value} />
            ))}
          </ul> */}
          {/* <Outlet /> */}
          <UpButtonStyle onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          </UpButtonStyle>
        </ContentArticle>
      </StyledContainer>
    </>
  );
};

export default PokemonListPage;
