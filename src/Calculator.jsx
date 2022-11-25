import React from "react";

function Calculator(){
    let  a =2,b =2;
    function sum(x,y){

       
        let add=a+b;
        return add;
    }   

    function multi(){

        let add=a*b;
        return add;
    }   

    function divide(){

        let add=a/b;
        return add;
    }   

    function minus(){

        let add=a-b;
        return add;
    }   





    
return (
<div>
<ol>
<li>{sum(10,10)}</li>
<li>{multi()}</li>
<li>{divide()}</li>
<li>{minus()}</li>
</ol>

</div>

)

}
export default Calculator;