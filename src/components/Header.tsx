"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faCamera, faPaintbrush, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Header() {
  const [profilePic, setProfilePic] = useState(true),
        [profileToggle, setProfileToggle] = useState(false),
        [animReady, setAnimReady] = useState(false),
        [clickedActive, setClickedActive] = useState(false);

  const profileAction = ():void => {
    if (animReady) {
      setProfilePic(!profilePic);
      setAnimReady(false);
      setProfileToggle(!profileToggle);
      setClickedActive(true);
      setTimeout(() => setAnimReady(true), 1500);
    }
  };

  useEffect(() => {
    setTimeout(()=>setAnimReady(true), 1500);
    if (!profileToggle) {
      setProfileToggle(!profileToggle);
    }
  }, [profileToggle]);

  return (
    <header className="headerSection">
      <div className="wrapper">
        <div className="headerContainer">
          <div className="centerHeaderItems">
            <div className="backgroundStyle"></div>
            <div
              className={`profilePic
                ${profileToggle ? " activeAnim" : ""}
                ${profilePic ? "" : " profilePicAlt"}`}
              onClick={profileAction}
              onMouseLeave={() => setClickedActive(false)}>
              <img
                className="mePicLayer1"
                src={profilePic ?
                  "../assets/mePic-Asphodel-1.jpg" :
                  "../assets/mePic-Asphodel-2.jpg"}
                alt="It's me, Paul. Hello!" />
              <div className="mePicLayerAnim mePicLayer2" aria-hidden="true">
                <img src="../assets/mePic-Asphodel-silhouette.png" alt="" />
              </div>
              <div className="mePicLayerAnim mePicLayer3" aria-hidden="true">
                <img
                  className="mePicLayerImg1"
                  src="../assets/mePic-Asphodel-1.jpg"
                  alt="" />
                <img
                  className="mePicLayerImg2"
                  src="../assets/mePic-Asphodel-2.jpg"
                  alt="" />
              </div>
              <div
                className={`faceSwitchIcon
                  ${clickedActive ? " clickedActive" : ""}`}
                aria-hidden="true">
                <FontAwesomeIcon icon={faCamera} />
                <span className="photoSlashPaint">/</span>
                <FontAwesomeIcon icon={faPaintbrush} />
              </div>
            </div>
            <div className="headerText">
              <h2>Hi there!</h2>
              <h2>My name is</h2>
              <div className="namePro">
                <h1>Paul R.</h1>
              </div>
            </div>
          </div>
          <h3>And I make and teach digital things!</h3>
        </div>
        {/* <div className="learnMore">
          <h3 className="scrollDown">
            <a href="#Skills" className="learnMoreLink">Click here</a> to learn more about me
          </h3>
          <h5 className="resumeHeadingMiddle">
            Or you can cut right to it and check out <a
              href="https://lintbox.com/procca-resume-general.pdf"
              target="_blank"
              rel="noopener noreferrer">my resume</a> or <a
                href="https://www.linkedin.com/in/procc/"
                rel="noopener noreferrer"
                target="_blank" >my LinkedIn profile</a>!
          </h5>
        </div> */}
        <div className="chevrons">
          <FontAwesomeIcon icon={faChevronDown} />
          <FontAwesomeIcon icon={faChevronDown} />
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </header>
  );
};
