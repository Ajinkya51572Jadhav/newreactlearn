// import React from "react";
import React,{Component} from "react";

         function NewLearn(){




  return (
        <div>
        <h1>newlearn</h1>
        {Addfun()}
        <CompClass/>
        </div>
    )
}


class CompClass extends Component{
    render()
    {
        return(
            <div>
            <h1>it is class base component</h1>
            </div>
        )
    }
}
export default NewLearn;