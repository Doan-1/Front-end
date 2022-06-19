import { useState, useEffect } from "react";
import API from '../context/Api.context';
import style from '../css/Bag_page.module.css'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ItemBag from "../components/ConstComponets/ItemBag";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const api = new API();
const Bag = () => {

    let id = localStorage.getItem('userid')
    // console.log('re-render');
    const [bags, setBags] = useState([])
    // const [products, setProducts] = useState([])
    const [number, setNumber] = useState(0)
    const delivery = 15;
    const [total, setTotal] = useState(0)
    const [address, setAddress] = useState('1')
    const [phone, setPhone] = useState('1')
    const [favorites, setFavorites] = useState([])
    const [topProducts, setTopProducts] = useState([]);


    useEffect(() => {

        api.getOrderbyIDuser(id).then((data) => {
            setBags(data.data[0].orders)
        })

    }, [window.location.href])

    useEffect(() => {
        if (bags.length > 0) {
            let a = 0;
            bags.forEach((bag, index) => {
                a += Number(bag.product_price) * Number(bag.quantity);
            })
            console.log(a);
            setNumber(a)
            setTotal(a + delivery)
        }
    }, [bags])

    useEffect(() => {
        api.getUserbyIDuser(id).then(res => {
            setFavorites(res.data.favorite)
            // console.log(res.data.favorite)
        })

    }, [window.location.href])

    useEffect(() => {
        api.getTopProduct().then(res => {
            setTopProducts(res.data);
        })
    }, [window.location.href])
    // useEffect(() => {
    //     api.getTotalbyIDuser('1').then(res => {
    //         console.log(res.data);
    //         setNumber(res.data || 0)
    //         setTotal(res.data + delivery || 0)
    //     })
    // },[window.location.href])

    const handleAddNewCart = () => {
        // console.log(bags)
        // api.createNewCart(id, total, address, phone);
        setBags([])
        setNumber(0)
        setTotal(0)
        setAddress('')
        setPhone('')
        // window.location.reload();
    }
    const handleDelete = (bag, idProduct, stt, price, quantities) => {
        let newArr = bags.filter((item, i) => i !== stt)
        setBags(newArr)
        api.deleteOneInOrder(id, idProduct)
    }
    return (
        <div>
            <div className={style.bag}>
                {
                    bags.length > 0 ?
                        (
                            <div className={style.bag__active}>
                                <div className={style.bag__wrapper}>
                                    <div className={style.product__list}>
                                        <h2>Your Bag</h2>
                                        {
                                            bags.map((bag, index) => {
                                                return (
                                                    <div className="item" style={{ display: 'flex', flexDirection: 'row', marginBottom: '16px' }} key={index}>
                                                        <ItemBag props={{ bag, setNumber, number, total, setTotal, delivery }} key={index} />
                                                        <div className={style.cart__item_sub_info}>
                                                            <FontAwesomeIcon icon={faXmark} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }}
                                                                onClick={() => handleDelete(bag, bag.id_product, index, bag.product_price, bag.quantity)}
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
                                            {/* <input type="text" placeholder="Your name" /> */}
                                            <input type="text" value={phone} placeholder="Phonenumber"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            <input type="text" value={address} placeholder="Address"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <h3>Summary</h3>
                                        <div className={style.order__summary}>
                                            <div>
                                                <span>Subtotal</span>
                                                <span>{number}</span>
                                            </div>
                                            <div>
                                                <span>Estimated Delivery {'&'} Handling</span>
                                                <span>{delivery}</span>
                                            </div>
                                            <div>
                                                <span>Total</span>
                                                <span>{total}</span>
                                            </div>
                                        </div>
                                        <div className="btn"
                                            onClick={handleAddNewCart}
                                        >CHECK OUT</div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className={style.bag__empty}>
                                <div className={style.bag__wrapper}>
                                    <div className={style.product__list}>
                                        <h2>Your Bag</h2>
                                        <div className={style.bag__empty_content}>
                                            <h5>There are no items in your bag.</h5>
                                            <Link to="/" style={{ "textDecoration": "none" }}>
                                                <span>SHOP NOW</span>
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className={style.order}>
                                        <h2>Order</h2>
                                        <div className={style.order__form}>
                                            {/* <input type="text" placeholder="Your name" /> */}
                                            <input type="text" placeholder="Phonenumber"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            <input type="text" placeholder="Address"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <h3>Summary</h3>
                                        <div className={style.order__summary}>
                                            <div>
                                                <span>Subtotal</span>
                                                <span>0</span>
                                            </div>
                                            <div>
                                                <span>Estimated Delivery {'&'} Handling</span>
                                                <span>{delivery}</span>
                                            </div>
                                            <div>
                                                <span>Total</span>
                                                <span>0</span>
                                            </div>
                                        </div>
                                        <div className="btn"
                                            onClick={handleAddNewCart}
                                        >CHECK OUT</div>
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
            <div className="products">
                <div className="products__wrapper">
                    <div className="products__category">
                        <h2>Your Favourites</h2>
                        <div className="products__list">
                            {
                                favorites.map((product, index) => {
                                    return (
                                        <div className="products__item" key={index}>
                                            <div className="products__img">
                                                <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                                            </div>
                                            <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                <h3>{product.product_name || "ProductName"}</h3>
                                            </Link>
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
                                topProducts.map((product, index) => {
                                    if (index < 10) {
                                        return (
                                            <div key={index} className="products__item">
                                                <div className="products__img">
                                                    <img src={product.thumbnail || <Skeleton />} alt="" />
                                                </div>
                                                <Link to={"/productinfo/" + product.slug} style={{ "textDecoration": "none" }}>
                                                    <h3>{product.product_name || <Skeleton />}</h3>
                                                </Link>
                                                <span>{product.product_price || <Skeleton />}₫</span>
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
    )
}

export default Bag;