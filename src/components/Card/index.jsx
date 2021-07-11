import React from 'react'
import bola from '../../assets/imgs/bola.svg' 
import styles from './styles.module.scss'

export default function Card({title, subTitle}) {
    return(
        <div className={styles['wrapper-services_service']}> 
        <img src={bola} alt="bola icon" />
        <div className={styles['wrapper-services_service_text']}>  
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div> 
      </div>


    )



}