import React from "react";
import {Item} from '../Item/index';

export const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{(titulo)}</h2>

        <div className="d-flex justify-content align-items flex-wrap productos ">
            { productos.map(( producto )=> <Item producto ={producto} key={productos.id} />) }
        </div>
    
    </div>
  )
}

