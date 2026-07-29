import { useState } from "react";

function Form(){
    const [city,setCity]=useState("");
    return (
        <div>
            <input 
            placeholder="Enter the City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            <h1>City : {city} </h1>
        </div>
    );
}

export default Form;