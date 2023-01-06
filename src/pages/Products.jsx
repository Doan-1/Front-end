import { useState, useEffect } from "react";
import API from "../context/Api.context";
import { useParams, Link } from "react-router-dom";
import style from "../css/Products_page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Loading from "../components/ConstComponets/Loading";

import ProductItem from "../components/ConstComponets/ProductItem";

const Products = () => {
  const api = new API();
  const [loading, setLoading] = useState(true);
  const param = useParams();
  const [prices, setPrice] = useState(["50", "100"]);
  const [categories, setCategories] = useState([
    "Running",
    "Football",
    "Basketball",
    "Gym and Training",
    "Yoga",
    "Skateboarding",
    "Tennis",
    "Golf",
  ]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api.getProduct().then(res => {
    //     setProducts(res.data)
    // })
    api.getProductbyCategory(param.category).then((res) => {
      setProducts(res.data);
    });
  }, [window.location.href]);

  useEffect(() => {
    setLoading(false);
  }, [products]);

  const handlePriceSmaller = (price) => {
    api.getProductbyPriceSmaller(price).then((res) => {
      setProducts(res.data);
    });
  };
  const handlePriceGreater = (price) => {
    api.getProductbyPriceGreater(price).then((res) => {
      setProducts(res.data);
    });
  };
  const handlePriceBetween = (price1, price2) => {
    api.getProductbyPriceBetween(price1, price2).then((res) => {
      setProducts(res.data);
    });
  };
  return (
    <div className="relative">
      <div className="px-40 py-20">
        <div className={style.products__wrapper}>
          <div className={style.products__left}>
            <div className={style.products__price}>
              <h3>Price</h3>
              <ul className={style.products__price_list}>
                <li className={style.products__price_item}>
                  <input
                    className="price"
                    type="radio"
                    name="selection__price"
                    value="50"
                    onClick={(e) => handlePriceSmaller(e.target.value)}
                  />
                  <label for="selection__price">$50</label>
                </li>
                <li className={style.products__price_item}>
                  <input
                    className="price"
                    type="radio"
                    name="selection__price"
                    value="100"
                    onClick={(e) =>
                      handlePriceBetween(e.target.value - 50, e.target.value)
                    }
                  />
                  <label for="selection__price">$50 - $100</label>
                </li>
                <li className={style.products__price_item}>
                  <input
                    className="price"
                    type="radio"
                    name="selection__price"
                    value="100"
                    onClick={(e) => handlePriceGreater(e.target.value)}
                  />
                  <label for="selection__price">$100</label>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.products__right}>
            <div className="flex flex-wrap">
              {products.map((product, index) => {
                if (product.categories === `Sales`) {
                  return (
                    // eslint-disable-next-line no-useless-concat
                    // <SkeletonTheme color="#202020" highlightColor="#444">
                    //     <div className={"products__item" + " " + style.products__item} key={index}>
                    //         <div className="products__img">
                    //             <img src={product.thumbnail || <Skeleton count={10} />} alt="" />
                    //         </div>
                    //         <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                    //             <h3>{product.product_name || <Skeleton count={10} />}</h3>
                    //         </Link>
                    //         <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                    //             <div>
                    //                 <span>${parseInt(product.product_price) * (100 - product.discount_percent) / 100 || "500000"}</span>
                    //                 <span style={{ "fontSize": "14px", "marginLeft": "16px", "textDecorationLine": "line-through" }}>{parseInt(product.product_price) || "500000"}₫</span>
                    //             </div>
                    //             <span style={{ "fontSize": "14px", "marginRight": "16px", "color": "#ec4242" }}>(-{product.discount_percent}%)</span>
                    //         </div>
                    //         {/* <div className={"btn" + " " + style.btn__favorite}>BUY NOW</div> */}
                    //     </div>
                    // </SkeletonTheme>
                    <ProductItem props={{ product, index }} />
                  );
                } else {
                  return (
                    // <SkeletonTheme color="#202020" highlightColor="#444">
                    //     <div className={"products__item" + " " + style.products__item} key={index}>
                    //         <div className="products__img">
                    //             <img src={product.thumbnail || <Skeleton count={10} />} alt="" />
                    //         </div>
                    //         <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                    //             <h3>{product.product_name || <Skeleton count={10} />}</h3>
                    //         </Link>
                    //         <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                    //             <div>
                    //                 <span>${product.product_price || "500000"}</span>
                    //             </div>
                    //         </div>
                    //         {/* <div className={"btn" + " " + style.btn__favorite}>BUY NOW</div> */}
                    //     </div>
                    // </SkeletonTheme>
                    <ProductItem props={{ product, index }} />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Products;
