import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  const {max, min, name, onClose, img} = props;
  //console.log(props)
  return  <div>
            <div className={styles.container}>
              <div className={styles.btncontainer}>
                <button className={styles.btn} onClick={onClose}>X</button>
              </div>
              <h1 className={styles.titulo}>{name}</h1>
              <div className={styles.temp}>
                <div>
                  <h3 className={styles.subtitulo}>Min:</h3>
                  <h3 className={styles.subdato}>{min}</h3>
                </div>
                <div>
                  <h3 className={styles.subtitulo}>Max:</h3>
                  <h3 className={styles.subdato}>{max}</h3>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
                </div> 
              </div>
            </div>
          </div>
};
