import React,{useState} from 'react'
import Axios from 'axios'


 
const Cards = () => {
    const [poke,gPoke]= useState("");
    const [sp,setSp]=useState("")
    const [query,setQuery]=useState(false);
    const getPoke=()=>{
    
        Axios.get("https://pokeapi.co/api/v2/pokemon/"+query).then((Response)=>{
            console.log(Response);
         
                gPoke(Response.data.name);
                setSp(Response.data.sprites.front_default);
           
            
        })
    }
    function search(){





    }
    function ser(val){
        console.log(val.target.value);
        setQuery(val.target.value)
    }
    
    
    return (
        <div className="card">
      
            <h1>{poke}</h1>
            <img src={sp} alt="none"/>
            <button onClick={()=>getPoke()}>click here</button>
            <div>
            <input type="text" onChange={ser} placeholder="Enter a pokemon" />
            <button onClick={search}>search</button>
            </div>

        </div>
    )
}

export default Cards
