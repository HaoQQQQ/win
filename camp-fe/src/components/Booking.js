import React from "react";
import BookingTitle from "./BookingTitle";
import "../style/Booking.scss";

//圖片
import BookingBanner from "../img/BookingBanner.jpg";

function Booking() {
  return (
    <>
      <div className="container">
        {/*上半*/}
        <BookingTitle />
        <div className="banner">
          <img className="pic" src={BookingBanner} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default Booking;
