import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from '../css/Home_page.module.css'
import API from '../context/Api.context';
import intro_img from '../assets/intro-img.jpg'
import intro_sub_img from '../assets/intro-sub-img.png'
import slide_img from '../assets/slide-img.jpg'
import women_img from '../assets/women.jpg'
import man_img from '../assets/man.jpg'


import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

    const api = new API();
    const [products, setProducts] = useState([])
    const [itemsProduct, setItemsProduct] = useState([]);

    // const getapi = async () => {

    //     await api.getProduct().then(res => {
    //         setProducts(res.data)
    //     });

    //     // await api.createProduct('5','Nike Jordan 5','4.000.000','abc','Nike-Jordan-5','https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png','shoes');


    // } 
    useEffect(async () => {
        await api.getProduct().then((data) => {
            setProducts(data.data)
            console.log(data.data[18].discount_percent)
        })
        // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
    }, [])
    // useEffect(async () => {
    //     await api.getProduct().then(data => {
    //         setProducts(data)
    //         console.log(data)
    //     });

    // });
    return (
        <div>
            <div className={style.main}>
                <div className={style.intro}>
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
                </div>
                <div className={style.slide}>
                    <div className={style.slide__img}>
                        <img src={slide_img} alt="" />
                    </div>
                </div>
                <div className={style.category}>
                    <div className={style.category__list}>
                        <div className={style.category__item}>
                            <img src={women_img} alt="" />
                            <div className={style.overlayer}>
                                <h3>WOMEN</h3>
                                <div className={style.shop}>
                                    <span>Shop now</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: '16px', marginLeft: '8px', position: 'relative', top: '1px' }} />
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className={style.category__item}>
                            <img src={man_img} alt="" />
                            <div className={style.overlayer}>
                                <h3>MAN</h3>
                                <div className={style.shop}>
                                    <span>Shop now</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: '16px', marginLeft: '8px', top: '-4px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products" id="products">
                    <div className="products__wrapper">
                        <div className="products__category">
                            <h2>New Release</h2>
                            <div className="products__list">
                                {
                                    products.map((product, index) => {
                                        return (
                                            <div key={index} className="products__item">
                                                <div className="products__img">
                                                    <img src={product.product_img || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                </div>
                                                <Link to="/productinfo" style={{"textDecoration": "none"}}>
                                                    <h3>{product.product_name || "ProductName"}</h3>
                                                </Link>
                                                <span>{product.product_price || "50$"}₫</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="products__category">
                            <h2>Best Seller</h2>
                            <div className="products__list">
                                {
                                    products.map((product) => {
                                        return (
                                            <div className="products__item">
                                                <div className="products__img">
                                                    <img src={product.product_img || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                </div>
                                                <Link to="/productinfo" style={{"textDecoration": "none"}}>
                                                    <h3>{product.product_name || "ProductName"}</h3>
                                                </Link>
                                                <span>{product.product_price || "50$"}₫</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="products__category">
                            <h2>Discount</h2>
                            <div className="products__list">
                                {
                                    products.map((product) => {
                                        if (product.discount == true) {
                                            return (
                                                <div className="products__item">
                                                    <div className="products__img">
                                                        <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                    </div>
                                                    <Link to="/productinfo" style={{"textDecoration": "none"}}>
                                                        <h3>{product.product_name || "ProductName"}</h3>
                                                    </Link>
                                                    <span>{parseInt(product.product_price) * (100 - product.discount_percent) / 100 || "$50"}₫</span>
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
        </div>
    )
}

export default Home;