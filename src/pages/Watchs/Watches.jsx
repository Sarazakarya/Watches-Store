import React, { useState } from "react";
import Hero from "../../componatnts/Hero/Hero";
import WatchShow from "./../../componatnts//Watch/WatchShow/WatchShow";
import Banner from "../../componatnts/Watch/BannerWatches/Banner";
import WatchDescription from "./../../componatnts/Watch/WatchDescription/WatchDescription";
import BestSeller from "./../../componatnts/BesSeller/Besseller";
import WatchStory from "./../../componatnts/Watch/WatchStory/WatchStory";
import Loader from "../../componatnts/Loader/Loader";

export default function Watches() {
  return (
    <div>
      <Banner />
      <Hero title={"The Lawson Collection"} />
      <WatchDescription />
      <WatchShow />
      <WatchStory />
      <BestSeller title={"Our Bestsellers"} />
    </div>
  );
}
