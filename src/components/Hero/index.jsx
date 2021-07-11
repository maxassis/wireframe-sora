import React from 'react'
import styles from './styles.module.scss'
import vector from '../../assets/imgs/Vector.svg'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'

export default function Hero() {
  return (
    <section className="container">
      <div className={styles['wrapper-main']}>
        <div className={styles['wrapper-titles']}>
          <span>Avaliable</span>
          <h1>Wireframe Sora</h1>
          <div className={styles['wrapper-titles_btns']}>
            <button className="btn-primary">Download</button>
            <button className="btn-outline">Teste gratís</button>
          </div>

          <div className={styles['wrapper-scroll']}>
            <img src={vector} alt="seta" />
            <span>SCROLL TO MORE</span>
          </div>
        </div>

        <div className={styles['wrapper-image']}>
          <img src={img1} alt="img1" className={styles.img1} />
          <img src={img2} alt="img2" className={styles.img2} />
          <img src={img3} alt="img3" />
        </div>
      </div>
    </section>
  )
}
