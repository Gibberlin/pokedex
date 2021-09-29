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
        <form className="form-horizontal">
        ...
        <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
        ...
    </form>
    ...
    <button type="button" onClick={this.onSubmit} className="btn">Save</button>
            <h1>{poke}</h1>
           

        </div>
    )
}

export default Cards
