import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';


export default function Cards({cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={styles.mainContainer}>
   { 
  cities.map((ciudad) => {
    return <Card
            id={ciudad.id}
            max={ciudad.max}
            min={ciudad.min}
            name={ciudad.name}
            img={ciudad.img}
            onClose={() => onClose(ciudad.id)}
          />
        })}
  </div>
    
};
