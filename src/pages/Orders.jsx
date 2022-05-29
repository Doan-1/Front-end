import { useState, useEffect } from "react";
import style from '../css/Orders_page.module.css'
import API from '../context/Api.context';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = () => {
    const api = new API();
    const [orders, setOrders] = useState([])
    const [orderItems, setOrderItems] = useState([])
    const [showCartInfo, setShowCartInfo] = useState(false)
    useEffect(() => {
        api.getCartbyIDuser("1").then(res => {
            setOrders(res.data)
            // console.log(res.data)
        })
    }, [window.location.href])


    // useEffect(() => {
    //     api.getCartinfobyId("1").then(res => {
    //         setOrderItems(res.data[0].orders)
    //         // console.log(res.data[0].orders)
    //     })
    // }, [window.location.href])

    const handleShowInfo = (id) => {
        setShowCartInfo(!showCartInfo)
        api.getCartinfobyId(id).then(res => {
            setOrderItems(res.data[0].orders)
            // console.log(res.data[0].orders)
        })
    }
    return (
        <div className={style.order}>
            <div className={style.order__wrapper}>
                <h2>My orders</h2>
                <div className={style.order__info}>
                    <div className={style.order__search}>
                        <input type="text" placeholder="Search for order code" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={style.order__table}>
                        <table>
                            <tr>
                                <th>Code</th>
                                <th>Total</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            {
                                orders.map((order, index) => {
                                    return (
                                        <tr>
                                            <td>{order.id_cart}</td>
                                            <td>{order.total}</td>
                                            <td>{order.address}</td>
                                            <td>{order.status}</td>
                                            <td><FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }}
                                            onClick={() => handleShowInfo(order.id_cart)}
                                            /></td>
                                        </tr>
                                    )
                                })
                            }

                        </table>
                        {
                            showCartInfo &&
                            <div className={style.list__product}>
                                <div className={style.product__list}>
                                    <div style={{ textAlign: 'end' }}>
                                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }} 
                                        onClick={handleShowInfo}
                                        />
                                    </div>
                                    <h2 style={{ "textAlign": "center", "marginBottom": "36px" }}>List of your products</h2>
                                    {
                                        orderItems.map((orderItem, index) => {
                                            return (
                                                <div key={index} className={style.product__item} >
                                                    <div className={style.product__img}>
                                                        <img src={orderItem.thumbnail} alt="" />
                                                    </div>
                                                    <div></div>
                                                    <div className={style.product__info_detail}>
                                                        <h3>{orderItem.product_name}</h3>
                                                        <span>{orderItem.product_type}</span>
                                                        <h4>${orderItem.product_price}</h4>
                                                        <div className={style.product__color}>
                                                            <h5>Colour Shown:</h5>
                                                            <span>{orderItem.color}</span>
                                                        </div>
                                                        <div className={style.product__syle}>
                                                            <h5>Style:</h5>
                                                            <span>{orderItem.style}</span>
                                                        </div>
                                                        <span className={style.product__size}>Size: {orderItem.size}</span>
                                                        <div className={style.quantity}>
                                                            <span>Quantity: </span>
                                                            <span className={style.quantity__number}>{orderItem.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;