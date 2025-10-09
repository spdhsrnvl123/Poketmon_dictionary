import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const CategoryButtonStyle = styled.button<{ active: boolean }>`
  width: 44px;
  height: 44px;
  border-width: ${(props) => (props.active ? "2px" : "1px")};
  border-style: solid;
  border-color: ${(props) => (props.active ? "#ffcc00" : "white")};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  img {
    width: 20px;
    margin-bottom: -5px;
  }
  span {
    font-weight: bold;
  }
`;

interface CategoryButtonProps {
  type: string;
}

function CategoryButton({ type }: CategoryButtonProps) {
  return (
    // <CategoryButtonStyle>
    <>
      <img src={logo} alt="" />
      <span>{type}</span>
    </>

    // </CategoryButtonStyle>
  );
}

export default CategoryButton;
