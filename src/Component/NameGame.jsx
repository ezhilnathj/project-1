import React, { useState } from 'react'

export default function NameGame() {

const [name, setname]=useState("Sasuke")

const handlename=()=>{
    // setname("Naruto")

    if(name=="Sasuke"){
        setname("Naruto")
    }

    if(name=="Naruto"){

        setname("Sasuke")
    }
}
  return (
   <div>

    <h1>{name}</h1>

<button onClick={handlename}>change</button>

    </div>
  )
}
