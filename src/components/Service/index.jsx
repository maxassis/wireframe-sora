import React from "react";
import styles from "./styles.module.scss";
import bola from '../../assets/imgs/bola.svg' 
import Card from "../Card";

export default function Service() {
  return (
    <div className="container">
      <div className={styles["wrapper-main"]}>
        <div className={styles["wrapper-main_section-title"]}>
          <h2>Nossos serviços</h2>
          <p>
            There are many reasons to get down and start to get depressed about
            your situation.
          </p>
        </div>
        <div className={styles['wrapper-services']}>   
          <Card title="The fist" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Second" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Third" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Fourth" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="The fist" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Second" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Third" subTitle="There are many reasons to get down and start to get depressed about"/>
          <Card title="Fourth" subTitle="There are many reasons to get down and start to get depressed about"/>
        </div>
      </div>
    </div>
  );
}
