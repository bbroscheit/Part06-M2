import React from 'react';

export default function Card(props) {
  // acá va tu código
  const {max, min, name, onClose, img} = props;
  //console.log(props)
  return  <div>

            <button onClick={onClose}>X</button>
            <h1>{name}</h1>
            <div>
              <h3>Min:</h3>
              <h3>{min}</h3>
            </div>
            <div>
              <h3>Max:</h3>
              <h3>{max}</h3>
            </div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
            </div>    
          </div>
};