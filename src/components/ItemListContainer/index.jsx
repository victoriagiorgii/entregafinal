import React, { useEffect, useState } from "react";
import {ItemList} from '../ItemList/index';
import { Title } from "../Title/index";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


export const ItemListContainer=()=>{
    const [productos, setProduto] = useState([]);
    const { categoriaId } = useParams();
 useEffect(() => {
  const db = getFirestore();
  const productoCollection = collection(db, "productos");
  const q = categoriaId ? query(productoCollection, where("categoria", "==", categoriaId)) : productoCollection;
  
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

 }, [categoriaId])

 if (!productos) {

  return <div>loading...</div>;

 }

    return(
        <div>
            <Title greeting='Bienvenidos a GIACCE!!'/>
            <ItemList productos={productos}/>
            
        </div>

    ) 
    
}


