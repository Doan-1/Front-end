import { useState } from "react";
import style from './Bag_page.module.css'


const Bag = () => {
    const [products, setProducts] = useState([
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
    ])
    return (
        <div>
            <div className={style.bag}>
                <div className={style.bag__active}>
                    <div className={style.bag__wrapper}>
                        <div className={style.product__list}>
                            <h2>Your Bag</h2>
                            <div className={style.product__item} >
                                <div className={style.product__img}>
                                    <img src="/resources/public/assets/img/air-jordan-1-mid-se-utility-shoes-vg0XNS.png" alt="" />
                                </div>
                                <div></div>
                                <div className={style.product__info_detail}>
                                    <h3>Air Jordan 1 Mid SE Utility</h3>
                                    <span>Women's Shoes</span>
                                    <h4>$130</h4>
                                    <div className={style.product__color}>
                                        <h5>Colour Shown:</h5>
                                        <span>Black/Gym Red/White</span>
                                    </div>
                                    <div className={style.product__syle}>
                                        <h5>Style:</h5>
                                        <span>DD9338-016</span>
                                    </div>
                                    <span className="product__size">Size: 250</span>
                                    <div className={style.quantity}>
                                        <span>Quantity:</span>
                                        <span className="quantity__number">1</span>
                                        <div>
                                            <i className="fa-solid fa-angle-up icon__increase"></i>
                                            <i className="fa-solid fa-angle-down icon__decrease"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.cart__item_sub_info}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className={style.product__item}>
                                <div className={style.product__img}>
                                    <img src="/resources/public/assets/img/air-force-1-fontanka-shoes-sJrqz3.png" alt="" />
                                </div>
                                <div></div>
                                <div className={style.product__info_detail}>
                                    <h3>Nike Air Force 1 '07 Next Nature</h3>
                                    <span>Women's Shoes</span>
                                    <h4>$100</h4>
                                    <div className={style.product__color}>
                                        <h5>Colour Shown:</h5>
                                        <span>White/Metallic Gold/Light Orewood Brown</span>
                                    </div>
                                    <div className={style.product__syle}>
                                        <h5>Style:</h5>
                                        <span>DN1430-101</span>
                                    </div>
                                    <span className="product__size">Size: 250</span>
                                    <div className={style.quantity}>
                                        <span>Quantity:</span>
                                        <span className="quantity__number">1</span>
                                        <div>
                                            <i className="fa-solid fa-angle-up"></i>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.cart__item_sub_info}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className={style.order}>
                            <h2>Order</h2>
                            <div className={style.order__form}>
                                <input type="text" placeholder="Your name" />
                                <input type="text" placeholder="Phonenumber" />
                                <input type="text" placeholder="Address" />
                            </div>
                            <h3>Summary</h3>
                            <div className={style.order__summary}>
                                <div>
                                    <span>Subtotal</span>
                                    <span>$220</span>
                                </div>
                                <div>
                                    <span>Estimated Delivery {'&'} Handling</span>
                                    <span>$15</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>$235</span>
                                </div>
                            </div>
                            <div className="btn">CHECK OUT</div>
                        </div>
                    </div>
                </div>
                <div className={style.bag__empty}>
                    <div className={style.bag__wrapper}>
                        <div className={style.product__list}>
                            <h2>Your Bag</h2>
                            <div className={style.bag__empty_content}>
                                <h5>There are no items in your bag.</h5>
                                <a>
                                    <span>SHOP NOW</span>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                        <div></div>
                        <div className={style.order}>
                            <h2>Order</h2>
                            <div className={style.order__form}>
                                <input type="text" placeholder="Your name" />
                                <input type="text" placeholder="Phonenumber" />
                                <input type="text" placeholder="Address" />
                            </div>
                            <h3>Summary</h3>
                            <div className={style.order__summary}>
                                <div>
                                    <span>Subtotal</span>
                                    <span>$220</span>
                                </div>
                                <div>
                                    <span>Estimated Delivery {'&'} Handling</span>
                                    <span>$15</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>$235</span>
                                </div>
                            </div>
                            <div className="btn">CHECK OUT</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="products__wrapper">
                    <div className="products__category">
                        <h2>Your Favourites</h2>
                        <div className="products__list">
                            {
                                products.map((product) => {
                                    return(
                                        <div className="products__item">
                                            <div className="products__img">
                                                <img src={product.product_img} alt="" />
                                            </div>
                                            <h3>{product.product_name}</h3>
                                            <span>${product.product_price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="products__category">
                        <h2>Recommendation for you</h2>
                        <div className="products__list">
                            {
                                products.map((product) => {
                                    return(
                                        <div className="products__item">
                                            <div className="products__img">
                                                <img src={product.product_img} alt="" />
                                            </div>
                                            <h3>{product.product_name}</h3>
                                            <span>${product.product_price}</span>
                                        </div>
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

export default Bag;