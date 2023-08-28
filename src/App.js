import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from "./components/context/CartContext";
import {Carrito} from "./components/Carrito/Carrito";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from 'react';


 export function App() {
  const [productos, setProduto] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const productoCollection = collection(db, "productos");

    const q = query(productoCollection);

    getDocs(q).then((snapshot) => {
      console.log("entra al then");
      if (snapshot.size > 0) {
        const producto = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        console.log(producto);
        setProduto(producto);
      }
    })

  }, [])

  if (!productos) {
    return <div>loading...</div>;
  }
 return (
  
  <div>
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId'element={<ItemListContainer/>}/>
        <Route path='/item/:id'element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </div>
 );
}