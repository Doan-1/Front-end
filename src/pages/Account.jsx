import { prettyDOM } from "@testing-library/react";
import { useState } from "react";
import style from '../css/Account_page.module.css'
import { Link } from "react-router-dom";


import facebook_logo from '../assets/facebook.png'
import google_logo from '../assets/google.png'

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../context/Api.context";


const Account = () => {
    const api = new API();
    const [showSignIn, setShowSignIn] = useState(true)
    const [showSignUp, setShowSignUp] = useState(false)
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [eror, seteror] = useState('')

    const hanldeSignIn = () => {
        setShowSignIn(false)
        setShowSignUp(true)
    }
    const hanldeSignUp = () => {
        setShowSignUp(false)
        setShowSignIn(true)
    }
    const handleLoggin =() =>{
        console.log(username,password);
        if(username != "" && password != "")
        {
            api.UserLogin(username,password).then((data) => {
                console.log(data.data)
                // let a = data.data.data;
                // console.log(a);
                if(data.data.data === 'Sai mk')
                {
                    //console.log("mk sai")
                    window.alert("Mật khẩu không đúng");
                    setpassword("")
                }
                if(data.data.data === 'Sai username')
                {
                    //console.log("mk sai")
                    window.alert("Tài khoản không đúng");
                    setusername("")
                    setpassword("")
                }
                else{
                    localStorage.setItem ('userid', data.data.data);
                }
            })
        }
        else
        {
            window.alert("Tài khoản mật khẩu không được trống");
        }
    }

    return (
        <div>
            {
                showSignIn &&
                <div className={style.account}>
                    <div></div>
                    <div className={style.signin}>
                        <div className={style.wrapper}>
                            <h2>Welcome back, my friend!</h2>
                            <span color="red">{}</span>
                            <div className={style.input}>
                                <div className={style.input_item}>
                                    <input type="text" value={username} onChange={e => setusername(e.target.value)} placeholder="User name" required/>
                                </div>
                                <div className={style.input_item}>
                                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" required />
                                    <FontAwesomeIcon icon={faEye} style={{position: 'absolute', top: '50%', right: '16px', transform: 'translateY(calc(-50%))', fontSize: '16px', color: 'var(--text-color)', cursor: 'pointer'}} />
                                </div>
                            </div>
                            <p className={style.forgot_password}>Forgotten your password?</p>
                            <div className={style.text}>
                                <p>By logging in, you agree to Nike's <a>Privacy
                                    Policy</a> and <a>Terms of Use.</a>
                                </p>
                            </div>
                            <div className="btn" onClick={handleLoggin}>
                                <span>SIGN IN</span>
                            </div>
                            <div className={style.text}>
                                <p>
                                    Don't have an account? <a class="sign_up" onClick={hanldeSignIn}>Join us</a>
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
            }
            {
                showSignUp &&
                <div className={style.account}>
                    <div></div>
                    <div className={style.signup}>
                        <div className={style.wrapper}>
                            <h2>Welcome to Shoes Store!</h2>
                            <div className={style.input}>
                                <div className={style.input_addition}>
                                    <div className={style.input_item}>
                                        <input type="text" placeholder="Your name" required/>
                                    </div>
                                    <div></div>
                                    <div className={style.input_item}>
                                        <input type="text" placeholder="Date of birth" required/>
                                        <FontAwesomeIcon icon={faCalendarDays} style={{position: 'absolute', top: '50%', right: '16px', transform: 'translateY(calc(-50%))', fontSize: '16px', color: 'var(--text-color)', cursor: 'pointer'}} />
                                    </div>
                                </div>
                                <div className={style.input_item}>
                                    <input type="text" placeholder="Email" required/>
                                </div>
                                <div className={style.input_item}>
                                    <input type="password" placeholder="Password" required/>

                                </div>
                            </div>
                            <div className="btn">
                                <span>SIGN UP</span>
                            </div>
                            <div className={style.text}>
                                <p>
                                    Have an available account? <a class="sign_in" onClick={hanldeSignUp}>Sign in</a>
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
            }
            {/* <script>
                const openSignup = document.querySelector('.sign-up')
                const closeSignup = document.querySelector('.sign-in')
                const signIn = document.querySelector('.signin')
                const signUp = document.querySelector('.signup')

                const eyeOpen = document.querySelector('.input-item-icon-open')
                const eyeClose = document.querySelector('.input-item-icon-close')

                function openSignUp(){
                    signIn.classList.add('active')
                    signUp.classList.add('active')
                }

                function closeSignUp(){
                    signIn.classList.remove('active')
                    signUp.classList.remove('active')
                }

                function closeEye(){
                    eyeOpen.classList.add('active')
                    eyeClose.classList.add('active')

                }

                function openEye(){
                    eyeOpen.classList.remove('active')
                    eyeClose.classList.remove('active')
                }

                openSignup.addEventListener('click', openSignUp)
                closeSignup.addEventListener('click', closeSignUp)
                eyeOpen.addEventListener('click', closeEye)
                eyeClose.addEventListener('click', openEye)
            </script> */}
        </div>
    )
}

export default Account;

