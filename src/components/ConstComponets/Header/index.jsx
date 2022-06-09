import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from '../../../context/Api.context';
import style from './Header.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemHeaderBag from "../ItemHeaderBag";


import logo from '../../../assets/logo.jpg'
import emptyCart from '../../../assets/emptycart.png'

const api = new API();
const Header = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([
        'New Arrivals',
        'Women',
        'Man',
        'Kids',
        'Sales'
    ])
    useEffect(() => {
        api.getOrderbyIDuser('1').then((data) => {
            setProducts(data.data[0].orders)
            // console.log(data.data[0].orders)
        })
        // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
        // if (bags.length > 0) {
        //     setShowBags(!showBag)
        // }
    }, [window.location.href])

    const handleDelete = (id) => {
        console.log(id)
        api.deleteOneInOrder("1", id)
        // api.deleteOneInOrder("1",id)
    }
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Link to="/">
                    <img src={logo} alt="" className={style.logo__img} />
                </Link>
            </div>
            <nav className={style.menu}>
                <ul className={style.menu__list}>
                    {/* {
                        categories.map((category, index) => {
                            return (
                                // <a href="" className={style.menu__item} key={index}>
                                    <li className={style.menu__item} key={index}>
                                        <Link to={"/product/category/" + category}>
                                            {category}
                                        </Link>
                                    </li>
                                // </a>
                            )
                        })
                    } */}
                    <a href="" className={style.menu__item}>
                        <li>
                            <Link to="/product/category/New-Arrivals">
                                New Arrivals
                            </Link>
                        </li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>
                            <Link to="/product/category/Man">
                                Man
                            </Link>
                        </li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>
                            <Link to="/product/category/Women">
                                Women
                            </Link>
                        </li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>
                            <Link to="/product/category/Kids">
                                Kids
                            </Link>
                        </li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>
                            <Link to="/product/category/Sales">
                                Sales
                            </Link>
                        </li>
                    </a>
                </ul>
            </nav>
            <div className={style.feature}>
                <div className={style.search}>
                    <div className={style.search__icon}>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '16px' }} />
                    </div>
                    <div className={style.search__input}>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <nav className={style.account}>
                    <ul className={style.account__func_list}>
                        <li></li>
                        <li className={style.account__func_item}>
                            <Link to={'/bag'} style={{ "color": "#4682B4" }} >
                                <FontAwesomeIcon icon={faBagShopping} />
                            </Link>
                            {
                                (products.length > 0) &&
                                (
                                    <div className={style.cart}>
                                        <div className={style.cart__header}>
                                            <h4>Your Bag</h4>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        <ul className={style.cart__list}>
                                            {
                                                products.map((product, index) => {
                                                    return (
                                                        <ItemHeaderBag props={product} key={index} />
                                                        // <li key={index} className={style.cart__item}>
                                                        //     <div className={style.cart__item_img}>
                                                        //         <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                                        //     </div>
                                                        //     <div className={style.cart__item_info}>
                                                        //         <h3>{product.product_name}</h3>
                                                        //         <span>${product.product_price}</span>
                                                        //         <span>Size: {product.size}</span>
                                                        //     </div>
                                                        //     <div className={style.cart__item_sub_info}>
                                                        //         <FontAwesomeIcon icon={faXmark} style={{ "cursor": "pointer" }}
                                                        //             onClick={() => handleDelete(product.id_product)}
                                                        //         />
                                                        //         <span>{product.quantity}</span>
                                                        //     </div>
                                                        // </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className={style.cart__checkout}>
                                            <Link to={'/bag'} style={{ "color": "#4682B4" }} >
                                                <button className="btn">CHECK OUT</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                (products.length <= 0) &&
                                (
                                    <div className={style.cart}>
                                        <div className={style.cart__header}>
                                            <h4>Your Bag</h4>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        <div className={style.empty__cart}>
                                            <img src={emptyCart} alt="" />
                                            <h4>Your cart is empty!</h4>
                                        </div>
                                        <div className={style.cart__checkout}>
                                            <Link to={'/bag'} style={{ "color": "#4682B4" }} >
                                                <button className="btn">CHECK OUT</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }

                        </li>
                        <li className={style.account__func_item}>
                            <Link to="/favorites" style={{ "textDecoration": "none", "color": "#4682B4" }}>
                                <   FontAwesomeIcon icon={faHeart} />
                            </Link>
                        </li>
                        <li className={style.account__func_item}>
                            <FontAwesomeIcon icon={faUser} />
                            <ul className={style.account__func_item_info}>
                                <li>
                                    <div>
                                        <img src="https://i.pinimg.com/736x/53/5b/28/535b2824fb82e36d09ea877df9f2a57d.jpg" alt="" />
                                    </div>
                                    <Link to={'/profile'} style={{ "textDecoration": "none", "color": "#4682B4" }}>
                                        <span>Kim Liên</span>
                                    </Link>
                                    <FontAwesomeIcon icon={faPen} style={{ marginLeft: '16px', fontSize: '14px' }} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '14px' }} />
                                    <Link to="/bag" style={{ "textDecoration": "none", "color": "#4682B4" }}>
                                        <span>My bag</span>
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: '14px' }} />
                                    <Link to="/favorites" style={{ "textDecoration": "none", "color": "#4682B4" }}>
                                        <span>My favourites</span>
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTruck} style={{ fontSize: '14px' }} />
                                    <Link to="/orders" style={{ "textDecoration": "none", "color": "#4682B4" }}>
                                        <span>My orders</span>
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ fontSize: '14px' }} />
                                    <span>Sign out</span>
                                </li>
                            </ul>
                        </li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header