import React from "react";
import { useState, useEffect } from "react";
import style from './ScrollButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={style.button} style={{ display: visible ? 'flex' : 'none' }}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp}
                style={{ fontSize: '20px' }} />
        </div>
    );
}

export default ScrollButton;