import { useEffect, useState } from "react";
import style from '../css/ProductInfo_page.module.css'
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../context/Api.context";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const ProductInfo = () => {
    let id = localStorage.getItem('userid')
    const api = new API();
    const param = useParams();
    const [user, setUser] = useState(false)
    const [product, setProduct] = useState({})
    const [topProducts, setTopProducts] = useState([]);
    const [showDetailInfo, setShowDetailInfo] = useState(true)
    const [arrowUp, setArrowUp] = useState(true)
    const [arrowDown, setArrowDown] = useState(false)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [sizes, setSizes] = useState([])
    const [size, setSize] = useState('')
    const handleShow = () => {
        setArrowUp(true)
        setArrowDown(false)
        setShowDetailInfo(true)
    }
    const handleHide = () => {
        setArrowUp(false)
        setArrowDown(true)
        setShowDetailInfo(false)
    }
    useEffect(() => {
        if (id) {
            api.getUserbyIDuser(id).then(res => {
                setUser(res.data)
            })
        }
    }, [window.location.href])
    useEffect(() => {
        api.getProductbySlug(param.slug).then(res => {
            setProduct(res.data)
            setSizes(res.data.size)
        })
    }, [window.location.href])
    // useEffect(() => {
    //     api.getCommentByIdProduct().then(res => {
    //         console.log(res.data)
    //     })
    // })
    useEffect(() => {
        api.getTopProduct().then(res => {
            setTopProducts(res.data);
        })

    }, [window.location.href])

    useEffect(() => {
        api.getCommentbyId(product.id_product).then(res => {
            setComments(res.data.reverse())
        })
    }, [product])
    const handleAddOrder = () => {
        if (id) {
            if (size === '') {
                api.createNewOrder(user.id_user, product.id_product, product.product_name, product.product_price, product.thumbnail, product.color, product.style, "1", sizes[0]);
            }
            else {
                api.createNewOrder(user.id_user, product.id_product, product.product_name, product.product_price, product.thumbnail, product.color, product.style, "1", size);
            }
        }
    }
    const handleAddFavor = (idproduct) => {
        if (id) {
            api.updatefavorProduct(id, idproduct)
        }
    }
    const time = new Date();
    const handleCreateComment = () => {
        setComment('')
        comments.push({
            id_user: user.id_user,
            user_name: user.user_name,
            id_product: product.id_product,
            comment: comment,
            star: '4',
            time: time.toUTCString(),
        })
        api.createNewComment(user.id_user, user.user_name, product.id_product, comment, '4', time.toUTCString());
    }
    const handleAddSize = (s) => {
        setSize(s)
        console.log(s);
    }
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <div>
                <div className={style.main}>
                    <div className={style.product__info}>
                        <div className={style.product__img_list}>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3408ff81-cd5f-4e70-af33-169863846088/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/324e8369-ab08-48db-abde-aeb795c379a4/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b9c3907e-2c14-489a-af72-e7d274dfb7de/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/477d0ad8-a8a8-480e-ab6a-075f0481496f/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c1f3a7e8-a96a-4dae-ae44-500c39cf8dc5/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                            <div className={style.product__img_item || <Skeleton />}>
                                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3270b875-2d46-4000-ab1d-e72864df223a/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                            </div>
                        </div>
                        <div></div>
                        <div className={style.product__info_detail}>
                            <h3>{product.product_name || <Skeleton />}</h3>
                            <span>{product.classify || <Skeleton />}</span>
                            <h4>{product.product_price || <Skeleton />}</h4>
                            <p>{product.description || <Skeleton />}</p>
                            <div className={style.product__color}>
                                <h5>Colour Shown:</h5>
                                <span>{product.color || <Skeleton />}</span>
                            </div>
                            <div className={style.product__syle}>
                                <h5>Style:</h5>
                                <span>{product.style || <Skeleton />}</span>
                            </div>
                            <div className={style.product__size}>
                                <h5>Size:</h5>
                                <div className={style.product__size_list}>
                                    {
                                        sizes.map((item, index) => {
                                            return (
                                                <button key={index} className={style.product__size_item}
                                                    onClick={() => handleAddSize(item)}
                                                >{item}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={style.product__btn}>
                                <div class="btn"
                                    onClick={handleAddOrder}
                                >ADD TO BAG</div>
                                <div className={"btn" + " " + style.btn__fav}
                                    onClick={() => handleAddFavor(product.id_product)}
                                >
                                    FAVOTITES
                                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '8px' }} />
                                </div>
                            </div>
                            <div className={style.product__view}>
                                <div className={style.product__view_info}>
                                    <div className={style.product__view_info_title}>
                                        <span>View detail information</span>
                                        {arrowDown && <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '12px', marginLeft: '4px', cursor: 'pointer' }}
                                            onClick={handleShow} />}
                                        {arrowUp && <FontAwesomeIcon icon={faAngleUp} style={{ fontSize: '12px', marginLeft: '4px', cursor: 'pointer' }}
                                            onClick={handleHide} />}
                                    </div>
                                    {
                                        showDetailInfo &&
                                        <div class={style.product__view_info_contrain}>
                                            <p>{product.detail_info || <Skeleton />}</p>
                                        </div>
                                    }
                                </div>
                                <div className={style.product__view_review}>
                                    <div className={style.product__view_info_title}>
                                        <span>Review (5)</span>
                                        <div className={style.rating}>
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '12px' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '12px' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '12px' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '12px' }} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} style={{ fontSize: '12px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <h2 className={style.comment__heading}>Comments</h2>
                        <div className={style.comment__context}>
                            <input type="text" placeholder="Enter comment" value={comment} onChange={e => setComment(e.target.value)} />
                            <button type="Submit" onClick={handleCreateComment}>Post</button>
                        </div>
                        <div style={{ "marginTop": "16px" }}>
                            {
                                comments.map((item, index) => {
                                    return (
                                        <div className={style.comment__item} key={index}>
                                            <h3 className={style.comment__item_username}>{item.user_name}</h3>
                                            <h4 className={style.comment__item_time}>{item.time}</h4>
                                            <p className={style.comment__item_content}>{item.comment}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="products">
                        <div className="products__wrapper">
                            <div className="products__category">
                                <h2>Recommendation for you</h2>
                                <div className="products__list">
                                    {
                                        topProducts.map((product, index) => {
                                            if (index < 10) {
                                                return (
                                                    <div key={index} className="products__item">
                                                        <div className="products__img">
                                                            <img src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
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
            </div>
        </SkeletonTheme>
    )
}

export default ProductInfo;