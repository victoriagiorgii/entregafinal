import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../mock/data"
import {ItemDetail} from "../ItemDetail/ItemDetail"

export const ItemDetailContainer=()=>{
    const [producto,setProductos]= useState({})
    const { id }= useParams()

    useEffect(()=>{
      getItem(id)
      .then((res)=> setProductos(res))
      .catch((error)=> setProductos(error))
    },[id])
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}