import React from "react";
import "./RepairBanner.scss";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FirstBackground from "../../Assets/home-repair-1.webp";
import SecondtBackground from "../../Assets/RepairBackground1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import WowAnimation from "../../Use/Wownimation";

export default function RepairBanner() {
  <WowAnimation />;
  return (
    <div className="Repair-Section">
      <Swiper
        slidesPerView={1}
        className=" wow animate__animated animate__fadeIn"
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".cusor-Next",
          prevEl: ".cusor-pre",
        }}
      >
        <SwiperSlide className="Repair-sec wow animate__animated animate__fadeIn">
          <img src={FirstBackground} className="Repair-img" />

          <div className="repair-des wow animate__animated animate__fadeInUp">
            <h1>Proper Repairs For Proper Watches</h1>
            <p className="description-repair">
              We are a family-owned and operated full-service jeweler and
              professional watch repair store.
            </p>
            <button className="ViewPrices-btn">View Prices</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" Repair-sec wow animate__animated animate__fadeIn">
          <img src={SecondtBackground} className="Repair-img" />

          <div className="repair-des wow animate__animated animate__fadeInUp">
            <h1>Proper Repairs For Proper Watches</h1>
            <p className="description-repair">
              We are a family-owned and operated full-service jeweler and
              professional watch repair store.
            </p>
            <button className="ViewPrices-btn">View Prices</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="btn-swiper">
        <div className="cusor-pre">
          {"<"}
          <span className="privous">PREVIOUS</span>
        </div>
        <div className="cusor-Next">
          <span className="Next">NEXT</span>
          {">"}
        </div>
      </div>
    </div>
  );
}
