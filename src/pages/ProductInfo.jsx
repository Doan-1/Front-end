import { useEffect, useState } from "react";
import style from '../css/ProductInfo_page.module.css'
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../context/Api.context";

const ProductInfo = () => {
    const api = new API();
    const param = useParams();
    const [product, setProduct] = useState({})
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
    const [showDetailInfo, setShowDetailInfo] = useState(true)
    const [arrowUp, setArrowUp] = useState(true)
    const [arrowDown, setArrowDown] = useState(false)
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
        api.getProductbySlug(param.slug).then(res => {
            setProduct(res.data)
            console.log(res.data)
        })
    },[window.location.href])
    const handleAddOrder = () => {
        api.createNewOrder("1", product.id_product, product.product_name, product.product_price, product.thumbnail, product.color, product.style, "2", "UE36")
    }
    return (
        <div>
            <div class={style.main}>
                <div class={style.product__info}>
                    <div class={style.product__img_list}>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3408ff81-cd5f-4e70-af33-169863846088/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/324e8369-ab08-48db-abde-aeb795c379a4/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b9c3907e-2c14-489a-af72-e7d274dfb7de/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/477d0ad8-a8a8-480e-ab6a-075f0481496f/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c1f3a7e8-a96a-4dae-ae44-500c39cf8dc5/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                        <div class={style.product__img_item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3270b875-2d46-4000-ab1d-e72864df223a/air-jordan-1-mid-shoes-wWD4z0.png" alt="" />
                        </div>
                    </div>
                    <div></div>
                    <div class={style.product__info_detail}>
                        <h3>{product.product_name}</h3>
                        <span>{product.classify}</span>
                        <h4>{product.product_price}</h4>
                        <p>{product.description}</p>
                        <div class={style.product__color}>
                            <h5>Colour Shown:</h5>
                            <span>{product.color}</span>
                        </div>
                        <div class={style.product__syle}>
                            <h5>Style:</h5>
                            <span>{product.style}</span>
                        </div>
                        <div class={style.product__btn}>
                            <div class="btn" 
                            onClick={handleAddOrder}
                            >ADD TO BAG</div>
                            <div class={"btn" + " " + style.btn__fav}>
                                FAVOTITES
                                <FontAwesomeIcon icon={faHeart} style={{marginLeft: '8px'}} />
                            </div>
                        </div>
                        <div class={style.product__view}>
                            <div class={style.product__view_info}>
                                <div class={style.product__view_info_title}>
                                    <span>View detail information</span>
                                    {arrowDown && <FontAwesomeIcon icon={faAngleDown} style={{fontSize: '12px',marginLeft: '4px', cursor: 'pointer'}} 
                                    onClick={handleShow}/>}
                                    {arrowUp &&  <FontAwesomeIcon icon={faAngleUp}  style={{fontSize: '12px',marginLeft: '4px', cursor: 'pointer'}}
                                     onClick={handleHide}/>}
                                </div>
                                {
                                    showDetailInfo && 
                                    <div class={style.product__view_info_contrain}>
                                        {/* <div class={style.product__view_info_item}>
                                            <h5>CANVAS CLASSIC.</h5>
                                            <p>The sneaker you know and love is back with a fresh material play to change up the look and feel.The Air Jordan 1 Mid SE Utility is built with layers of rugged canvas in sharply contrasting black and white.A Gym Red outsole and Wings logo bring in a colour that's long been a favourite for the classic midtop shoe.</p>
                                        </div>
                                        <div class={style.product__view_info_item}>
                                            <h5>Benefits</h5>
                                            <p>Encapsulated Air-Sole unit in the heel provides lightweight cushioning. <br />
                                                Canvas in the upper for durability.
                                                Rubber cupsole provides traction on a variety of surfaces.
                                            </p>
                                        </div>
                                        <div class={style.product__view_info_item}>
                                            <h5>Product Details</h5>
                                            <p>Wings logo on the collar <br />
                                                Stitched-down textile Swoosh logo <br />
                                                Textile tongue with woven label <br />
                                                Foam midsole <br />
                                                Colour Shown: Black/Gym Red/White <br />
                                                Style: DD9338-016 <br />
                                                Country/Region of Origin: Vietnam</p>
                                        </div> */}
                                        <p>{product.detail_info}</p>
                                    </div>
                                }
                            </div>
                            <div class={style.product__view_review}>
                                <div class={style.product__view_info_title}>
                                    <span>Review (5)</span>
                                    <div class={style.rating}>
                                        <FontAwesomeIcon icon={faStar} style={{fontSize: '12px'}} />
                                        <FontAwesomeIcon icon={faStar} style={{fontSize: '12px'}}/>
                                        <FontAwesomeIcon icon={faStar} style={{fontSize: '12px'}}/>
                                        <FontAwesomeIcon icon={faStar} style={{fontSize: '12px'}}/>
                                        <FontAwesomeIcon icon={faStarHalfAlt} style={{fontSize: '12px'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="products__wrapper">
                        <div class="products__category">
                            <h2>Recommendation for you</h2>
                            <div class="products__list">
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
        </div>
    )
}

export default ProductInfo;