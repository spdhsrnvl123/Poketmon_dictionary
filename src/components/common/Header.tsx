import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

function Header() {
  const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px;
  `;

  const StyledLogo = styled.img`
    width: 43px;
    height: 60px;
  `;

  const StyledTitle = styled.h1`
    font-size: 31x;
    cursor: pointer;
  `;

  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="logo" />
      <StyledTitle>포켓몬 사전</StyledTitle>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </StyledContainer>
  );
}

export default Header;
