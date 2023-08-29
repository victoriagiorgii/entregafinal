import React, { useEffect, useState } from "react";
import {ItemList} from '../ItemList/index';
import { Title } from "../Title/index";
import { useParams } from "react-router-dom";
import { getProductos, getProductosCategoria } from "../../mock/data";


export const ItemListContainer=()=>{
    const [productos, setProductos]= useState([])
    const{categoriaId}= useParams()
       
    useEffect(()=>{
        if (categoriaId) {

            getProductosCategoria(categoriaId).then ((res)=> setProductos(res))
            }
            else {
            
            getProductos().then ((res)=>setProductos(res))
            }
    },[categoriaId])



    return(
        <div>
            <Title greeting='Bienvenidos a GIACCE!!'/>
            <ItemList productos={productos}/>
            
        </div>

    ) 
    
}


