import React from "react";
import { useState } from "react";
import { Button } from "bootstrap";

   const TextArea=()=>{
    const [Text, setText] = useState("this is a paragraph")
    const [buttontext,EditButtonText]=useState("Edit")
    const[edit,EditContent]=useState(false)

    const EditClick=()=>{
        EditButtonText("Save")
        EditContent(true)
            
      };
    const SaveValue=()=>{
      
         EditContent(false) 
        EditButtonText("Edit")
      
      }
     
     return(
      
      <div>
        <div style={{width:"20%",paddingLeft:"20px",height:"40%",marginLeft:"20%",border:"1px solid LightGrey",borderRadius:"15px"}} contentEditable={edit}>
        
        <p>A company’s culture is the character and personality of an organization. It refers to how people interact, collaborate, and get along within the workplace. Though it may sound somewhat ambiguous, a positive culture is extremely important for many reasons. </p></div>
       {buttontext==="Edit"?( <button style={{fontSize:"20px",color:"white",marginLeft:"350px",marginTop:"20px",backgroundColor:"blue",borderRadius:"10px",height:"50px",width:"150px"}} onClick={()=>EditClick()} >{buttontext}</button>):
       (<button style={{fontSize:"20px",color:"white",marginLeft:"350px",marginTop:"20px",backgroundColor:"Green",borderRadius:"10px",height:"50px",width:"150px"}} onClick={()=>SaveValue()}>{buttontext}</button>)}
        </div>
      );
   }
    
export  default TextArea;