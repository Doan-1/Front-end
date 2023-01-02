import { useEffect, useState } from "react";
import style from "../css/ProductInfo_page.module.css";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../context/Api.context";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ConstComponets/Loading";
import ProductItem from "../components/ConstComponets/ProductItem";
import { Image, Rate, Radio } from "antd";

const ProductInfo = () => {
  let id = localStorage.getItem("userid");
  let navigate = useNavigate();
  const api = new API();
  const [loading, setLoading] = useState(true);
  const param = useParams();
  const [user, setUser] = useState(false);
  const [product, setProduct] = useState({});
  const [topProducts, setTopProducts] = useState([]);
  const [showDetailInfo, setShowDetailInfo] = useState(true);
  const [arrowUp, setArrowUp] = useState(true);
  const [arrowDown, setArrowDown] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([]);
  const [size, setSize] = useState(1);
  const [state, setState] = useState("");
  const [rating, setRating] = useState(0);
  const handleShow = () => {
    setArrowUp(true);
    setArrowDown(false);
    setShowDetailInfo(true);
  };
  const handleHide = () => {
    setArrowUp(false);
    setArrowDown(true);
    setShowDetailInfo(false);
  };
  useEffect(() => {
    if (id) {
      api.getUserbyIDuser(id).then((res) => {
        setUser(res.data);
      });
    }
  }, [window.location.href]);
  useEffect(() => {
    api.getProductbySlug(param.slug).then((res) => {
      setProduct(res.data);
      setSizes(res.data.size);
      setImages(res.data.listImage);
      setState(res.data.status);
    });
    setTimeout(() => {}, 500);
  }, [window.location.href]);
  useEffect(() => {
    setLoading(false);
  }, [product]);
  useEffect(() => {
    api.getTopProduct().then((res) => {
      setTopProducts(res.data);
    });
  }, [window.location.href]);

  useEffect(() => {
    api.getCommentbyId(product.id_product).then((res) => {
      setComments(res.data.reverse());
    });
  }, [product]);
  const handleAddOrder = () => {
    if (id) {
      if (size === 1) {
        api.createNewOrder(
          user.id_user,
          product.id_product,
          product.product_name,
          product.product_price,
          product.thumbnail,
          product.color,
          product.style,
          "1",
          sizes[0]
        );
        window.alert("Add to Bags success!");
      } else {
        api.createNewOrder(
          user.id_user,
          product.id_product,
          product.product_name,
          product.product_price,
          product.thumbnail,
          product.color,
          product.style,
          "1",
          size
        );
        window.alert("Add to Bags success!");
      }
    } else {
      navigate("/account");
    }
  };
  const handleAddFavor = (idproduct) => {
    if (id) {
      api.updatefavorProduct(id, idproduct);
      window.alert("Add to Favorites sucess!");
    }
  };
  const time = new Date();
  const handleCreateComment = () => {
    setComment("");
    setRating(0);
    comments.push({
      id_user: user.id_user,
      user_name: user.user_name,
      id_product: product.id_product,
      comment: comment,
      star: rating,
      time: time.toUTCString(),
    });
    api.createNewComment(
      user.id_user,
      user.user_name,
      product.id_product,
      comment,
      rating,
      time.toUTCString()
    );
  };
  const handleAddSize = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <div className={style.main}>
        <div className={style.product__info}>
          <div className={style.product__img_list}>
            <Image.PreviewGroup>
              {images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    rootClassName="flex items-center justify-center"
                    preview={{
                      maskClassName: `style.comment`,
                    }}
                    className="p-2"
                    src={
                      item ||
                      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"
                    }
                    alt=""
                  />
                );
              })}
            </Image.PreviewGroup>
          </div>
          <div></div>
          <div className={style.product__info_detail}>
            <h3 className="font-face-gm-bold text-8xl mb-2">
              {product.product_name}
            </h3>
            <span className="font-face-tp-bold text-3xl m-2 text-[#666666]">
              {product.classify}
            </span>
            <h4 className="font-face-gm-bold text-5xl mb-2">
              ${product.product_price}
            </h4>
            <p className="font-face-tp-regular text-2xl m-2 text-[#666666] leading-9">
              {product.description}
            </p>
            <div className={style.product__color}>
              <h5 className="font-face-tp-bold text-3xl m-2">Colour Shown:</h5>
              <span className="font-face-tp-bold text-2xl m-2">
                {product.color}
              </span>
            </div>
            <div className={style.product__syle}>
              <h5 className="font-face-tp-bold text-3xl m-2">Style:</h5>
              <span className="font-face-tp-bold text-2xl m-2">
                {product.style}
              </span>
            </div>
            <div className={style.product__size}>
              <h5 className="font-face-tp-bold text-3xl m-2">Size:</h5>
              <div className="flex flex-row items-center justify-center flex-wrap">
                <Radio.Group onChange={handleAddSize} value={size}>
                  {sizes.map((item, index) => {
                    return <Radio value={item}>{item}</Radio>;
                  })}
                </Radio.Group>
              </div>
            </div>
            {state === "con hang" ? (
              <div className={style.product__btn}>
                <div className="btn" onClick={handleAddOrder}>
                  ADD TO BAG
                </div>
                <div
                  className={["btn" + " " + style.btn__fav]}
                  onClick={() => handleAddFavor(product.id_product)}
                >
                  FAVOTITES
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ marginLeft: "8px" }}
                  />
                </div>
              </div>
            ) : (
              <div className={style.product__btn}>
                <div className="btn">Out of stock</div>
              </div>
            )}
            <div className={style.product__view}>
              <div className={style.product__view_info}>
                <div className={style.product__view_info_title}>
                  <span className="font-face-tp-bold text-3xl m-2">
                    View detail information
                  </span>
                  {arrowDown && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      style={{
                        fontSize: "12px",
                        marginLeft: "4px",
                        cursor: "pointer",
                      }}
                      onClick={handleShow}
                    />
                  )}
                  {arrowUp && (
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      style={{
                        fontSize: "12px",
                        marginLeft: "4px",
                        cursor: "pointer",
                      }}
                      onClick={handleHide}
                    />
                  )}
                </div>
                {showDetailInfo && (
                  <div className={style.product__view_info_contrain}>
                    <p className="font-face-tp-regular text-2xl text-[#666666] leading-9">
                      {product.detail_info || <Skeleton />}
                    </p>
                  </div>
                )}
              </div>
              <div className={style.product__view_review}>
                <div className={style.product__view_info_title}>
                  <span className="font-face-tp-bold text-3xl">Review (5)</span>
                  <div className={style.rating}>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "12px" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "12px" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "12px" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "12px" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfAlt}
                      style={{ fontSize: "12px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.comment}>
          <h2 className={style.comment__heading}>Comments</h2>
          <Rate
            value={rating}
            className="text-3xl"
            // allowHalf
            onChange={(value) => {
              setRating(value);
            }}
          />
          <div className={style.comment__context}>
            <input
              type="text"
              placeholder="Enter comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="font-face-tp-bold text-3xl"
              type="Submit"
              onClick={handleCreateComment}
            >
              Post
            </button>
          </div>
          <div style={{ marginTop: "16px" }}>
            {comments.map((item, index) => {
              return (
                <div className={style.comment__item} key={index}>
                  <h3 className={style.comment__item_username}>
                    {item.user_name}
                  </h3>
                  <h4 className={style.comment__item_time}>{item.time}</h4>
                  <Rate value={item.star} className="text-3xl" disabled />
                  <p className={style.comment__item_content}>{item.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="products">
          <div className="products__wrapper">
            <div className="products__category">
              <h2>Recommendation for you</h2>
              <div className="products__list">
                {topProducts.map((product, index) => {
                  if (index < 10) {
                    return (
                      <ProductItem key={index} props={{ product, index }} />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default ProductInfo;
