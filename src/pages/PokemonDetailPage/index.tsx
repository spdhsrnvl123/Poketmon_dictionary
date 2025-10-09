import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3b3f5c;
  text-align: center;
  padding-top: 30px;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: #989898;
  background-color: transparent;
  text-shadow: 2px 1px 3px rgba(233, 183, 183, 0.274);
  animation: represent 0.7s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
`;

const Description = styled.div`
  color: #3B3F5C;
  text-align: center;
  padding: 20px;
`;

const Stats = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #3b3f5c;
  text-align: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const LoadingImg = styled.img`
  width: 100px;
`;

function PokemonsDetailPage() {
  const navigate = useNavigate();
  let { poketmonId } = useParams();


  return (
    <Modal>
      {/* <Title>{pokemonName}</Title> */}
      {/* <Description>{item[0]?.description}</Description> */}
      {/* <Img src={item[0]?.imageUrl} alt="" /> */}
      <Stats>Stats</Stats>
      <div id="chart">
        <ReactApexChart
          type="radar"
          height={300}
        />
      </div>
      <Button onClick={() => navigate("/poketmon_dictionary")}>X</Button>
    </Modal>
  );
}

export default PokemonsDetailPage;
