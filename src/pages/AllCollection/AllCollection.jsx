import React from "react";
import AboutBackground from "./../../componatnts/AboutPage/AboutBackground/AboutBackground";
import Collection from "../../componatnts/AllColection/Collection";

export default function AllCollection() {
  return (
    <div>
      <AboutBackground title={"Collections"} page={"Collections"} />
      <Collection />
    </div>
  );
}
