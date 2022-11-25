import React,{Component} from "react";

function Addfun(){
    return (<div> add a new function</div>)
}

class CompClass extends Component{


    
    render()
    {
        return(
            <div>
            {Addfun()}
            <Addfun></Addfun>
            <h1>it is class base component</h1>
            </div>
        )
    }
}
export default CompClass; 
