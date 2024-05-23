import React from "react";
import RepairBanner from "../../componatnts/RepairComponeent/RepairBanner/RepairBanner";
import RepairhDescription from "../../componatnts/RepairComponeent/RepairDescription/RepairDescription";
import CardView from "../../componatnts/RepairComponeent/CardView/CardView";
import BestSeller from "../../componatnts/BesSeller/Besseller";
import RepairhAbout from "../../componatnts/RepairComponeent/RepairAbout/RepairAbout";
import RepairOpinon from "../../componatnts/RepairComponeent/RepairOpinion/RepairOpinon";

export default function RepairPage() {
  return (
    <div>
      <RepairBanner />
      <RepairhDescription />
      <CardView />
      <BestSeller title={"Our Bestsellers"} />
      <RepairhAbout />
      <RepairOpinon />
    </div>
  );
}
