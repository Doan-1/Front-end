import { useState } from "react";
import style from "../css/Account_page.module.css";
import { useNavigate } from "react-router-dom";

import facebook_logo from "../assets/facebook.png";
import google_logo from "../assets/google.png";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../context/Api.context";
import { useEffect } from "react";
import { Input, Row, Col } from "antd";

const Account = () => {
  let navigate = useNavigate();
  const api = new API();
  const [show, setShow] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const hanldeSignIn = () => {
    setShow(!show);
  };
  const hanldeSignUp = () => {
    setShow(!show);
  };

  const handleLoggin = () => {
    if (userName != "" && password != "") {
      api.UserLogin(userName, password).then((data) => {
        if (data.data.data === "Sai mk") {
          window.alert("Mật khẩu không đúng");
          setPassword("");
        }
        if (data.data.data === "Sai username") {
          window.alert("Tài khoản không đúng");
          setUserName("");
          setPassword("");
        } else {
          localStorage.setItem("userid", data.data.data);
          api.getUserbyIDuser(data.data.data).then((res) => {
            setUser(res.data);
          });
        }
      });
    } else {
      window.alert("Tài khoản mật khẩu không được trống");
    }
  };
  const handleSIGNUP = () => {
    if (
      userName != "" &&
      password != "" &&
      firstName != "" &&
      lastName != "" &&
      phone != "" &&
      address != ""
    ) {
      api.UserRegister(userName, password).then((data) => {
        if (data.data.data === "username da ton tai") {
          window.alert("Tên tài khoản đã tồn tại");
          setUserName("");
          setPassword("");
        } else {
          alert("successful!");
          // setUserName("");
          // setPassword("");
          // setFirstName("");
          // setLastName("");
          // setPhone("");
          // setAddress("");
          // setEmail("");
          setShow(!show);
        }
      });
    } else {
      window.alert("Tài khoản mật khẩu không được trống");
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      {show ? (
        <div className={style.account}>
          <div className={style.signin}>
            <div className={style.wrapper}>
              <h2>Welcome back, my friend!</h2>
              <span color="red">{}</span>
              <Row className="mb-6">
                <Col className="w-full">
                  <span>User Name</span>
                  <Input
                    className="flex-1 mr-2 mt-4"
                    value={userName}
                    type="text"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="mb-8">
                <Col className="w-full">
                  <span>Password</span>
                  <Input
                    className="flex-1 mr-2 mt-4"
                    value={password}
                    type="text"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <p className={style.forgot_password}>Forgotten your password?</p>
              <div className={style.text}>
                <p>
                  By logging in, you agree to Nike's <a>Privacy Policy</a> and{" "}
                  <a>Terms of Use.</a>
                </p>
              </div>
              <div className="btn" onClick={handleLoggin}>
                <span>SIGN IN</span>
              </div>
              <div className={style.text}>
                <p>
                  Don't have an account?{" "}
                  <a class="sign_up" onClick={hanldeSignIn}>
                    Join us
                  </a>
                </p>
              </div>
              <div className={style.signup_method}>
                <div className={style.signup_method_item}>
                  <img src={facebook_logo} />
                  <span>Sign up with Facebook</span>
                </div>
                <div className={style.signup_method_item}>
                  <img src={google_logo} />
                  <span>Sign up with Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.account}>
          <div className={style.signup}>
            <div className={style.wrapper}>
              <h2>Welcome to Shoes Store!</h2>
              <div className={style.input}>
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
                    rows={2}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Row>
                <Row className="mb-6">
                  <Col className="w-full">
                    <span>User Name</span>
                    <Input
                      className="flex-1 mr-2 mt-4"
                      value={userName}
                      type="text"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mb-8">
                  <Col className="w-full">
                    <span>Password</span>
                    <Input
                      className="flex-1 mr-2 mt-4"
                      value={password}
                      type="text"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* <div className={style.input_addition}>
                  <div className={style.input_item}>
                    <input type="text" placeholder="username" />
                  </div>
                </div>
                <div className={style.input_item}>
                  <input type="password" placeholder="password" />
                </div> */}
              </div>
              <div className="btn" onClick={handleSIGNUP}>
                <span>SIGN UP</span>
              </div>
              <div className={style.text}>
                <p>
                  Have an available account?{" "}
                  <a class="sign_in" onClick={hanldeSignUp}>
                    Sign in
                  </a>
                </p>
              </div>
              <div className={style.signup_method}>
                <div className={style.signup_method_item}>
                  <img src={facebook_logo} />
                  <span>Sign up with Facebook</span>
                </div>
                <div className={style.signup_method_item}>
                  <img src={google_logo} />
                  <span>Sign up with Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
