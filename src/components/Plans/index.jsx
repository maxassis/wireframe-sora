import React from "react";
import styles from "./styles.module.scss";

export default function Plans() {
  return (

      <div className={styles["wrapper-main"]}>
        <div className={styles["wrapper-main_title"]}>
          <h2>Escolha seu plano</h2>
          <p>
            There are many reasons to get down and start to get depressed about
            your situation.
            <br /> There are many reasons to get down and start to get .
          </p>
        </div>

        <div className={styles["wrapper-cards"]}>
          <div className={styles["wrapper-cards_card"]}>
              teste
          </div>
          <div className={styles["wrapper-cards_card"]}>
              teste
          </div>
          <div className={styles["wrapper-cards_card"]}>
              teste
          </div>
        </div>
      </div>
  );
}
