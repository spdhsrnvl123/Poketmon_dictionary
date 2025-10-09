import styled from "styled-components";
import { Pokemon } from "../../types/pokemons";
import { useNavigate } from "react-router-dom";
import circle from "../../assets/images/circle.gif";

const List = styled.li`
  align-items: center;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin: 18px;
  cursor: pointer;
  max-width: 334px;
  height: 80px;
  border-radius: 10px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  img {
    width: 60px;
    height: 60px;
    background-image: url(${circle});
    background-size: contain;
    border-radius: 100%;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    .content {
      display: flex;
      justify-content: space-between;
    }
    .no {
      background-color: #99d88c;
      border-bottom-left-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      padding: 3px;
      /* padding-right: 5px; */
    }
    .name {
      font-size: 16px;
      font-weight: bold;
      color: #3b3f5c;
    }
    span {
      font-weight: bold;
      color: #b8bbd6;
    }
  }
`;

const Card = ({ value }) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`poketmon/${item.id}`);
  // };

  return (
    <>
      {/* <List onClick={handleClick}> */}
      <List>
        <Content>
          <img src={value.imageUrl} alt="" />
          <div className="description">
            <div className="content">
              <a href="#none" className="name">
                {value.name}
              </a>
              <p className="no">No.{value.id}</p>
            </div>
            <span>{value.types}</span>
            <span></span>
            <p>{value.description}</p>
          </div>
        </Content>
      </List>
      {/* </List> */}
    </>
  );
};

export default Card;
