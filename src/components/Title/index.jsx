import React from "react";



export const Title=(props)=>{

    console.log(props);

    return(

        <h1 className="title-mine">{props.greeting} </h1>

    )

}