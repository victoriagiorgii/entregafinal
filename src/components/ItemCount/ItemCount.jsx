import React from 'react'

export const ItemCount = ( {cantidad, handleResta, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="item-count">
            <button onClick={handleResta}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}
