import React,{useState} from 'react'
import Axios from 'axios'


 
const Cards = () => {
    const [poke,gPoke]= useState("");
    const [sp,setSp]=useState("")
    const [query,setQuery]=useState("");
    const getPoke=()=>{
    
        Axios.get("https://pokeapi.co/api/v2/pokemon/geodude").then((Response)=>{
            console.log(Response);
         
                // gPoke(Response.data.);
            
           
            
        })
    }
    
    
    return (
        <div className="card">
      
            <h1>{poke}</h1>
            <button onClick={getPoke()}>click here</button>

        </div>
    )
}

export default Cards
