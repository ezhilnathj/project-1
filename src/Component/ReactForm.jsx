import React, { useState } from 'react'

export default function ReactForm() {

const [name, setname]=useState("")
const [email, setemail]=useState("")

const handlename=(event)=>{
    
setname(event.target.value);

}


const handleemail=(event)=>{
    
  setemail(event.target.value);
  
  }


  return (
   

  <div>
          
  <label>Enter Name</label>
  <input onChange={handlename} placeholder='Name'/>
  
  <br>
  </br>
  <br></br>
  
    
  <label>Enter Email</label>
  <input onChange={handleemail}placeholder='email'/>
  <br>
  
  </br>
  <br></br>
  <button>Submit</button>

  <div>
    <h2>Name-{name}</h2>
    <h2>Email-{email}</h2>
  </div>
  
  </div>


    
  )
}
