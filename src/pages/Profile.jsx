import { useEffect, useState } from "react";
import style from "../css/Profile_page.module.css";
import API from "../context/Api.context";
import { Form, Input, Button, Row, Col } from "antd";

const api = new API();
const Profile = () => {
  let id = localStorage.getItem("userid");
  const [userInfo, setUserInfo] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUseEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhonenumber, setUserPhonenumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  useEffect(() => {
    if (id) {
      api.getUserbyIDuser(id).then((res) => {
        setUserName(res.data.user_name);
        setUseEmail(res.data.user_email);
        setUserPassword(res.data.user_password);
        setUserPhonenumber(res.data.user_phone);
        setUserAddress(res.data.user_address);
        setUserFirstName(res.data.first_name);
        setUserLastName(res.data.last_name);
      });
    }
  }, [window.location.href]);

  const handleUpdate = () => {
    window.alert("Success");
    api.UpdateUser(id, userEmail, userPhonenumber, userAddress);
  };
  const [form] = Form.useForm();

  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    form.setFieldsValue({
      firstname: userName,
      lastname: userName,
      email: userEmail,
      number: userPhonenumber,
      address: userAddress,
    });
  }, []);
  return (
    <div className={style.profile}>
      <div className={style.profile__wrapper}>
        <h2>My profille</h2>
        <div layout="horizontal">
          <Row className="flex items-center justify-between mb-6">
            <Col className="flex-1 px-4">
              <span>First Name</span>
              <Input
                className="flex-1 mr-2 mt-4"
                value={userFirstName}
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Col>
            <Col className="flex-1 px-4">
              <span>Last Name</span>
              <Input
                className="flex-1 mr-2 mt-4"
                value={userLastName}
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="flex items-center justify-between mb-6">
            <Col className="flex-1 px-4">
              <span>Email</span>
              <Input
                className="flex-1 mr-2 mt-4"
                value={userEmail}
                type="text"
                onChange={(e) => {
                  setUseEmail(e.target.value);
                }}
              />
            </Col>
            <Col className="flex-1 px-4">
              <span>Phone Number</span>
              <Input
                className="flex-1 mr-2 mt-4"
                value={userPhonenumber}
                type="number"
                onChange={(e) => {
                  setUserPhonenumber(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-6 px-4">
            <span>Address</span>
            <Input.TextArea
              className="mt-4"
              rows={4}
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </Row>
          <div
            className={"btn" + " " + style.btn__profile}
            onClick={handleUpdate}
          >
            SAVE
          </div>
        </div>
        {/* <div className={style.profile__info}>
          <div className={style.first_line}>
            <div className={style.name}>
              <input type="text" value={userName} placeholder="Username" />
            </div>
          </div>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUseEmail(e.target.value)}
            placeholder="Email"
          />
          <input type="password" value={userPassword} placeholder="Passwod" />
          <div className={style.phone_number}>
            <input
              type="text"
              value={userPhonenumber}
              onChange={(e) => setUserPhonenumber(e.target.value)}
              placeholder="Phonenumber"
            />
          </div>
          <div className={style.address}>
            <input
              type="text"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div
            // eslint-disable-next-line no-useless-concat
            className={"btn" + "" + "mx-8"}
            onClick={handleUpdate}
          >
            SAVE
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
