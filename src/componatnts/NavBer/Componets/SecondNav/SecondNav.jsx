import React from "react";
import "./SeconNav.scss";
import LogoImage from "../../../Assets/logo.webp";
import Pages from "./Components/Pages/Page";
import Items from "./Components/Items/Items";
import PagesResponsive from "./Components/PagesResponsive/PagesResponsive";
import WowAnimation from "../../../Use/Wownimation";
export default function SecondNav() {
  <WowAnimation />;
  return (
    <div className="SecondNav">
      <Pages />
      <PagesResponsive />

      <div className="Logo">
        <img src={LogoImage} alt="" />
      </div>

      <Items />
    </div>
  );
}
