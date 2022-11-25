import axios from "axios";
import React, { useEffect, useState }  from "react";
import "./App.css";
const Login=()=>{

//     const[data,setdata]=useState([]);
//     useEffect(()=>{
// fetch("https://shivam-todo-server-production.up.railway.app/test").then((result)=>{
//     result.json().then((response)=>{
// console.log("result",response);
// setdata(response);
//     })

// })
//     },[]);
// console.log(data);


//axios api data call 
// http://localhost:3000/posts
//using promices 

// const [mydata,setmydata]=useState([]);

// useEffect(()=>{
// axios.post("https://shivam-todo-server-production.up.railway.app/login-user").then((result)=>{
// console.log(result.data);
// setmydata(result.data);
// })
// },[]);

 // <h3>Axios and json fake data</h3>

//  {mydata.map((elem)=>{
//     const {id,name,email}=elem;
//     return <div className="style_color" key={id}>
//     <p>{id}</p>
//     <p>{name}</p>
//     <p>{email}</p>
    
    
//     </div>
    
    
    // })}




    return(
        <div>
       

  

<div className="form">   

<h2>login here</h2>
<h3>email</h3><input type="email" name="email" placeholader="Enter Email"/>
<h3>password</h3><input type="password" name="password"  placeholader="Enter a password"/>
<button className="btnn"><a href="#">login</a></button>

<p className="link">don't have an account</p><br/>
<p className="log">login in with </p>


</div>






</div>

    )
}
export default Login;






