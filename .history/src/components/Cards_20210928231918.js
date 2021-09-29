import React from 'react'
import Axios from 'axious'

const getPoke=()=>{
    Axios.get("https://pokeapi.co/api/v2/pokemon/charizard").then((Response)=>{
        console.log(Response);
    })
}




const Cards = () => {
    return (
        <div>
            
        </div>
    )
}

export default Cards
