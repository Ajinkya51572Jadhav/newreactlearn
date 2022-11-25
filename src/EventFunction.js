import React from "react";
const EventFunction=()=>{
    
    function Event(){
        console.log("hii ajinkya");
        alert("hi ");
    }
    
    return(
        <div>
        <button onClick={Event}>click</button>
        <h2>event function</h2>
        </div>
    )
}
export default EventFunction;