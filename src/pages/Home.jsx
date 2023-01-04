import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/Home_page.module.css";
import API from "../context/Api.context";
import intro_img from "../assets/intro-img.jpg";
import intro_sub_img from "../assets/intro-sub-img.png";
import slide_img from "../assets/slide-img.jpg";
import women_img from "../assets/women.jpg";
import man_img from "../assets/man.jpg";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductItem from "../components/ConstComponets/ProductItem";

import Slideshow from "../components/ConstComponets/SlideShow";
import Loading from "../components/ConstComponets/Loading";

const Home = () => {
  // var id = localStorage.getItem('userid');
  const api = new API();
  const [loading, setLoading] = useState(true);
  const number = 10;
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    api.getProduct().then((data) => {
      setProducts(data.data);
    });
    api.getTopProduct("1").then((res) => {
      console.log(res.data);
      // setTopProducts(res.data);
    });
    // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
  }, [window.location.href]);

  useEffect(() => {
    setLoading(false);
  }, [products]);
  return (
    <div>
      <div className={style.main}>
        <div>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1380,c_limit/711bee91-53d3-47b6-b0f4-bb7fd7978b8a/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="m-10 px-64">
          <p className="mb-8 text-[#111] text-3xl text-center font-bold leading-6">
            The Best Gifts Move You
          </p>
          <h4 className="text-[#111] text-7xl leading-10 font-black text-center">
            UNWRAP POSSIBILITIES
          </h4>
          <p className="mb-6 text-[#111] text-2xl text-center font-medium leading-10">
            This holiday, give more than a gift. Give the joy of possibility.
            Inspire a special someone to chase that runner’s high. To dance like
            nobody’s watching. To feel stronger. To be better.
          </p>
        </div>
        {/* <div className={style.intro}>
          <div className={style.intro__wrap}>
            <div className={style.intro__info}>
              <h2>Built your flight</h2>
              <span>Introducing product name. Our lightest shoe, ever.</span>
              <a href="#products">
                <button className="btn">SHOP NOW</button>
              </a>
            </div>
          </div>
          <div className={style.intro__img}>
            <img src={intro_img} alt="" />
            <div className={style.intro__sub_img}>
              <img src={intro_sub_img} alt="" />
            </div>
          </div>
        </div> */}
        <div className={style.slideshow__container}>
          <Slideshow />
        </div>
        {/* <div className={style.category}>
                    <div className={style.category__list}>
                        <div className={style.category__item}>
                            <img src={women_img} alt="" />
                            <div className={style.overlayer}>
                                <h3>WOMEN</h3>
                                <Link to="/product/category/Women" style={{ "textDecoration": "none", "color": "#fff" }}>
                                    <div className={style.shop}>
                                        <span>Shop now</span>
                                        <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: '16px', marginLeft: '8px', position: 'relative', top: '1px' }} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div></div>
                        <div className={style.category__item}>
                            <img src={man_img} alt="" />
                            <div className={style.overlayer}>
                                <h3>MAN</h3>
                                <Link to="/product/category/Men" style={{ "textDecoration": "none", "color": "#fff" }}>
                                    <div className={style.shop}>
                                        <span>Shop now</span>
                                        <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: '16px', marginLeft: '8px', top: '-4px' }} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="products" id="products">
          <div className="products__wrapper">
            <div className="products__category">
              <h2>New Release</h2>
              <div className="products__list">
                {products.map((product, index) => {
                  if (product.categories === "New-Arrivals") {
                    return (
                      <div className="basis-1/4">
                        <ProductItem props={{ product, index }} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="products__category">
              <h2>Best Seller</h2>
              <div className="products__list">
                {topProducts.map((product, index) => {
                  if (index < number) {
                    return (
                      <div className="basis-1/4">
                        <ProductItem props={{ product, index }} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="products__category">
              <h2>Discount</h2>
              <div className="products__list">
                {products.map((product, index) => {
                  if (product.categories === `Sales`) {
                    return (
                      <ProductItem props={{ product, index }} />
                      // <div key={index} className="products__item">
                      //     <div className="products__img">
                      //         <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                      //     </div>
                      //     <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                      //         <h3>{product.product_name || "ProductName"}</h3>
                      //     </Link>
                      //     <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                      //         <div>
                      //             <span>${parseInt(product.product_price) * (100 - product.discount_percent) / 100 || "500000"}</span>
                      //             <span style={{ "fontSize": "14px", "marginLeft": "16px", "textDecorationLine": "line-through" }}>{parseInt(product.product_price) || "500000"}₫</span>
                      //         </div>
                      //         <span style={{ "fontSize": "14px", "marginRight": "16px", "color": "#ec4242" }}>(-{product.discount_percent}%)</span>
                      //     </div>
                      // </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Home;
