import React from "react";

function Addlist({setlist}){
   function handleSubmit(event){
    event.preventDefault();
    const name=event.target.elements.name.value
    const profession=event.target.elements.profession.value
    const newlist={name,profession}
     setlist((prevlist)=>{
      return prevlist.concat(newlist);
     })
   }
    return(
       <div className="addlist">
         <form onSubmit={handleSubmit}>
           <input type="text" name="name" placeholder="Enter your name"/>
           <input type="text" name="profession" placeholder="Enter your profession"/>
           <button type="submit">Addlist</button>
         </form>
       </div> 
    )
}
export default Addlist;