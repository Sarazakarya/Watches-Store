import React from "react";
import AboutBackground from "../../componatnts/AboutPage/AboutBackground/AboutBackground";
import AboutSescription from "../../componatnts/AboutPage/AboutDescription/AboutSescription";
import AutoCounter from "../../componatnts/AboutPage/AboutCounter/AboutCounter";
import AboutTeam from "../../componatnts/AboutPage/AboutTeam/AboutTeam";
import AboutMap from "../../componatnts/AboutPage/AboutMap/AboutMap";

export default function About() {
  return (
    <div>
      <AboutBackground title={"About-Us"} page={"About"} />
      <AboutSescription />
      <AutoCounter />
      <AboutTeam />
      <AboutMap />
    </div>
  );
}
