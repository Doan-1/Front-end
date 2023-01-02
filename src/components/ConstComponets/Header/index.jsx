import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../context/Api.context";
import style from "./Header.module.css";
import { faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemHeaderBag from "../ItemHeaderBag";
import { useNavigate } from "react-router-dom";

import emptyCart from "../../../assets/emptycart.png";
import { data } from "autoprefixer";

const api = new API();
const Header = () => {
  // var id = localStorage.getItem('userid');
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    "New Arrivals",
    "Women",
    "Man",
    "Kids",
    "Sales",
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      let id = localStorage.getItem("userid");
      api.getUserbyIDuser(id).then((res) => {
        setUser(res.data);
      });
      api.getOrderbyIDuser(id).then((data) => {
        setProducts(data.data[0].orders);
      });
      api.getProduct().then((res) => {
        setProducts(res.data);
      });
    }
  }, [window.location.href]);

  // const handleDelete = (id, stt) => {
  //     let newArr = products.filter((item, i) => i !== stt)
  //     setProducts(newArr)
  //     api.deleteOneInOrder("1", id)
  //     // document.querySelectorAll(".item")[stt].style.display = 'none';
  //     // let a = bags;
  //     // a.splice(stt,1)
  //     // let arr = a;
  //     // setBags(arr);
  // }
  const handleSignOut = () => {
    localStorage.setItem("userid", "");
    navigate("/");
    setUser(false);
  };
  return (
    <div className={style.header}>
      {/* <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="" className={style.logo__img} />
        </Link>
      </div> */}
      <nav className={style.menu}>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <Link to="/product/category/New-Arrivals">New Arrivals</Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/product/category/Men">Man</Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/product/category/Women">Women</Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/product/category/Kids">Kids</Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/product/category/Sales">Sales</Link>
          </li>
        </ul>
      </nav>
      <div className={style.feature}>
        <div className="relative grid grid-cols-[1fr_9fr] items-center justify-center mx-6 my-[10px] bg-primary bg-opacity-10 rounded-[30px]">
          <div className="flex items-center justify-center text-sm ml-4">
            <FontAwesomeIcon icon={faSearch} className="text-xl" />
          </div>
          <div>
            <input
              className="w-full rounded-none outline-none p-2 bg-[#4682b400] text-xl text-content"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => {
                setSearch(!search);
                setSearchValue(e.target.value);
              }}
            />
          </div>
          {search ? (
            <div className="absolute top-full left-0 w-full bg-white py-3 shadow-lg max-h-80 overflow-y-scroll z-10">
              <ul>
                {products
                  .filter((product) => {
                    return product.product_name.match(
                      new RegExp(searchValue, "i")
                    );
                  })
                  .map((product, index) => {
                    return (
                      <li
                        className="text-xl py-2 px-4 cursor-pointer hover:text-white hover:bg-primary"
                        key={index}
                      >
                        <Link
                          to={"/productinfo/" + product.slug}
                          className="w-full"
                          onClick={() => {
                            setSearch(false);
                            setSearchValue("");
                          }}
                        >
                          {product.product_name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ) : null}
        </div>
        {user ? (
          <nav className={style.account}>
            <ul className={style.account__func_list}>
              <li></li>
              <li className={style.account__func_item}>
                <Link to={"/bag"}>
                  <FontAwesomeIcon icon={faBagShopping} />
                </Link>
              </li>
              <li className={style.account__func_item}>
                <Link to="/favorites">
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
              <li className={style.account__func_item}>
                <FontAwesomeIcon className="text-[#292929]" icon={faUser} />
                <ul className={style.account__func_item_info}>
                  <li>
                    <div>
                      <img
                        src="https://i.pinimg.com/736x/53/5b/28/535b2824fb82e36d09ea877df9f2a57d.jpg"
                        alt=""
                      />
                    </div>
                    <Link to={"/profile"}>
                      <span>{user.user_name}</span>
                    </Link>
                    <FontAwesomeIcon icon={faPen} className="text-lg" />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      style={{ fontSize: "14px" }}
                    />
                    <Link to="/bag">
                      <span>My bag</span>
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "14px" }}
                    />
                    <Link to="/favorites">
                      <span>My favourites</span>
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faTruck}
                      style={{ fontSize: "14px" }}
                    />
                    <Link to="/orders">
                      <span>My orders</span>
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      style={{ fontSize: "14px" }}
                    />
                    <span onClick={handleSignOut}>Sign out</span>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </nav>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Link
              to={"/account"}
              style={{
                textDecoration: "none",
                color: "#00A4B4",
                fontWeight: "500",
              }}
            >
              <span style={{ fontSize: "14px", cursor: "pointer" }}>
                Đăng nhập
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
