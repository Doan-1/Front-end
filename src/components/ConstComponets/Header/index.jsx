import { useState, useEffect } from "react";
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


import logo from '../../../assets/logo.jpg'
import emptyCart from '../../../assets/emptycart.png'

const Header = () => {
    const [products, setProducts] = useState([
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // },
        // {
        //     product_name: 'Product Name',
        //     product_price: 100,
        //     product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png',
        //     product_size: 250,
        //     quantity: 1
        // }
    ])

    const [showBags, setShowBags] = useState(false)

    useEffect(() => {
        if(products.length > 0){
            setShowBags(!showBags)
        }
    },[])
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="" className={style.logo__img} />
            </div>
            <nav className={style.menu}>
                <ul className={style.menu__list}>
                    <a href="" className={style.menu__item}>
                        <li>New Arrivals</li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>Man</li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>Women</li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>Kids</li>
                    </a>
                    <a href="" className={style.menu__item}>
                        <li>Sales</li>
                    </a>
                </ul>
            </nav>
            <div className={style.feature}>
                <div className={style.search}>
                    <div className={style.search__icon}>
                        <FontAwesomeIcon icon={faSearch} style={{fontSize: '16px'}} />
                    </div>
                    <div className={style.search__input}>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <nav className={style.account}>
                    <ul className={style.account__func_list}>
                        <li></li>
                        <li className={style.account__func_item}>
                            <FontAwesomeIcon icon={faBagShopping}/>
                            <div className={style.cart}>
                                <div className={style.cart__header}>
                                    <h4>Your Bag</h4>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                                <ul className={style.cart__list}>
                                    {   
                                        showBags &&
                                        products.map((product) => {
                                            return(
                                                <li className={style.cart__item}>
                                                    <div className={style.cart__item_img}>
                                                        <img src={product.product_img} alt="" />
                                                    </div>
                                                    <div className={style.cart__item_info}>
                                                        <h3>{product.product_name}</h3>
                                                        <span>${product.product_price}</span>
                                                        <span>Size: {product.product_size}</span>
                                                    </div>
                                                    <div className={style.cart__item_sub_info}>
                                                        <FontAwesomeIcon icon={faXmark} />
                                                        <span>{product.quantity}</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    {   
                                        !showBags &&
                                        <div className={style.empty__cart}>
                                            <img src={emptyCart} alt="" />
                                            <h4>Your cart is empty!</h4>
                                        </div>
                                    }
                                </ul>
                                <div className={style.cart__checkout}>
                                    <button className="btn">CHECK OUT</button>
                                </div>
                            </div>
                        </li>
                        <li className={style.account__func_item}>
                        <   FontAwesomeIcon icon={faHeart}/>
                        </li>
                        <li className={style.account__func_item}>
                            <FontAwesomeIcon icon={faUser}/>
                            <ul className={style.account__func_item_info}>
                                <li>
                                    <div>
                                        <img src="https://i.pinimg.com/736x/53/5b/28/535b2824fb82e36d09ea877df9f2a57d.jpg" alt="" />
                                    </div>
                                    <a>Kim Liên</a>
                                    <FontAwesomeIcon icon={faPen} style={{marginLeft: '16px', fontSize: '14px'}}/>
                                </li>
                                <li>    
                                    <FontAwesomeIcon icon={faBagShopping} style={{fontSize: '14px'}}/>
                                    <a>My bag</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHeart} style={{fontSize: '14px'}}/>    
                                    <a>My favourites</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTruck} style={{fontSize: '14px'}}/>
                                    <a>My orders</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{fontSize: '14px'}}/>
                                    <a>Sign out</a>
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