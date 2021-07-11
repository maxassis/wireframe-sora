import React from 'react'
import styles from './styles.module.scss'
import Logo from "../../assets/imgs/logo.svg"

export default function Header() {
    return(
        <header className="container">
            <div className={styles['wrapper-main']}>
            <a href="">
                <img src={Logo} alt="logo" />
            </a>


           <div className={styles["wrapper-nav"]}>
            <ul className={styles.black}> 
                <li>ABOUT</li>
                <li>GALLERY</li>
                <li>PRINCING</li>
                <li>FAQ</li>
                <li>BENEFITS</li>
            </ul>

            <ul className={styles.purple}> 
                <li>SIGN IN</li>   
                <li>SIGN UP</li>      
            </ul>
            </div> 
        
            </div>
        </header>


    )





}