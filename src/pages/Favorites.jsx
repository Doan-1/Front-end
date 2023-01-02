import { useState, useEffect } from "react";
import style from "../css/Favorites_page.module.css";
import API from "../context/Api.context";
import { Link } from "react-router-dom";
import Loading from "../components/ConstComponets/Loading";
import ProductItem from "../components/ConstComponets/ProductItem";

const Favorites = () => {
  const api = new API();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      let id = localStorage.getItem("userid");
      api.getUserbyIDuser(id).then((res) => {
        setProducts(res.data.favorite);
      });
    }
  }, [window.location.href]);
  useEffect(() => {
    setLoading(false);
  }, [products]);
  useEffect(() => {
    api.getTopProduct().then((res) => {
      setTopProducts(res.data);
    });
  }, [window.location.href]);
  return (
    <div>
      <div className={style.favorite}>
        <div className={style.favorite__wrapper}>
          <h2>My favourites</h2>
          <div className={style.favorite__list}>
            {products.map((product, index) => {
              return (
                <div className="basis-1/4 first:pl-0">
                  <ProductItem props={{ product, index }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div class="products">
        <div class="products__wrapper">
          <div class="products__category">
            <h2>Recommendation for you</h2>
            <div class="products__list">
              {topProducts.map((product, index) => {
                if (index < 10) {
                  return <ProductItem props={{ product, index }} />;
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

export default Favorites;
