import React from "react";
import styles from "./styles.module.scss";
import people from "../../assets/imgs/people.svg";

export default function CardPeople({ title, subTitle, description }) {
  return (
    <div className={styles["wrapper-peoples_people"]}>
      <img src={people} alt="people" />
      <h4>{title}</h4>
      <span>{subTitle}</span>
      <p>{description}</p>
    </div>
  );
}
