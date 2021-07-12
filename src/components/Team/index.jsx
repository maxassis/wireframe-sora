import React from 'react'
import styles from './styles.module.scss'
import choose from '../../assets/imgs/choose.svg'

import CardPeople from '../CardPeople'

export default function Team() {
  return (
    <section>
      <div className="container">
        <div className={styles['wrapper-title']}>
          <div className={styles['first-title']}>
            <h2>
              There are many reasons to get down and start to get depressed
              about your situation
            </h2>
            <div className={styles['first-title_btns-wrapper']}>
              <button className="btn-primary">Download</button>
              <button className="btn-outline">Teste gratís</button>
            </div>
          </div>
        </div>

        <div className={styles['choosing-wrapper']}>
          <img src={choose} alt="choose image" />

          <div className={styles['choosing-wrapper_description']}>
            <span>TRENDS</span>
            <h2>
              Choosing The <br /> Right Path
            </h2>
            <p>
              There are many reasons to get down and start to get depressed
              about your situation. There are many reasons to get down and start
              to get . There are many reasons to get down and start to get
              depressed about your situation. There are many reasons to get down
              and start to get .
            </p>
          </div>
        </div>

        <div className={styles.time}>
          <h2>Nosso time</h2>
          <p>
            There are many reasons to get down and start to get depressed about
            your situation.
          </p>
        </div>

        <div className={styles['wrapper-peoples']}>
          <div className={styles['wrapper-peoples_little-cards']}>
            <CardPeople
              title="Zain Torff"
              subTitle="DEVELOPER"
              description="There are many reasons to get down and start to get depressed about"
            />
            <CardPeople
              title="Gretchen Philips"
              subTitle="DESIGNER"
              description="There are many reasons to get down and start to get depressed about"
            />
          </div>
          <div className={styles['wrapper-peoples_big']}>
            <h3>Gustavo Korsgaard</h3>
            <span>CEO</span>
          </div>
        </div>

        <div className={styles.quote}>
          <h2>
            “ There are many reasons to get down and start to get depressed
            about your situation ”
          </h2>
        </div>
      </div>
    </section>
  )
}
