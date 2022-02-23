import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "../style/PicSlider.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
// import { baseUrl } from "./config";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <div>
            <div>
              <img
                className="small"
                src={`http://localhost:3002/camp-pic/img/camp${i + 1}.jpg`}
                alt=""
              />
            </div>
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div className="list_item">
            <img
              className="pic polygon"
              src="http://localhost:3002/camp-pic/img/camp1.jpg"
              alt=""
            />
          </div>
          <div className="list_item">
            <img
              className="pic polygon"
              src="http://localhost:3002/camp-pic/img/camp2.jpg"
              alt=""
            />
          </div>
          <div className="list_item">
            <img
              className="pic polygon"
              src="http://localhost:3002/camp-pic/img/camp3.jpg"
              alt=""
            />
          </div>
          <div lassName="list_item">
            <img
              className="pic polygon"
              src="http://localhost:3002/camp-pic/img/camp4.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
