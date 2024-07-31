import React, { useState } from "react";
import Addlist from "./Addlist";
  
function Crud(){
    const Initiallist=[
        {
            id:1,
            name:"merai",
            profession:"developer"
        },
        {
            id:2,
            name:"meraisha",
            profession:"worker"
        },
        {
            id:3,
            name:"riya",
            profession:"student"
        },

    ]  
       const [list,setList]=useState(Initiallist)
       const [update,setupdate]=useState(null)

       const store=list.map((current,i)=>{
              return(
                <div className="main-card">
                <div className="card">
                     <p key={i}>
                       <p>{i+1}</p>
                       <p>
                        {
                              update===current.id ? <input defaultValue={current.name} 
                              onChange={(e)=>current.name=e.target.value}/>:current.name 
                        }
                       </p>
                       <p>
                        {
                             update===current.id ? <input defaultValue={current.profession} 
                             onChange={(e)=>current.profession=e.target.value}/>:current.profession 
                        }
                       </p>
                       <p>
                        {
                             update===current.id ? <button onClick={()=>saveupdate()}>saveupdate</button>:
                             <button onClick={()=>handleEdit(current.id)} >Edit</button>
                        }
                       </p>
                       <p>
                       <button onClick={()=>handleDelete(current.id)}>Delete</button>
                       </p>

                     </p> 
                </div>
                </div>
              )
       })
       function handleEdit(id){
        setupdate(id)
       }
       function handleDelete(id){
           const newlist=list.filter((li)=>li.id!==id);
         setList(newlist);
       }
       function saveupdate(){
          setupdate(null) 
       }
       
    return(
        <div>
             <Addlist setlist={setList}/>
              <p>{store}</p>
        </div>
    );
}
export default Crud;