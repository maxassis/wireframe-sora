import React from "react";
import styles from "./styles.module.scss";

export default function CardPlans({ title, subTitle, button }) {
  return (
    <div className={styles["wrapper-cards_card"]}>
      <div className={styles["wrapper-cards_card_card-title"]}>
        <h3>{title}</h3>
        <span style={{ color: subTitle === "Free" ? "#6C7891" : "#6E38F7" }}>
          {subTitle}
        </span>
      </div>

      <div className={styles["wrapper-cards_card_descriptions"]}>
        <div className={styles["wrapper-cards_card_descriptions_items"]}>
          <span>How Hypnosis</span>
          <span>Off To See</span>
          <span>Lern How</span>
          <span>Why Re invent</span>
          <span>Discover Your</span>
        </div>

        <div className={styles["wrapper-cards_card_descriptions_items"]}>
          <span>How Hypnosis</span>
          <span>Off To See</span>
          <span>Lern How</span>
          <span>Why Re invent</span>
          <span>Discover Your</span>
        </div>
      </div>
      {!button ? (
        <button className="btn-outline">Get started</button>
      ) : (
        <button className="btn-primary">Get started</button>
      )}
    </div>
  );
}
