import { useState, useEffect } from "react";
import API from '../../../context/Api.context';
import style from '../../../css/Bag_page.module.css'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const api = new API();
const ItemBag = ({ props }) => {
    const { id, bag, bags, setBags, number, setNumber, total, setTotal } = props;
    console.log(props)
    const [quantities, setQuantities] = useState(Number(bag.quantity) || 1)
    useEffect(() => {
        api.getOrderbyIDuser(id).then((data) => {
            setBags(data.data[0].orders)
        })
    }, [quantities])
    const handleIncrease = () => {
        setQuantities(quantities + 1)
        setNumber(number + Number(bag.product_price))
        setTotal(total + Number(bag.product_price))
        api.createNewOrder(id, bag.id_product, bag.product_name, bag.product_price, bag.thumbnail, bag.color, bag.style, (quantities + 1).toString(), bag.size);
    }
    const handleDecrease = () => {
        setQuantities(quantities - 1)
        setNumber(number - Number(bag.product_price))
        setTotal(total - Number(bag.product_price))
        api.createNewOrder(id, bag.id_product, bag.product_name, bag.product_price, bag.thumbnail, bag.color, bag.style, (quantities - 1).toString(), bag.size);
    }
    const handleDelete = (idProduct) => {
        let newArr = bags.filter((item) => item.id_product !== idProduct)
        setBags(newArr)
        api.deleteOneInOrder(id, idProduct)
    }
    return (

        <div style={{ width: '100%' }}>
            {
                // state &&
                <div className={style.product__item} id="item" >
                    <div className={style.product__img}>
                        <img src={bag.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
                    </div>
                    <div></div>
                    <div className={style.product__info_detail}>
                        <h3>{bag.product_name}</h3>
                        <span>{bag.classify}</span>
                        <h4>${bag.product_price}</h4>
                        <div className={style.product__color}>
                            <h5>Colour Shown:</h5>
                            <span>{bag.color}</span>
                        </div>
                        <div className={style.product__style}>
                            <h5>Style:</h5>
                            <span>{bag.style}</span>
                        </div>
                        <span className={style.product__size}>Size: {bag.size}</span>
                        <div className={style.quantity}>
                            <span>Quantity: </span>
                            <span className={style.quantity__number}>{quantities}</span>
                            <div style={{ marginLeft: '8px' }}>
                                <FontAwesomeIcon icon={faAngleUp} style={{ cursor: 'pointer' }}
                                    onClick={handleIncrease}
                                />
                                <FontAwesomeIcon icon={faAngleDown} style={{ cursor: 'pointer' }}
                                    onClick={handleDecrease}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.cart__item_sub_info}>
                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }}
                            onClick={() => handleDelete(bag.id_product)}
                        />
                    </div>
                </div>

            }
        </div>
    )
}

export default ItemBag;