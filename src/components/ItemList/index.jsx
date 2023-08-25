import React from "react";
import {Item} from '../Item/index';

export const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{(titulo)}</h2>

        <div className="d-flex justify-content align-items flex-wrap productos ">
            { productos.map((productos) => <Item productos={productos} key={productos.id} />) }
        </div>
    
    </div>
  )
}

