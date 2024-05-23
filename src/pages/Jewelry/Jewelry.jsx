import React from "react";
import BannerJewlry from "../../componatnts/Jewelry/BannerJewlry/BannerJewlry";
import JewlaryBrand from "../../componatnts/Jewelry/JewalryBrand/JewlaryBrand";
import HeroJewlary from "../../componatnts/Jewelry/HeroJewllary/HeroJewlarry";
import JewallryDescription from "../../componatnts/Jewelry/JewallryDescription/JewallryDescription";
import JewallryStory from "../../componatnts/Jewelry/JewallryStory/JewallryStory";

export default function Jewelry() {
  return (
    <div>
      <BannerJewlry />
      <JewlaryBrand />
      <HeroJewlary />
      <JewallryStory />
      <JewallryDescription />
    </div>
  );
}
