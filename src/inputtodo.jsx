import { useState } from "react";

const Inputtodo=()=>{
   let [inputs,setinputs]=useState("")
   let [listinput,setlistinput]=useState([])

    
    let handalInput = (event)=>{
     setinputs(event.target.value);
    
    }
    

  let handalSubmit=()=>{
   setlistinput([...listinput , inputs ])
   console.log(listinput)
    
  }
    return (
        <div>
          <input onChange={handalInput} type="text" />
          <button onClick={handalSubmit} >Submit</button>
        </div>
    )
}
export default Inputtodo;