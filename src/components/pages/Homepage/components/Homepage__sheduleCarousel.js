import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import ArrowImg from "components/common/Images/arrow-img";

const HomepageSheduleCarousel = ({ currentShedule }) => {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 4,
    },
    2050: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="HomepageSchedule__body">
      {(!currentShedule.mass || currentShedule.mass.length < 1) && (
        <div className="HomepageSchedule__none">
          Занятий нет, можно отдохнуть 💤
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView="2"
        breakpoints={sliderSettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-nav-btn left swiper-button-prev"
        >
          <ArrowImg color={"#0D4CD3"} />
        </button>
        {currentShedule?.mass?.map((item, index) => {
          return (
            <SwiperSlide
              className="res-slide"
              style={{ zIndex: 100 - index }}
              key={index}
            >
              <div className="HomepageSchedule__item">
                <div className="HomepageSchedule__item-time">
                  {item.eventTime}
                </div>
                <div className="HomepageSchedule__item-subject">
                  {item.eventName}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-nav-btn right swiper-button-next"
        >
          <ArrowImg color={"#0D4CD3"} />
        </button>
      </Swiper>
    </div>
  );
};

export default HomepageSheduleCarousel;
