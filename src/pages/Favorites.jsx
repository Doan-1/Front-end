import { useState, useEffect } from "react";
import style from '../css/Favorites_page.module.css'
import API from "../context/Api.context";
import { Link } from "react-router-dom";

const Favorites = () => {
    const api = new API()
    const [products, setProducts] = useState([])
    const [topProducts, setTopProducts] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('userid')) {
            let id = localStorage.getItem('userid')
            api.getUserbyIDuser(id).then(res => {
                setProducts(res.data.favorite)
                console.log(res.data.favorite)
            })
        }
    }, [window.location.href])
    useEffect(() => {
        api.getTopProduct().then(res => {
            setTopProducts(res.data);
        })
    }, [window.location.href])
    return (
        <div>
            <div className={style.favorite}>
                <div className={style.favorite__wrapper}>
                    <h2>My favourites</h2>
                    <div className={style.favorite__list}>
                        {
                            products.map((product, index) => {
                                return (
                                    <div key={index} className={"products__item" + " " + style.products__item}>
                                        <div className="products__img">
                                            <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                        </div>
                                        <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                            <h3>{product.product_name || "ProductName"}</h3>
                                        </Link>
                                        <span>{product.product_price || "50$"}₫</span>
                                        {/* <div className={"btn" + " " + style.btn__favorite}>VIEW DETAIL</div> */}
                                    </div>
                                    // <div className={"products__item" + " " + style.products__item}>
                                    //     <div className="products__img">
                                    //         <img src={product.thumbnail} alt="" />
                                    //     </div>
                                    //     <h3>{product.product_name}</h3>
                                    //     <span>${product.product_price}</span>
                                    //     <div className={"btn" + " " + style.btn__favorite}>VIEW DETAIL</div>
                                    // </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="products">
                <div class="products__wrapper">
                    <div class="products__category">
                        <h2>Recommendation for you</h2>
                        <div class="products__list">
                            {
                                topProducts.map((product, index) => {
                                    if (index < 10) {
                                        return (
                                            <div key={index} className="products__item">
                                                <div className="products__img">
                                                    <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                </div>
                                                <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                    <h3>{product.product_name || "ProductName"}</h3>
                                                </Link>
                                                <span>{product.product_price || "50$"}₫</span>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites;