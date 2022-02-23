import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//圖片
import camp1 from "../img/camp1.jpg";
import camp2 from "../img/camp2.jpg";
import camp3 from "../img/camp3.jpg";
import camp4 from "../img/camp4.jpg";
import camp5 from "../img/camp5.jpg";
import camp6 from "../img/camp6.jpg";
import camp7 from "../img/camp7.jpg";
import camp8 from "../img/camp8.jpg";

function PicSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={`../img/camp${i + 1}.jpg`} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div className="small">
            <img className="picSmall" src={camp1} alt="" />
          </div>
          <div className="small">
            <img className="picSmall" src={camp2} alt="" />
          </div>
          <div className="small">
            <img className="picSmall" src={camp3} alt="" />
          </div>
          <div className="small">
            <img className="picSmall" src={camp4} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}
export default PicSlider;
