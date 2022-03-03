import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TentSelect() {
  const [tentdata, setTentData] = useState([]);
  const { campId } = useParams();
  const [mycart, setMycart] = useState([]);
  const [mycartDisplay, setMycartDisplay] = useState([]);
  const updateCartToLocalStorage = (tent, isAdded = true) => {
    console.log(tent, isAdded);
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === tent.id);

    console.log("index", index);
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--;
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));

    // 設定資料
    setMycart(currentCart);
  };
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    console.log(JSON.parse(newCart));

    setMycart(JSON.parse(newCart));
    console.log(mycart);
  }

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = [];

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      );
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount;
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] };
        newMycartDisplay = [...newMycartDisplay, newItem];
      }
    }

    console.log(newMycartDisplay);
    setMycartDisplay(newMycartDisplay);
  }, [mycart]);

  useEffect(() => {
    let getCamp = async () => {
      let response1 = await axios.get(
        `http://localhost:3002/api/tentcate/${campId}`
      );

      setTentData(response1.data);
    };
    getCamp();
  }, []);
  return (
    <>
      {tentdata.map((tent, i) => {
        return (
          <div className="tentBlockA row">
            <div className="col-2">
              <div className="tentSmall">
                <img
                  className="tentSmallPic"
                  src={`http://localhost:3002/tent-pic/img/${tent.img}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-1 align-self-center">
              <div>
                <h5>{tent.tent_item}</h5>
              </div>
            </div>
            <div className="col-3 align-self-center">
              <div>
                <h3>{tent.tent_item}</h3>
              </div>
            </div>
            <div className="tentTextBlock col-4 align-self-center">
              <div className="d-flex justify-content-center">
                <h5>
                  定價:{tent.price}元/帳
                  <br />
                  <br />
                  最大入住人:{tent.number}人
                </h5>
              </div>
            </div>
            <div className="col-2 align-self-center">
              <div className="count">
                <div className="list-group-item" key={tent.id}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      if (tent.amount === 1) return;
                      updateCartToLocalStorage(tent, false);
                    }}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-light">
                    {tent.amount}
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => updateCartToLocalStorage(tent, true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TentSelect;
