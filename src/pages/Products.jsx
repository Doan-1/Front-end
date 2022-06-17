import { useState, useEffect } from "react";
import API from '../context/Api.context';
import { useParams, Link } from "react-router-dom";
import style from '../css/Products_page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Products = () => {
    const api = new API();
    const param = useParams();
    const [prices, setPrice] = useState(['50', '100'])
    const [categories, setCategories] = useState(['Running', 'Football', 'Basketball', 'Gym and Training', 'Yoga', 'Skateboarding', 'Tennis', 'Golf'])
    const [products, setProducts] = useState([])

    useEffect(() => {
        // api.getProduct().then(res => {
        //     setProducts(res.data)
        // })
        api.getProductbyCategory(param.category).then(res => {
            setProducts(res.data)
            // console.log(res.data)
        })
    }, [window.location.href])

    const handlePriceSmaller = (price) => {
        api.getProductbyPriceSmaller(price).then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
    }
    const handlePriceGreater = (price) => {
        api.getProductbyPriceGreater(price).then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
    }
    const handlePriceBetween = (price1, price2) => {
        api.getProductbyPriceBetween(price1, price2).then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
    }
    return (
        <div>
            <div className={style.products}>
                <div className={style.products__wrapper}>
                    <div className={style.products__left}>
                        <div className={style.products__price}>
                            <h3>Price</h3>
                            <ul className={style.products__price_list}>
                                <li className={style.products__price_item}>
                                    <input className="price" type="radio" name="selection__price" value="50"
                                        onClick={e => handlePriceSmaller(e.target.value)}
                                    />
                                    <label for="selection__price">$50</label>
                                </li>
                                <li className={style.products__price_item}>
                                    <input className="price" type="radio" name="selection__price" value="100"
                                        onClick={e => handlePriceBetween(e.target.value - 50, e.target.value)}
                                    />
                                    <label for="selection__price">$50 - $100</label>
                                </li>
                                <li className={style.products__price_item}>
                                    <input className="price" type="radio" name="selection__price" value="100"
                                        onClick={e => handlePriceGreater(e.target.value)}
                                    />
                                    <label for="selection__price">$100</label>
                                </li>
                            </ul>
                        </div>
                        <div className={style.products__category}>
                            <h3>Category</h3>
                            <ul className={style.products__category_list}>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Running" />
                                    <label for="selection__category">Running</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Football" />
                                    <label for="selection__category">Football</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Basketball" />
                                    <label for="selection__category">Basketball</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Gym and Training" />
                                    <label for="selection__category">Gym and Training</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Yoga" />
                                    <label for="selection__category">Yoga</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Skateboarding" />
                                    <label for="selection__category">Skateboarding</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Tennis" />
                                    <label for="selection__category">Tennis</label>
                                </li>
                                <li className={style.products__category_item}>
                                    <input type="radio" name="selection__category" value="Golf" />
                                    <label for="selection__category">Golf</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.products__right}>
                        <div className={style.products__list}>
                            {
                                products.map((product) => {
                                    return (
                                        // eslint-disable-next-line no-useless-concat
                                        <SkeletonTheme color="#202020" highlightColor="#444">
                                            <div className={"products__item" + " " + style.products__item}>
                                                <div className="products__img">
                                                    <img src={product.thumbnail || <Skeleton count={10} />} alt="" />
                                                </div>
                                                <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                    <h3>{product.product_name || <Skeleton count={10} />}</h3>
                                                </Link>
                                                <span>${product.product_price || <Skeleton count={10} />}</span>
                                                <div className={"btn" + " " + style.btn__favorite}>BUY NOW</div>
                                            </div>
                                        </SkeletonTheme>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;