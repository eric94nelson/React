import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Test JSX Formatting</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="sq-img"
      alt=""
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
    <img
      className="sq-img"
      alt=""
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="sq-img"
      alt=""
      src="https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2016/02/Sick-Sad-World-2-1456235888.gif?quality=.8&height=394&width=493"
    />
  </div>,
  document.getElementById("root")
);
