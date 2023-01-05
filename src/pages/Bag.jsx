import { useState, useEffect } from "react";
import API from "../context/Api.context";
import style from "../css/Bag_page.module.css";
import ItemBag from "../components/ConstComponets/ItemBag";
import Loading from "../components/ConstComponets/Loading";
import ProductItem from "../components/ConstComponets/ProductItem";
import { Input, Radio, Row, Col, Card, message } from "antd";

const api = new API();
const Bag = () => {
  let id = localStorage.getItem("userid");
  const [loading, setLoading] = useState(true);
  const [bags, setBags] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);
  const [delivery, setDelivery] = useState(false);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState("standard");
  const [phone, setPhone] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  // useEffect(() => {

  //     api.getOrderbyIDuser(id).then((data) => {
  //         setBags(data.data[0].orders)
  //     })

  // }, [window.location.href])

  useEffect(() => {
    api.getOrderbyIDuser(id).then((data) => {
      setBags(data.data[0].orders);
    });
    if (bags.length > 0) {
      let a = bags.reduce((total, bag) => {
        return total + Number(bag.product_price) * Number(bag.quantity);
      }, 0);
      setNumber(a);
      if (shipping === "standard") {
        setTotal(a);
      } else {
        setTotal(a + 15);
      }
    }
  }, [bags, shipping]);

  useEffect(() => {
    api.getUserbyIDuser(id).then((res) => {
      setFavorites(res.data.favorite);
    });
  }, [window.location.href]);

  useEffect(() => {
    api.getTopProduct().then((res) => {
      setTopProducts(res.data);
    });
  }, [window.location.href]);

  useEffect(() => {
    setLoading(false);
  }, [bags, favorites, topProducts]);

  useEffect(() => {
    setNumber(0);
    setTotal(0);
  }, [bags.length === 0]);

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please fill all information about your order.",
      className: "mt-24",
    });
  };
  const handleAddNewCart = () => {
      api.createNewCart(id, firstName, lastName, email,shipping,total,address,phone);
      setBags([])
      setAddress("")
      setDelivery(false)
      setEmail("")
      setFirstName("")
      setLastName("")
      setPhone("")
      setShipping("standard")
      setTotal(0)
      setNumber(0)

    // console.log({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   phone: phone,
    //   address: address,
    //   shipping: shipping,
    //   total: total,
    //   bags: bags,
    // });
    if (firstName === "" || lastName === "" || phone === "" || address === "") {
      error();
    }
  };

  return (
    <div>
      <div className="pt-24 grid grid-cols-2">
        <div className="px-[88px] pt-14">
          <h3 className="text-3xl text-[#292929] font-semibold">Infomation</h3>
          <div layout="horizontal">
            <Row className="flex items-center justify-between mb-6">
              <Col>
                <span>First Name</span>
                <Input
                  className="flex-1 mr-2 mt-4"
                  value={firstName}
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <span>Last Name</span>
                <Input
                  className="flex-1 mr-2 mt-4"
                  value={lastName}
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="flex items-center justify-between mb-6">
              <Col>
                <span>Email</span>
                <Input
                  className="flex-1 mr-2 mt-4"
                  value={email}
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <span>Phone Number</span>
                <Input
                  className="flex-1 mr-2 mt-4"
                  value={phone}
                  type="number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-6">
              <span>Address</span>
              <Input.TextArea
                className="mt-4"
                rows={4}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Row>
            <div className="mb-10">
              <h3 className="text-3xl text-[#292929] font-semibold">
                Shipping
              </h3>
              <Row>
                <Radio.Group
                  className="flex items-center justify-between"
                  defaultValue={shipping}
                  onChange={(e) => {
                    setShipping(e.target.value);
                    setDelivery(!delivery);
                  }}
                >
                  <Card
                    className="flex-1 m-2"
                    title={<Radio value="standard"> Standard </Radio>}
                    bordered={false}
                    style={{ width: 300 }}
                    size="small"
                    extra={<h2 className="text-2xl font-bold">Free</h2>}
                  >
                    <p>7-10 working days</p>
                  </Card>
                  <Card
                    className="flex-1 m-2"
                    title={<Radio value="express"> Express </Radio>}
                    bordered={false}
                    style={{ width: 300 }}
                    size="small"
                    extra={<h2 className="text-2xl font-bold">$15</h2>}
                  >
                    <p>2-4 working days</p>
                  </Card>
                </Radio.Group>
              </Row>
            </div>
          </div>
          {contextHolder}
          <div className="btn" onClick={handleAddNewCart}>
            Submit
          </div>
        </div>
        <div className="px-[88px] pt-14">
          <div className={style.product__list}>
            <h2 className="text-3xl text-[#292929] font-semibold">Your Bag</h2>
            {bags.map((bag, index) => {
              return (
                <div
                  className="item"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "16px",
                  }}
                  key={index}
                >
                  <ItemBag
                    props={{
                      id,
                      bag,
                      bags,
                      setBags,
                      number,
                      setNumber,
                      total,
                      setTotal,
                    }}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.order__summary}>
            <div>
              <span>Subtotal</span>
              <span>{number}</span>
            </div>
            <div>
              <span>Estimated Delivery {"&"} Handling</span>
              {delivery ? <span>{15}</span> : <span>{0}</span>}
            </div>
            <div>
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="products__wrapper">
          <div className="products__category">
            <h2>Your Favourites</h2>
            <div className="products__list">
              {favorites.map((product, index) => {
                return <ProductItem props={{ product, index }} />;
              })}
            </div>
          </div>
          <div className="products__category">
            <h2>Recommendation for you</h2>
            <div className="products__list">
              {topProducts.map((product, index) => {
                if (index < 10) {
                  return (
                    <div className="basis-1/4 first:pl-0">
                      <ProductItem props={{ product, index }} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Bag;
