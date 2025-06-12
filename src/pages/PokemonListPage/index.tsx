import styled from "styled-components";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { RootState } from "../../store/store";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getPokemonData } from "../../store/pokemons";
import loadingImg from "../../assets/images/loading.gif"
import Category from "../../layouts/Category";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(88vh - 235px);
  overflow: scroll;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  h3 {
    text-align: center;
  }
`;

const ListJob = styled.ul``;

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

const LoadingImg = styled.img`
  width : 100px;
`

const PokemonListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  const [filteredData] = useFilter();
  const mainContentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    dispatch(getPokemonData(0));
  }, []);

  const handleScrollToTop = (): void => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   handleScrollToTop();
  // }, [data.countData]);

  return (
    <>
      {pokemonData.status ==="Loading" ? null :<Category />}
      <MainContent>
        <ContentArticle ref={mainContentRef}>
          <ListJob>
            {pokemonData.status === "Loading" ? (
              <LoadingImg src={loadingImg} alt="loading" />
            ) : (
              filteredData?.map((value, index) => {
                return (
                  <Card
                    key={`${value.id}-${index}`}
                    item={value}
                    index={index}
                  />
                );
              })
            )}
          </ListJob>
          <Outlet />
          <UpButtonStyle onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          </UpButtonStyle>
        </ContentArticle>
      </MainContent>
    </>
  );
};

export default PokemonListPage;
