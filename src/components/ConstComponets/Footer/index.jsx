import { useState } from "react";
import style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div class={style.footer}>
            <div class={style.information}>
                <div class={style.detail}>
                    <div class={style.detail__item}>
                        <h2>Products</h2>
                        <ul>
                            <a href="">
                                <li>Running</li>
                            </a>
                            <a href="">
                                <li>Football</li>
                            </a>
                            <a href="">
                                <li>Basketball</li>
                            </a>
                            <a href="">
                                <li>Gym and Training</li>
                            </a>
                            <a href="">
                                <li>Yoga</li>
                            </a>
                            <a href="">
                                <li>Skateboarding</li>
                            </a>
                            <a href="">
                                <li>Tennis</li>
                            </a>
                            <a href="">
                                <li>Golf</li>
                            </a>
                        </ul>
                    </div>
                    <div class={style.detail__item}>
                        <h2>Get Help</h2>
                        <ul>
                            <a href="">
                                <li>Order Status</li>
                            </a>
                            <a href="">
                                <li>Delivery</li>
                            </a>
                            <a href="">
                                <li>Returns</li>
                            </a>
                            <a href="">
                                <li>Payment Options</li>
                            </a>
                            <a href="">
                                <li>Contact Us</li>
                            </a>
                        </ul>
                    </div>
                    <div class={style.detail__item}>
                        <h2>About Us</h2>
                        <ul>
                            <a href="">
                                <li>News</li>
                            </a>
                            <a href="">
                                <li>Careers</li>
                            </a>
                            <a href="">
                                <li>Investors</li>
                            </a>
                            <a href="">
                                <li>Sustainability</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class={style.contact}>
                    <a href="" class={style.contact__link}>
                        <div class={style.contact__icon}>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="" class={style.contact__link}>
                        <div class={style.contact__icon}>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </a>
                    <a href="" class={style.contact__link}>
                        <div class={style.contact__icon}>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class={style.tag}>
                <span>© 2022 Nike, Inc. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer;