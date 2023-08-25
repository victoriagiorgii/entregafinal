import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import {CartContext } from "../context/CartContext";

export const ItemDetail=({producto})=>{
 
   const {carrito,agregarAlCarrito}=useContext(CartContext);
   console.log(carrito)

   const[cantidad , setCantidad]=useState(1);

   const handleRestar=() => {
      cantidad > 1 && setCantidad (cantidad -1)
   }

   const handleSumar= () =>{
    cantidad < producto.stock && setCantidad(cantidad +1)
   }
  
    return(
      <div className="container">
        <div className="text-center">
          <h3> Detalle {producto.titulo}</h3>
          <img src={producto.img} alt=''/>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock:{producto.stock}</p>
          <ItemCount 
          cantidad={ cantidad}
          handleResta={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={() =>{agregarAlCarrito (producto,cantidad)}}
          />
        </div>
      </div>
      
    )
}