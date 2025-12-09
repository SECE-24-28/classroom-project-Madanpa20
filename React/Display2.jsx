/*import { useState } from "react"

const Display2=()=>{
    const [name,setName]=useState()
    console.log("the data is....: ",name)
    return(
        <>
        <h1>im from Display2 {name}</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </>
    )*/
  
   /* return(
        <>
        <h1>im from Display2 {name}</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
         
         <button onClick={()=>{setName("")}}> clear</button>
        </>
    )
}*/
import { useRef, useState } from "react"

 

 

const Display2=()=>{
    const [name,setName]=useState("")
    const input=useRef()
    const view=()=>{
        console.log("the data is: ",input.current.value)
        setName(input.current.value)
    }
      return(
        <>
        <h1>im from dis3 {name}</h1>
        
        <input type="text" ref={input}></input>
        <button onClick={view}>click</button>
        </>
          )
}



export default Display2