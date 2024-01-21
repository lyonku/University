import React from "react";
import { useSwiper } from "swiper/react";
import ArrowImg from "components/common/Images/arrow-img";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button
        onClick={() => swiper.slidePrev()}
        className="swiper-nav-btn left"
      >
        <ArrowImg color={"#0D4CD3"} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="swiper-nav-btn right"
      >
        <ArrowImg color={"#0D4CD3"} />
      </button>
    </div>
  );
};
