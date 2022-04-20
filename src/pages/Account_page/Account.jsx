import { useState } from "react";
import style from './Account_page.module.css'


const Account = () => {
    return (
        <div>
            <div className={style.account}>
                <div></div>
                <div className={style.signin}>
                    <div className={style.wrapper}>
                        <h2>Welcome back, my friend!</h2>
                        <div className={style.input}>
                            <div className={style.input_item}>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className={style.input_item}>
                                <input type="text" placeholder="Password" />
                                {/* <i class="fa_solid fa_eye input_item_icon_open"></i>
                                    <i class="fa_solid fa_eye_slash input_item_icon_close "></i> */}
                            </div>
                        </div>
                        <p className={style.forgot_password}>Forgotten your password?</p>
                        <div className={style.text}>
                            <p>By logging in, you agree to Nike's <a>Privacy
                                Policy</a> and <a>Terms of Use.</a>
                            </p>
                        </div>
                        <div className="btn">
                            <span>SIGN IN</span>
                        </div>
                        <div className={style.text}>
                            <p>
                                Don't have an account? <a class="sign_up">Join us</a>
                            </p>
                        </div>
                        <div className={style.signup_method}>
                            <div className={style.signup_method_item}>
                                <i class="fa_brands fa_facebook"></i>
                                <span>Sign up with Facebook</span>
                            </div>
                            <div className={style.signup_method_item}>
                                <img src="/resources/public/assets/img/google.png" alt="" />
                                <span>Sign up with Google</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.signup} style={{}}>
                    <div className={style.wrapper}>
                        <h2>Welcome to Shoes Store!</h2>
                        <div className={style.input}>
                            <div className={style.input_addition}>
                                <div className={style.input_item}>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div></div>
                                <div className={style.input_item}>
                                    <input type="text" placeholder="Date of birth" />
                                    <i id="calendar" class="fa_solid fa_calendar_days"></i>
                                </div>
                            </div>
                            <div className={style.input_item}>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className={style.input_item}>
                                <input type="text" placeholder="Password" />

                            </div>
                        </div>
                        <div className="btn">
                            <span>SIGN UP</span>
                        </div>
                        <div className={style.text}>
                            <p>
                                Have an available account? <a class="sign_in">Sign in</a>
                            </p>
                        </div>
                        <div className={style.signup_method}>
                            <div className={style.signup_method_item}>
                                <i class="fa_brands fa_facebook"></i>
                                <span>Sign up with Facebook</span>
                            </div>
                            <div className={style.signup_method_item}>
                                <img src="/resources/public/assets/img/google.png" alt="" />
                                <span>Sign up with Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

