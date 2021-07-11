import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/imgs/logo2.svg";
import linkedin from "../../assets/imgs/linkedin.svg";
import youtube from "../../assets/imgs/youtube.svg";
import insta from "../../assets/imgs/insta.svg";

export default function Footer() {
  return (
    <div className={styles["wrapper-main"]}>
      <div className="container">
        <div className={styles["wrapper-footer"]}>
          <div className={styles["wrapper-footer_main"]}>
            <div className={styles["wrapper-footer_main_wrapper-sora"]}>
              <img src={logo} alt="logo" />
              <p>
                There are many reasons to get down and start to get depressed
                about
              </p>
            </div>

            <div className={styles["wrapper-footer_main_lists"]}>
              <ul>
                <li>About</li>
                <li>Price</li>
                <li>Services</li>
                <li>Plans</li>
              </ul>
              <ul>
                <li>Login in</li>
                <li>Log out</li>
                <li>Avaliable</li>
                <li>Our team</li>
              </ul>
              <ul>
                <li>About</li>
                <li>Price</li>
                <li>Services</li>
                <li>Plans</li>
              </ul>
              <ul>
                <li>Price</li>
                <li>Services</li>
                <li>Plans</li>
                <li>Our team</li>
              </ul>
            </div>
          </div>

          <div className={styles["copywrite"]}>
            <span>2021 © Todos os direitos reservados.</span>
            <div className={styles["copywrite_logos"]}>
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
              <img src={insta} alt="insta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
