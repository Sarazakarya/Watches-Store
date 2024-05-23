import React from "react";
import "./Banner.scss";
import FirstBackground from "../../Assets/watch22.webp";
import SeconsBackground from "../../Assets/watch1.webp";
import ThirdBackground from "../../Assets/watch3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WowAnimation from "../../Use/Wownimation";

export default function Banner() {
  <WowAnimation />;
  return (
    <div className="Swiper-section">
      <Swiper
        slidesPerView={1}
        className=" wow animate__animated animate__fadeInUp"
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".cusor-Next",
          prevEl: ".cusor-pre",
        }}
      >
        <SwiperSlide className="Image-Swiper wow animate__animated animate__fadeIn">
          <img src={FirstBackground} className="img-swiper" />
          <div>
            <p> World's</p>
            <p className="second">Designs</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="Image-Swiper wow animate__animated animate__fadeIn">
          <img src={SeconsBackground} className="img-swiper" />
          <div>
            <p> World's</p>
            <p className="second">Designs</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="Image-Swiper wow animate__animated animate__fadeIn">
          <img src={ThirdBackground} className="img-swiper" />
          <div>
            <p> World's</p>
            <p className="second">Designs</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="nav-swiper">
        <div className="cusor-pre">
          {"<"}
          <span className="privous">PREVIOUS</span>
        </div>
        <div className="cusor-Next">
          <span className="Next">Next</span>
          {">"}
        </div>
      </div>
    </div>
  );
}
