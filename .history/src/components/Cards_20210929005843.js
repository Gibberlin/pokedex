import React,{useState} from 'react'
import Axios from 'axios'


const Cards = () => {
    const [poke,gPoke]= useState("");
    const [sp,setSp]=useState("")
    const [query,setQuery]=useState("");
    const getPoke=()=>{
    
        Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then((Response)=>{
            console.log(Response);
         
                gPoke(Response.data.results);
            
           
            
        })
    }
    
    return (
        <div className="card">
            <input type="text" 
            placeholder="Enter the name of the pokemon"
            onChange={setQuery(query)}
            value={InputEvent}/>
            <br />
            <h1>{poke}</h1>
           

        </div>
    )
}

export default Cards
