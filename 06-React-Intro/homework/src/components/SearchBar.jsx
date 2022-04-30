//import { Button } from 'bootstrap';
import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  
  return <div>
          <input type="text" defaultValue="Que pais deseas buscar?"/>
          
            <button onClick={() => props.onSearch("me tira undefined  ")}>Buscar</button>
            
        </div>
};