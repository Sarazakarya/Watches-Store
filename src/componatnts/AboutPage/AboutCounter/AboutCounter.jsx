import React from "react";
import "./AboutCounter.scss";
export default function AboutCounter() {
  return (
    <div className="AboutCounter row">
      <div className="col-md-3 col-sm-12 col-col-xs-12 counter">
        <h2>2,568</h2>
        <p>CLIENTS</p>
      </div>

      <div className="col-md-3 col-sm-12 col-col-xs-12 counter">
        <h2>38</h2>
        <p>STORES</p>
      </div>

      <div className="col-md-3 col-sm-12 col-col-xs-12 counter">
        <h2>11,587</h2>
        <p>ITEMS FIXED</p>
      </div>

      <div className="col-md-3 col-sm-12 col-col-xs-12 counter">
        <h2>58</h2>
        <p>PROFESSIONALS</p>
      </div>
    </div>
  );
}
