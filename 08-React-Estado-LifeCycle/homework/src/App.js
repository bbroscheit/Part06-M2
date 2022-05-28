import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
//import React, { useState } from 'react'; 

const apiKey = "4abfebf77e6fd1d92fdecafa10198014"

function App() {

  const [state, setCities] = React.useState([]);
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <div>
      <nav>
        <Nav 
            onSearch={(ciudad) => onSearch(ciudad)}
        />
      </nav>
        {state.length ? (
        <Card
          
          max={state[state.length-1].max}
          min={state[state.length-1].min}
          name={state[state.length-1].name}
          img={state[state.length-1].img}
          

        />
        ):(<span>No hay ciudades</span>)}
      </div>
      <hr />
      <div>
        <Cards
          cities={state} onClose={onClose}  
        />
      </div>
      <hr />
      
    </div>
  );
}

export default App;

