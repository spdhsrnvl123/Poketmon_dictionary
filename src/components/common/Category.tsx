import CategoryButton from '../../components/CategoryButton'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CategoryContent = styled.div`
  padding: 12px 22px;
  display: flex;
  max-width: 334px;
  margin: 0 auto;
  height: 40px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #888;

  &:hover {
    color: #333;
  }

  &:first-of-type {
    left: 0; // 왼쪽 화살표 위치
  }

  &:last-of-type {
    right: 0; // 오른쪽 화살표 위치
  }
`;


function Category() {
  return (
    <CategoryContent>
      <ArrowButton className="swiper-button-prev">
        <FontAwesomeIcon icon={faCaretLeft} />
      </ArrowButton>
      <Swiper
        spaceBetween={6}
        slidesPerView={6}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryButton type="all" />
        </SwiperSlide>
        {/* {types.map((type) => { */}
          {/* return ( */}
            {/* <SwiperSlide key={type}> */}
              {/* <CategoryButton type={type} key={type} /> */}
            {/* </SwiperSlide> */}
          {/* ); */}
        {/* })} */}
      </Swiper>
      <ArrowButton className="swiper-button-next">
        <FontAwesomeIcon icon={faCaretRight} />
      </ArrowButton>
    </CategoryContent>
  );
}

export default Category