import React,{useState} from 'react'
import Axios from 'axios'


const getPoke=()=>{
    const [poke,gPoke]= useState("");
    Axios.get("https://pokeapi.co/api/v2/pokemon/charizard").then((Response)=>{
        console.log(Response);
        gPoke(Response.data.name);
    })
}




const Cards = () => {
    return (
        <div>
            <button onClick={getPoke}>Get Pokemon</button>
            <br />
            {poke}

        </div>
    )
}

export default Cards
