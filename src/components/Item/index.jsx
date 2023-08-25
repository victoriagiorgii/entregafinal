import React from 'react';
import './item.css';
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export const Item=({producto})=>{
   return (
    <div>
        <Card className='card-mine' style={{ width: '18rem' }}>
       <Card.Img variant="top" src={producto.img} />
       <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card>
          {producto.descripcion}
        </Card>
        <Card>
            ${producto.precio}
        </Card>
        <Card>
          Stock  {producto.stock}
        </Card>
        <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    </div>
   )
}
