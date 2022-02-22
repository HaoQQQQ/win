<<<<<<< HEAD
import "../style/BookingTitle.scss";

import shoppingCartArrow from "../img/icon/shopping-cart-arrow.svg";

function BookingTitle() {
  return (
    <>
      <div className="shopping-cart-title">
        <h2 className="text-center">您的訂房資訊</h2>
      </div>
      <div className="checkout-flow d-flex justify-content-between align-items-center">
        <h3 className="checkout-flow-cart">訂房資訊</h3>
        <div>
          <img src={shoppingCartArrow} alt="" />
        </div>
        <h3 className="checkout-flow-pay">您的資料</h3>
        <div>
          <img src={shoppingCartArrow} alt="" />
        </div>
        <h3 className="checkout-flow-deliver">付款資訊</h3>
      </div>
      <div className="cart-dividing-line-full"></div>
      
    </>
  );
}

export default BookingTitle;
=======
import "../style/BookingTitle.scss";

import shoppingCartArrow from "../img/icon/shopping-cart-arrow.svg";

function BookingTitle() {
  return (
    <>
      <div className="shopping-cart-title">
        <h2 className="text-center">您的訂房資訊</h2>
      </div>
      <div className="checkout-flow d-flex justify-content-between align-items-center">
        <h3 className="checkout-flow-cart">訂房資訊</h3>
        <div>
          <img src={shoppingCartArrow} alt="" />
        </div>
        <h3 className="checkout-flow-pay">您的資料</h3>
        <div>
          <img src={shoppingCartArrow} alt="" />
        </div>
        <h3 className="checkout-flow-deliver">付款資訊</h3>
      </div>
      <div className="cart-dividing-line-full"></div>
<<<<<<< HEAD
      
=======
>>>>>>> 3af557f0b6198f26a36af1d3524a5bd0a1f7f280
    </>
  );
}

export default BookingTitle;
>>>>>>> a0cc1163caf8cf92296bead83e0942c73ce6b8c2
