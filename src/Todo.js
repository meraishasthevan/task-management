import React, { useState } from "react";


export const Todo=()=>{

    const[productName,setName]=useState("")
    const[productPrice,setPrice]=useState(0)
    const[product,setProduct]=useState([])
    const[index,setIndex]=useState([])
    const[isFill,setFill]=useState(false)
    const[isEdit,setEdit]=useState(false)
    const[show,setShow]=useState(false)


    const handleInput=(e)=>{
       if(e.target.name==="pName"){
          console.log(e.target.value)
          setName(e.target.value)
       }
       else if(e.target.name==="pPrice"){
        console.log(e.target.value)
         setPrice(e.target.value)
       }
       else{
        console.log(e.target.value)

       }
    }

    const click=(e)=>{
        e.preventDefault();
      if(productName===""||productPrice===""){
        setFill(true)
      }
      else if(isEdit){
        let obj={productName,productPrice}
        let check=product.map((val,i)=>{
            return index===i ? obj:val
        })
        setProduct(check)
        setEdit(false);
      }
      else{
        console.log(productName,productPrice)
        let obj={productName,productPrice}
        console.log(obj);
         
        setProduct([...product,obj]);
        setName("");
        setPrice("");
        setFill(false);
      }
    }

    const editbtn=(val,i)=>{
         setName(val.productName)
         setPrice(val.productPrice)
         setEdit(true)
         setIndex(i)
    }

    const delbtn=(i)=>{
        const x=product.filter((e,index)=>{
          return i!==index 
        })
        setProduct(x)
    }
    const showform=()=>{
        setShow(true)
    }
    return(
        <div>
          <button onClick={showform}>mee</button>
          {
            show?
          
           <form>
              <div>
                <label>Product Name:</label>
                <input type="text" name="pName" value={productName} onChange={handleInput}/>
                {isFill&&productName==="" ?  <p style={{color:"red"}}>Enter product name</p>:""}
              </div>
              <div>
                <label>Product Price:</label>
                <input type="number" name="pPrice" value={productPrice} onChange={handleInput}/>
                {isFill&&productPrice==="" ?  <p style={{color:"red"}}>Enter product name</p>:""}
              </div>
              <button onClick={click}>submit</button>
           </form>:""
            }



           
       
           <div style={{display:"flex",flexWrap:"wrap", gap:"10px", justifyContent:"space-around"}}>
              {product.map((val,i)=>{
                  return(
                    <div key={i} style={{width:"25%",padding:"10px",backgroundColor:"pink",margin:"10px",boxSizing:"border-box"}}>
                      
                          <h2>{val.productName}</h2>
                          <h4>{val.productPrice}</h4>
                          <button onClick={()=>editbtn(val,i)}>Edit</button>
                          <button onClick={()=>delbtn(i)}>Delete</button>
                      
                    </div>
                  )
                    
                  
              })

              }
           </div>




        </div>

    )
}