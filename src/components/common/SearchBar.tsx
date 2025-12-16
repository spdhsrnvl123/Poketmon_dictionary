// import styled from "styled-components";
// import bgImage from "../../assets/images/bg_1.gif";
// import Input from "../../components/Input";
// import { useFilter } from "../../hooks/useFilter";

// const StyledContainer = styled.div`
//   /* display: grid; */
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   /* width: 100%; */
//   height: 200px;
//   background-image: url(${bgImage});
//   background-color: gray;
//   background-size: 100%;
//   background-position: center; /* 이미지 중앙에 고정 */
//   background-repeat: no-repeat; /* 배경 반복 없음 */
// `;

// const StyledInputContent = styled.div`
//   margin: 8px 0 14px;

//   position: relative;
//   margin: 0 auto;
//   border-radius: 25px;
//   box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.4);
// `;

// const StyledResultContainer = styled.p`
//   font-size: 20px;
//   color: #fff;
//   text-align: center;
// `;

// const StyledResultContent = styled.em`
//   color: #ffdd00;
//   font-size: 26px;
// `;

// const SearchBar = () => {
// const { count } = useFilter();

//   return (
//     <StyledContainer>
//         <StyledInputContent>
//           <Input />
//         </StyledInputContent>
//       <StyledResultContainer>
//         검색 결과 : <StyledResultContent>{count}</StyledResultContent>건
//       </StyledResultContainer>
//     </StyledContainer>
//   );
// };

// export default SearchBar;
