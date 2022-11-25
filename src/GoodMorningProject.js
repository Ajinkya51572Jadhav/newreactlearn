import React from "react";

function  GoodMornindgProject(){

let date = new Date().getHours();
let good= " ";
   let cssStyle={ };

if(date>=1&&date<=12){
good="good morning";
cssStyle.color="red";
}else if(date>=12&&date<=17){
good="good after noon";
cssStyle.color="yellow";
}else if(date>=17&&date<=24){
    good="good evening";
    cssStyle.color="aqua";
}else{
    document.write("invailed time");
}





    return (
    <div>
    <span>hello sir, <span  style={cssStyle}>{good}</span></span>
    </div>
)
}
export default GoodMornindgProject;