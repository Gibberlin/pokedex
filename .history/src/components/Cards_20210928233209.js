import React,{useState} from 'react'
import Axios from 'axios'


const getPoke=()=>{
    
    Axios.get("https://pokeapi.co/api/v2/pokemon/charizard").then((Response)=>{
        console.log(Response);
        gPoke(Response.data.name);
    })
}




const Cards = () => {
    const [poke,gPoke]= useState("");
    return (
        <div>
            <button onClick={getPoke}>Get Pokemon</button>
            <br />
            {poke}

        </div>
    )
}

export default Cards
