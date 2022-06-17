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
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        api.getProduct().then((data) => {
            setProducts(data.data)
            // console.log(data.data[18].discount_percent)
        })
        // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
    }, [window.location.href])
    useEffect(() => {
        api.getTopProduct().then(res => {
            setTopProducts(res.data);
        })
    }, [window.location.href])

    let slideIndex = 1;

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        console.log(slides);
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    useEffect(() => {
        // showSlides(1);
    }, [window.location.href])
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
                <div className={style.slideshow__container}>

                    <div className={style.mySlides + " " + style.fade}>
                        <img src={slide_img} alt="" style={{ width: "100%" }} />
                    </div>

                    <div className={style.mySlides + " " + style.fade}>
                        <img src={slide_img} alt="" style={{ width: "100%" }} />
                    </div>

                    <div className={style.mySlides + " " + style.fade}>
                        <img src={slide_img} alt="" style={{ width: "100%" }} />
                    </div>

                    {/* <a className="prev" href="" onClick={() => plusSlides(-1)}>❮</a>
                    <a className="next" href="" onClick={() => plusSlides(1)}>❯</a> */}

                </div>
                <br />

                <div style={{ textAlign: "center" }}>
                    <span className={style.dot} onClick={() => currentSlide(1)}></span>
                    <span className={style.dot} onClick={() => currentSlide(2)}></span>
                    <span className={style.dot} onClick={() => currentSlide(3)}></span>
                </div>

                {/* <div classNameclassNameme={style.slide}>
                    <div id={style.slideshow}>
                        <div className={style.slide__wrapper}>
                            <div className={style.slide__img}>
                                <img src="https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            <div className={style.slide__img}>
                                <img src="https://images.pexels.com/photos/3578393/pexels-photo-3578393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            <div className={style.slide__img}>
                                <img src="https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            </div>
                            {/* <div className="slide__img">
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1380,c_limit/10fbe895-e733-49aa-8d66-138eba257285/jordan.jpg" alt="" />
                            </div>
                            <div className="slide__img">
                                <img src="https://censor.vn/wp-content/uploads/2022/01/giay-jordan.jpg" alt="" />
                            </div> */}
                {/* </div>
                    </div> */}
                {/* <div className={style.slide__img}>
                        <img src={slide_img} alt="" />
                    </div> */}
                {/* // </div> */}
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
                                        if (product.categories === 'New-Arrivals') {
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
                        <div className="products__category">
                            <h2>Best Seller</h2>
                            <div className="products__list">
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
                        <div className="products__category">
                            <h2>Discount</h2>
                            <div className="products__list">
                                {
                                    products.map((product, index) => {
                                        if (product.categories === `Sales`) {
                                            return (
                                                <div key={index} className="products__item">
                                                    <div className="products__img">
                                                        <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                    </div>
                                                    <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                        <h3>{product.product_name || "ProductName"}</h3>
                                                    </Link>
                                                    <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                                                        <div>
                                                            <span>{parseInt(product.product_price) * (100 - product.discount_percent) / 100 || "500000"}₫</span>
                                                            <span style={{"fontSize" : "14px", "marginLeft": "16px", "textDecorationLine": "line-through"}}>{parseInt(product.product_price) || "500000"}₫</span>
                                                        </div>
                                                        <span style={{ "fontSize": "14px", "marginRight": "16px", "color": "#ec4242" }}>(-{product.discount_percent}%)</span>
                                                    </div>
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