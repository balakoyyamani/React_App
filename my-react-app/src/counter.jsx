import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)

    function increase(){
        setCount((prev)=>prev+1);
    }
    function decrease(){
        setCount((prev)=>prev-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
            <h2>Counter App⏲️</h2>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;