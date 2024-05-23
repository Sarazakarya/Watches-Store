import React, { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";
export default function WowAnimation() {
  useEffect(() => {
    const wow = new WOW({
      live: false,
    });
    wow.init();

    return () => {
      wow.stop();
    };
  }, []);
  return WowAnimation;
}
