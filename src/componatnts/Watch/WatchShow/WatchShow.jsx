import React from "react";
import "./WatchShow.scss";
import Watch from "../../Assets/backgroundwatchs2.webp";

export default function WatchShow() {
  return (
    <div className="WatchShow row">
      <div className="WatchShow-left col-md-4 col-sm-12 col-xs-12">
        <div className="Top">
          <h5>01.</h5>
          <h1>Sapphire Crystal</h1>
          <p>
            Known for obtaining a remarkable hardness (nearly as hard as a
            diamond). Has a high scratch resistance which makes it a perfect
            material for wristwatches.
          </p>
        </div>

        <div className="bottom">
          <h5>02.</h5>
          <h1>Swiss Ronda Movement</h1>
          <p>
            Run by the vibration of a quartz crystal (32,786 times per second)
            under current to keep accurate time.
          </p>
        </div>
      </div>

      <div className="col-md-4  col-sm-12 col-xs-12">
        <img src={Watch} alt="" className="WatchShow-img" />
      </div>

      <div className="WatchShow-right col-md-4 col-sm-12 col-xs-12">
        <div className="Top">
          <h5>03.</h5>
          <h1>316L Stainless Steel</h1>
          <p>
            The watch case is made of extra low carbon steel that is often used
            in surgical instruments and marine appliances thanks to its high
            corrosion resistance.
          </p>
        </div>

        <div className="bottom">
          <h5>04.</h5>
          <h1>Italian Leather Straps</h1>
          <p>
            The band is made of high-grade Italian eco-leather with a soft
            nubuck lining for extra comfort. Obtains excellent wearing
            qualities.
          </p>
        </div>
      </div>
    </div>
  );
}
