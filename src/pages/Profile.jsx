import { useEffect, useState } from "react"
import style from '../css/Profile_page.module.css'
import API from "../context/Api.context"

const api = new API();
const Profile = () => {
    const [userInfo, setUserInfo] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUseEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPhonenumber, setUserPhonenumber] = useState('')
    const [userAddress, setUserAddress] = useState('')
    useEffect(() => {
        api.getUserbyIDuser('1').then(res => {
            // setUserInfo(res.data)
            setUserName(res.data.user_name)
            setUseEmail(res.data.user_email)
            setUserPassword(res.data.user_password)
            setUserPhonenumber(res.data.user_phone)
            setUserAddress(res.data.user_address)
            console.log(res.data)
        })
    },[window.location.href])
   
    return (
        <div className={style.profile}>
            <div className={style.profile__wrapper}>
                <h2>My profille</h2>
                <div className={style.profile__info}>
                    <div className={style.first_line}>
                        <div className={style.name}>
                            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
                        </div>
                    </div>
                    <input type="text" value={userEmail} onChange={e => setUseEmail(e.target.value)}/>
                    <input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
                    <div className={style.phone_number}>
                        <input type="text" value={userPhonenumber} onChange={e => setUserPhonenumber(e.target.value)}/>
                    </div>
                    <div className={style.address}>
                        <input type="text" value={userAddress} onChange={e => setUserAddress(e.target.value)}/>
                    </div>
                    <div className={"btn" + " " + style.btn__profile}>SAVE</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;