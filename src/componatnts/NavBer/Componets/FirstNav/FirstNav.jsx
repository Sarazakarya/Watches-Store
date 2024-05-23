import React from "react";
import "./FirstNav.scss";

export default function FirstNav() {
  return (
    <div className="FirstNav">
      <div className="FirstNav-left">
        <p>Lansing, Delta Township 6334 W. Saginaw, Suite D</p>
        <p className="number">+1 800 123 4567</p>
      </div>
      <div className="FirstNav-right">
        <p>English</p>
        <p>USD$</p>
      </div>
    </div>
  );
}
