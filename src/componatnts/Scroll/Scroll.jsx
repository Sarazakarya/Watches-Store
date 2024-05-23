import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import WowAnimation from "../Use/Wownimation";
import "./Scroll.scss";
import HandleToTop from "../Use/HandleToTop";

export default function Scroll() {
  <WowAnimation />;
  const [visible, setVisible] = useState();

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-container wow animate__animated animate__fadeIn ${
        visible ? "visible" : ""
      }`}
    >
      <div className="scroll-box" onClick={HandleToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}
