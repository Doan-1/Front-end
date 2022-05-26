import { useState, useEffect } from "react";
import API from '../context/Api.context';
import style from '../css/Bag_page.module.css'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const api = new API();
const Bag = () => {
    // const [showBag, setShowBags] = useState(false)

    const [bags, setBags] = useState([])
    const [products, setProducts] = useState([])

    useEffect( () => {
        api.getOrderbyIDuser('1').then((data) => {
            setBags(data.data[0].orders)
            console.log(data.data[0].orders)
        })
        // await api.createProduct('6', 'Nike Jordan 6', '2.000.000', 'abc', 'Nike-Jordan-6', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png', 'shoes');
        // if (bags.length > 0) {
        //     setShowBags(!showBag)
        // }
    }, [])
    

    return (
        <div>
            <div className={style.bag}>
                {
                    (bags.length > 0) &&
                    <div className={style.bag__active}>
                        <div className={style.bag__wrapper}>
                            <div className={style.product__list}>
                                <h2>Your Bag</h2>
                                {
                                    bags.map((bag, index) => {
                                        return (
                                            <div key={index} className={style.product__item} >
                                                <div className={style.product__img}>
                                                    <img src={bag.thumbnail} alt="" />
                                                </div>
                                                <div></div>
                                                <div className={style.product__info_detail}>
                                                    <h3>{bag.product_name}</h3>
                                                    <span>{bag.product_type}</span>
                                                    <h4>${bag.product_price}</h4>
                                                    <div className={style.product__color}>
                                                        <h5>Colour Shown:</h5>
                                                        <span>{bag.color}</span>
                                                    </div>
                                                    <div className={style.product__syle}>
                                                        <h5>Style:</h5>
                                                        <span>{bag.style}</span>
                                                    </div>
                                                    <span className="product__size">Size: {bag.size}</span>
                                                    <div className={style.quantity}>
                                                        <span>Quantity:</span>
                                                        <span className="quantity__number">{bag.quantity}</span>
                                                        <div style={{ marginLeft: '8px' }}>
                                                            <FontAwesomeIcon icon={faAngleUp} style={{ cursor: 'pointer' }}
                                                               
                                                            />
                                                            <FontAwesomeIcon icon={faAngleDown} style={{ cursor: 'pointer' }}
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={style.cart__item_sub_info}>
                                                    <FontAwesomeIcon icon={faXmark} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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

                }
                {
                    (bags.length <= 0) &&
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
                }
            </div>
            <div className="products">
                <div className="products__wrapper">
                    <div className="products__category">
                        <h2>Your Favourites</h2>
                        <div className="products__list">
                            {
                                products.map((product) => {
                                    return (
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
                                    return (
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