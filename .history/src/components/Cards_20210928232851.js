import React,{useState} from 'react'
import Axios from 'axios'
const [poke,Poke]= useState("");
const getPoke=()=>{
    Axios.get("https://pokeapi.co/api/v2/pokemon/charizard").then((Response)=>{
        console.log(Response);
        Poke(Response.data.name);
    })
}




const Cards = () => {
    return (
        <div>
            <button onClick={getPoke}>Get Pokemon</button>
        </div>
    )
}

export default Cards
