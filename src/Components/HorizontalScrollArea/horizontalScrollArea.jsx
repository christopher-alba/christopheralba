import React from "react";
import "./horizontalScrollArea.css";

const HorizontalScrollArea = (props) => {
  return (
    <div className="images-scroll-div-outer">
      <div
        onClick={() => {
          let scrollingDiv = document.getElementsByClassName(
            "images-wrapper"
          )[0];
          scrollingDiv.scrollLeft -= 400;
        }}
      >
        <h1>Left</h1>
      </div>
      <div className="images-wrapper">
        <div className="images-horizontal-scroll-div">{props.children}</div>
      </div>
      <div
        onClick={() => {
          let scrollingDiv = document.getElementsByClassName(
            "images-wrapper"
          )[0];
          scrollingDiv.scrollLeft += 400;
        }}
      >
        <h1>Right</h1>
      </div>
    </div>
  );
};

export default HorizontalScrollArea;
