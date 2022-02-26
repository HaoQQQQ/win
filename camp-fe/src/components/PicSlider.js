import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import axios from "axios";
// Import css files
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "../style/PicSlider.scss";

//data是CampDetail裡撈出來的
function PicSlider({ data }) {
  const [list, setList] = useState([]);
  //放在useEffect裡，還有[]讓他只執行一次
  useEffect(() => {
    if (data.length > 0) {
      let newList = [
        data[0].img1,
        data[0].img2,
        data[0].img3,
        data[0].img4,
        data[0].img5,
        data[0].img6,
        data[0].img7,
        data[0].img8,
      ];
      setList(newList);
      console.log(newList);
    }
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div>
          <div className="campS">
            <img
              className="campSSty"
              src={`http://localhost:3002/camp-pic/img/${list[i]}`}
              alt=""
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {list.map((img) => {
          return (
            <div className="campL">
              <img
                className="campLSty polygon"
                src={`http://localhost:3002/camp-pic/img/${img}`}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PicSlider;
