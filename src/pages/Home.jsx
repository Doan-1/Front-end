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

    // const [test, setTest] = useState([])
    // useEffect(() => {
    //     api.getProductbyCategory(`New-Arrivals`).then(res => {
    //         console.log(res.data)
    //     })
    // })

    // const getapi = async () => {

    //     await api.getProduct().then(res => {
    //         setProducts(res.data)
    //     });

    //     // await api.createProduct('5','Nike Jordan 5','4.000.000','abc','Nike-Jordan-5','https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png','shoes');
    // } 
    useEffect(() => {
        api.getProduct().then((data) => {
            setProducts(data.data)
            // console.log(data.data[18].discount_percent)
        })
        // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
    }, [window.location.href])
    // useEffect(async () => {
    //     await api.getProduct().then(data => {
    //         setProducts(data)
    //         console.log(data)
    //     });

    // });
    ////Tao product moi (id,name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb)
    //await api.createProduct('4','Nike Jordan 3','5.000.000','ahihihih','Nike-Jordan-3','null','shoes');
    ////createNewOrder(iduser,idproduct,productname,price,thumbnail,color,style,quantity,size)
    //await api.createNewOrder('1','2','name','price','thumbnail','color','style','3','size')
    ////delete 1 product khoi order ('id_user','id_product')
    //await api.deleteOneInOrder('1','2')
    //// them 1 cart moi(iduser, tot, add, phon)
    //await api.createNewCart('1','3.000.000','so 4 duong 31C an phu quan 2','0834644336');
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
                                    products.map((product) => {
                                        return (
                                            <div className="products__item">
                                                <div className="products__img">
                                                    <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                </div>
                                                <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
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
                                        if (product.categories == 'Sales') {
                                            return (
                                                <div className="products__item">
                                                    <div className="products__img">
                                                        <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                    </div>
                                                    <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                        <h3>{product.product_name || "ProductName"}</h3>
                                                    </Link>
                                                    <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                                                        <span>{parseInt(product.product_price) * (100 - product.discount_percent) / 100 || "500000"}₫</span>
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