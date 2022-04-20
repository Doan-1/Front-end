import { useState } from "react";
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import logo from '../../../assets/logo.jpg'

const Header = () => {
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
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                    <div className={style.search__input}>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <nav className={style.account}>
                    <ul className={style.account__func_list}>
                        <li></li>
                        <li className={style.account__func_item}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <div className={style.cart}>
                                <div className={style.cart__header}>
                                    <h4>Your Bag</h4>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                                <ul className={style.cart__list}>
                                    <li className={style.cart__item}>
                                        <div className={style.cart__item_img}>
                                            <img src="/resources/public/assets/img/air-force-1-fontanka-shoes-sJrqz3.png" alt="" />
                                        </div>
                                        <div className={style.cart__item_info}>
                                            <h3>Product name</h3>
                                            <span>$100</span>
                                            <span>Size: 250</span>
                                        </div>
                                        <div className={style.cart__item_sub_info}>
                                            <i className="fa-solid fa-xmark"></i>
                                            <span>x1</span>
                                        </div>
                                    </li>
                                    <li className={style.cart__item}>
                                        <div className={style.cart__item_img}>
                                            <img src="/resources/public/assets/img/women-s-air-jordan-1-elevate-low-se-white-and-wolf-grey-dh7004-100-release-date (1).jpg" alt="" />
                                        </div>
                                        <div className={style.cart__item_info}>
                                            <h3>Product name</h3>
                                            <span>$100</span>
                                            <span>Size: 250</span>
                                        </div>
                                        <div className={style.cart__item_sub_info}>
                                            <i className="fa-solid fa-xmark"></i>
                                            <span>x1</span>
                                        </div>
                                    </li>
                                    <li className={style.cart__item}>
                                        <div className={style.cart__item_img}>
                                            <img src="/resources/public/assets/img/jordan-stay-loyal-shoes-PBnr0N (1).png" alt="" />
                                        </div>
                                        <div className={style.cart__item_info}>
                                            <h3>Product name</h3>
                                            <span>$100</span>
                                            <span>Size: 250</span>
                                        </div>
                                        <div className={style.cart__item_sub_info}>
                                            <i className="fa-solid fa-xmark"></i>
                                            <span>x1</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className={style.cart__checkout}>
                                    <button className="btn">CHECK OUT</button>
                                </div>
                            </div>
                        </li>
                        <li className={style.account__func_item}>
                            <i className="fa-solid fa-heart"></i>
                        </li>
                        <li className={style.account__func_item}>
                            <i className="fa-solid fa-user"></i>
                            <ul className={style.account__func_item_info}>
                                <li>
                                    <div>
                                        <img src="/resources/public/assets/img/IMG_20200220_093326_157.jpg" alt="" />
                                    </div>
                                    <a>Kim Liên</a>
                                    <i className="fa-solid fa-pen"></i>
                                </li>
                                <li>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <a>My bag</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-heart"></i>
                                    <a>My favourites</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-truck"></i>
                                    <a>My orders</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-right-from-bracket"></i>
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