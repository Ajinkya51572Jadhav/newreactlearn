
//  <Copy  imgsrc={APIarray[0].imgsrc}
//  link={APIarray[0].link}
//  sname ={APIarray[0].sname}
//  title={APIarray[0].title}/>


      // {<Copy  imgsrc={APIarray[1].imgsrc}
      // link={APIarray[1].link}
      // sname ={APIarray[1].sname}
      //  title={APIarray[1].title}/>


      //  <Copy  imgsrc={APIarray[2].imgsrc}
      //  link={APIarray[2].link}
      //  sname ={APIarray[2].sname}
      // title={APIarray[2].title}/>}






import React from "react";
import APIarray from "./APIarray";
import "./App.css";


function NetFlix (){
  console.log(APIarray[0].sname);
   function Copy (props){
    // console.log(props);
  return(
    <div className="cards">
    <div className="card">
    <img src={props.imgsrc} alt="image" className="Card_img"></img>
    <div className="card_info">
    <span className="Card_category" >{props.title}</span>
    <h3 className="Card_title">{props.sname}</h3>
    <a href={props.link} target="_blank">
    <button> WATCH NOW</button>

    </a>
    </div>
    </div>
     </div>
  );

    }



// function short (val,index,array){
// return(

//   <Copy key={val.id}
//   imgsrc={val.imgsrc}
//   link={val.link}
//   sname ={val.sname}
//   title={val.title}/>
// )
// }












return (
 <div>

        
        {APIarray.map(   function img(val,index,array){
          return(
          <Copy key={val.id}
             imgsrc={val.imgsrc}
             link={val.link}
             sname ={val.sname}
             title={val.title}/>
          )
            })} 



</div>
)

}
export default NetFlix;