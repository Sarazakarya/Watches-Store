import React, { useState } from "react";
import "./AboutTeam.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import WowAnimation from "../../Use/Wownimation";
export default function AboutTeam() {
  <WowAnimation />;
  const [ShowIcons, setShowIcons] = useState([false, false, false]);

  function handleMouseEnter(index) {
    const updatedIcons = [...ShowIcons];
    updatedIcons[index] = true;
    setShowIcons(updatedIcons);
  }

  function handleMouseLeave() {
    setShowIcons([false, false, false]);
  }
  return (
    <div className="AboutTeam ">
      <div className="team col-md-4 col-sm-12 ">
        <div className="Filter"></div>
        <div
          className="team-des"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <p>REPAIR MASTER</p>
          <h5>David Perkins</h5>
          <div
            className={
              ShowIcons[1]
                ? "team-icon-appear wow animate__animated animate__fadeIn"
                : "team-icon"
            }
          >
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>

      <div className="Seondteam col-md-4 col-sm-12 ">
        <div className="Filter"></div>
        <div
          className="team-des"
          onMouseEnter={() => {
            handleMouseEnter(2);
          }}
          onMouseLeave={() => {
            handleMouseLeave(2);
          }}
        >
          <p>JEWELRY DESIGNER</p>
          <h5>Arnold Stevens</h5>
          <div
            className={
              ShowIcons[2]
                ? "team-icon-appear wow animate__animated animate__fadeIn"
                : "team-icon"
            }
          >
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>

      <div className="tirdteam col-md-4 col-sm-12">
        <div className="Filter"></div>

        <div
          className="team-des"
          onMouseEnter={() => {
            handleMouseEnter(3);
          }}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <p>REPAIR MASTER</p>
          <h5>Mike Peterson</h5>

          <div
            className={
              ShowIcons[3]
                ? "team-icon-appear wow animate__animated animate__fadeIn"
                : "team-icon"
            }
          >
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="team-single-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
