import React, { useEffect, useState } from 'react'

export default function LifeCycle() {

  const [count,setcount]=useState(0)
  
  useEffect(()=>{

    console.log("Ezhil");
    

  },[])

  const handleadd=()=>{

    setcount(count+1)
  }

  return (


    <div> 

<button onClick={handleadd} >Add</button>

      <h1>Nothing-{count}</h1>

    </div>

  )
  
}