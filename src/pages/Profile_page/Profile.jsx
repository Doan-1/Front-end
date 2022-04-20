import { useState } from "react"
import style from './Profile_page.module.css'

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Kim Lien',
        date_of_birth: '01-Oct-2001',
        email: 'kimlien01102001@gmail.com',
        password: 'Truonglien123456',
        phonenumber: '',
        address: ''
    })
    return (
        <div className={style.profile}>
            <div className={style.profile__wrapper}>
                <h2>My profille</h2>
                <div className={style.profile__info}>
                    <div className={style.first_line}>
                        <div className={style.name}>
                            <input type="text" placeholder={userInfo.name} />
                        </div>
                        <div></div>
                        <div className={style.date_of_birth}>
                            <input type="text" placeholder={userInfo.date_of_birth} />
                                <i class="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                    <input type="text" placeholder={userInfo.email} />
                        <input type="password" placeholder={userInfo.password} />
                            <div className={style.phone_number}>
                                <input type="text" placeholder="Phonenumber" />
                                    <i class="fa-solid fa-plus"></i>
                            </div>
                            <div className={style.address}>
                                <input type="text" placeholder="Address" />
                                    <i class="fa-solid fa-plus"></i>
                            </div>
                            <div className={"btn" + " " + style.btn__profile}>SAVE</div>
                        </div>
                </div>
            </div>
            )
}

export default Profile;