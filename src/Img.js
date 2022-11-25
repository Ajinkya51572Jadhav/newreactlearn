import img from "./img.jfif";
import "./App.css";





const object ={
  color:"red",
border:"1px solid black",
boxShadow: "10px 10px 10px  -10px  rgb(77, 72, 72)"


}



const Img=()=>{
  
  let name="ajinkya";
  let namee="jadhav";
let HD1 = "https://source.unsplash.com/random/200x200?sig=672" ;
  let HD2 = "https://source.unsplash.com/random/200x200?sig=356" ;
  let HD3 = "https://source.unsplash.com/random/200x200?sig=465" ;

  let link= "https://stackoverflow.com/questions/60797390/generate-random-image-by-url";
  let date= new Date().toLocaleDateString
  ();
        return(<div>
        <h5 contentEditable='true'>this is render method {name+""+namee}          {9849+847843}</h5>
  <p>{date}</p>
  
 
  
  
    <img  style={object}src={img}></img>
  
  <div className="aj"> 
  <a href={link} target="">
  <img src="https://source.unsplash.com/random/200x200?sig=1" alt="redom img" />
  </a>  
  
          <img src={HD1}></img>
          <img src={HD2}></img>
          <img  src={HD3}></img>

          </div>



  </div>
        )
}
export default Img;         

