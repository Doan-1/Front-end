import { useState, useEffect } from "react";
import API from '../../../context/Api.context';
import style from '../../../css/Bag_page.module.css'
import style1 from '../Header/Header.module.css'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const api = new API();
const ItemBag = ({ props }) => {
    const [number, setNumber] = useState(parseInt(props.quantity))
    const handleIncrease = (i) => {
        setNumber(number => number + 1);
        console.log(number)
        api.createNewOrder("1", props.id_product, props.product_name, props.product_price, props.thumbnail, props.color, props.style, number + 1, props.size);

    }
    const handleDecrease = (i) => {
        setNumber(number => number - 1);
        console.log(number)
        api.createNewOrder("1", props.id_product, props.product_name, props.product_price, props.thumbnail, props.color, props.style, number - 1, props.size);

    }
    return (
        <div style={{ width: '100%' }}>
            <div className={style1.cart__item} >
                <div className={style1.cart__item_img}>
                    <img src={props.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                </div>
                {/* <div></div> */}
                <div className={style.product__info_detail}>
                    <h3 style={{ fontSize: '16px' }}>{props.product_name}</h3>
                    <span>{props.classify}</span>
                    <h4 style={{ fontSize: '18px', margin: '0' }}>${props.product_price}</h4>
                    {/* <div className={style.product__color}>
                    <h5>Colour Shown:</h5>
                    <span>{props.color}</span>
                </div>
                <div className={style.product__style}>
                    <h5>Style:</h5>
                    <span>{props.style}</span>
                </div> */}
                    <span className={style.product__size}>Size: {props.size}</span>
                    <div className={style.quantity}>
                        <span>Quantity:</span>
                        <span className={style.quantity__number}>{number}</span>
                        <div style={{ marginLeft: '8px' }}>
                            <FontAwesomeIcon icon={faAngleUp} style={{ cursor: 'pointer', fontSize: '10px' }}
                                onClick={handleIncrease}
                            />
                            <FontAwesomeIcon icon={faAngleDown} style={{ cursor: 'pointer', fontSize: '10px' }}
                                onClick={handleDecrease}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemBag;