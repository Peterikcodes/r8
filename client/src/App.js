import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import BG1 from "./img/bg1.mp4";
import BG2 from "./img/bg2.mp4";
import { navLinks } from "./data";
import SvgIcon from "@mui/material/SvgIcon";
import { Fade } from "react-reveal";
var lerp = require("lerp");

const iconStyles = {
  height: "20px",
  width: "20px",
};

const App = () => {
  const videoRef = useRef();
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((pS) => pS + 50);
    }, 50);

    if (time >= 1200) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div className="app">
      <div className="bgContainer">
        <video
          className="videoBG first"
          src={BG1}
          autoPlay
          muted
          onEnded={() => {
            videoRef.current.play();
            setVisible(false);
          }}
          style={{
            display: visible ? "flex" : "none",
          }}
        />
        <video className="videoBG second" src={BG2} muted ref={videoRef} loop />
      </div>
      <div className="bgGradient" />
      <div
        className="navContainer"
        style={{
          transition: "ease-in-out .5s",
          filter: `blur(${lerp(20, 0, time / 1200)}px)`,
        }}
      >
        <Fade bottom cascade distance="400%" delay={800}>
          <ul className="nav">
            {navLinks.map((l, i) => {
              return (
                <a
                  className={`navLinkContainer ${l.name}`}
                  key={i}
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="navLink">
                    {l.name}
                    {l.iconType === "mui" && (
                      <SvgIcon
                        className="linkIcon"
                        component={l.icon}
                        style={{ ...iconStyles, color: "#9e35f7" }}
                      />
                    )}
                    {l.iconType === "svg" && (
                      <img
                        className="linkIcon"
                        src={l.icon}
                        alt=""
                        style={{
                          ...iconStyles,
                          filter:
                            "invert(50%) sepia(94%) saturate(6167%) hue-rotate(259deg) brightness(94%) contrast(105%)",
                        }}
                      />
                    )}
                  </p>
                </a>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default App;
