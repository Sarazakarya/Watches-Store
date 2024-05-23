import React from "react";
import "./RepairOpinion.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FirstOpinin from "../../Assets/women1.avif";
import SconstOpinin from "../../Assets/SecondOpinin.webp";
import Last from "../../Assets/lastOpinwebp.webp";
export default function RepairOpinon() {
  return (
    <div className="RepairOpinon">
      <div className="cusor-prePage">
        {"<"}
        <span className="privous">PREVIOUS</span>
      </div>
      <Swiper
        loop
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: ".cusor-NextPage",
          prevEl: ".cusor-prePage",
        }}
      >
        <SwiperSlide className="Swiper-Opinin">
          <h1>Testimonials</h1>
          <p>
            "Reprizo recently repaired my Panerai. My watch was fixed within 2-3
            days and I was informed at every step of the way. The price was fair
            and the service excellent. I have no problems recommending this
            company."
          </p>
          <img src={FirstOpinin} alt="" />
        </SwiperSlide>

        <SwiperSlide className="Swiper-Opinin">
          <h1>Testimonials</h1>
          <p>
            "They got my wedding ring repaired and maintained. When I picked it
            up, it was literally a brand new one! And they do it all for a
            really moderate price. I highly recommend this shop to anyone who
            need this kind of service."
          </p>
          <img src={SconstOpinin} alt="" />
        </SwiperSlide>

        <SwiperSlide className="Swiper-Opinin">
          <h1>Testimonials</h1>
          <p>
            "I’ve been going to this repair shop for 10 years now. Getting all
            kinds of small services, like battery replacement and engravings, as
            well as they did a big overhaul for my watch twice. All very
            careful."
          </p>
          <img src={Last} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="cusor-NextPage">
        <span className="Next">NEXT</span>
        {">"}
      </div>
    </div>
  );
}
