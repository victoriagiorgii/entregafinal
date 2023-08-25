import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from "./components/context/CartContext";
import {Carrito} from "./components/Carrito/Carrito";

 export function App() {
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