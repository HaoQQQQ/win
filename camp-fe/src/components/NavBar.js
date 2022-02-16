import React from "react";
// import '../style/Navbar.scss'
import "../style/CampDetail.scss";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

//圖片
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import shoppingCart from "../img/shoppingCart.svg";

function NavBar() {
  return (
    <>
      <Navbar className="navbar navbar-expand-sm navbar-success bg-success">
        <a className="navbar-brand" href="/#">
          <img src={logo} width={50} height={50} alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline">
            <input
              type="image"
              src={search}
              onclick="submit()"
              style={{ height: "30px", width: "30px" }}
              alt=""
            />
            <input
              className="form-control ml-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropleft">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                營區瀏覽
              </a>
              <div className="dropdown-menu" role="menu">
                <div className="d-flex">
                  <ul>
                    <a className="dropdown-item" href="/#">
                      露營設備
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      狩獵帳
                    </a>
                    <a className="dropdown-item" href="/#">
                      TEE PEE
                    </a>
                    <a className="dropdown-item" href="/#">
                      露營車
                    </a>
                    <a className="dropdown-item" href="/#">
                      星空帳
                    </a>
                    <a className="dropdown-item" href="/#">
                      泡泡帳
                    </a>
                    <a className="dropdown-item" href="/#">
                      鐘型帳
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      環境特色
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      草皮
                    </a>
                    <a className="dropdown-item" href="/#">
                      森林
                    </a>
                    <a className="dropdown-item" href="/#">
                      溫泉
                    </a>
                    <a className="dropdown-item" href="/#">
                      海邊
                    </a>
                    <a className="dropdown-item" href="/#">
                      湖邊
                    </a>
                    <a className="dropdown-item" href="/#">
                      河邊
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      北部
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      新北市
                    </a>
                    <a className="dropdown-item" href="/#">
                      台北市
                    </a>
                    <a className="dropdown-item" href="/#">
                      桃園市
                    </a>
                    <a className="dropdown-item" href="/#">
                      新竹市
                    </a>
                    <a className="dropdown-item" href="/#">
                      新竹縣
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      中部
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      苗栗縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      台中市
                    </a>
                    <a className="dropdown-item" href="/#">
                      彰化縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      南投縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      雲林縣
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      南部
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      嘉義市
                    </a>
                    <a className="dropdown-item" href="/#">
                      嘉義縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      台南市
                    </a>
                    <a className="dropdown-item" href="/#">
                      高雄市
                    </a>
                    <a className="dropdown-item" href="/#">
                      屏東縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      澎湖縣
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      東部
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      宜蘭縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      花蓮縣
                    </a>
                    <a className="dropdown-item" href="/#">
                      台東縣
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      專欄介紹
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      寵物
                    </a>
                    <a className="dropdown-item" href="/#">
                      手作體驗
                    </a>
                    <a className="dropdown-item" href="/#">
                      櫻花祭
                    </a>
                    <a className="dropdown-item" href="/#">
                      客家桐花季
                    </a>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item dropleft">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                商品瀏覽
              </a>
              <div className="dropdown-menu" role="menu">
                <div className="d-flex">
                  <ul>
                    <a className="dropdown-item" href="/#">
                      環保餐具
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/#">
                      水壺
                    </a>
                    <a className="dropdown-item" href="/#">
                      餐具組
                    </a>
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      環保家具
                    </a>
                    <div className="dropdown-divider" />
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      露營裝備
                    </a>
                    <div className="dropdown-divider" />
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      禮物卡
                    </a>
                    <div className="dropdown-divider" />
                  </ul>
                  <ul>
                    <a className="dropdown-item" href="/#">
                      點數兌換
                    </a>
                    <div className="dropdown-divider" />
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                活動總覽
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/#">
                  回收活動
                </a>
                <a className="dropdown-item" href="/#">
                  促銷活動
                </a>
              </div>
            </li>
            <li>
              <input
                type="image"
                src={shoppingCart}
                onclick="submit()"
                style={{ height: "30px", width: "30px" }}
                alt=""
              />
            </li>
            <li>
              <button className="btn btn-outline-danger ml-2" type="submit">
                登入
              </button>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
