import React from "react";
import styles from "./styles.module.scss";
import CardPlans from "../CardPlans/index.jsx";

export default function Plans() {
  return (
    <div className={styles["main-container"]}>
      <div className="container">
        <div className={styles["wrapper-main"]}>
          <div className={styles["wrapper-main_title"]}>
            <h2>Escolha seu plano</h2>
            <p>
              There are many reasons to get down and start to get depressed
              about your situation.
              <br /> There are many reasons to get down and start to get .
            </p>
          </div>

          <div className={styles["wrapper-cards"]}>
            <CardPlans title="Standart" subTitle="Free" />
            <CardPlans title="Individual" subTitle="$9.99" button />
            <CardPlans title="Team" subTitle="$199" />
          </div>
        </div>
      </div>
    </div>
  );
}
