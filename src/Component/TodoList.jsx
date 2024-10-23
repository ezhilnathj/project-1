import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"

export default function TodoList() {

  const[data,setdata]=useState([])

  const[inputdata,setinputdata]=useState("")


    const handlefetch= async()=>{

        let res = await axios.get("http://localhost:3000/todoList")

setdata(res.data)        
    }


    useEffect(()=>{
        handlefetch()
    },[])

    const handleinput=(e)=>{
      setinputdata(e.target.value)
      
    }

    const handlesend= async()=>{
      let body={
        task : inputdata
    
      }
      let res=await axios.post("http://localhost:3000/todoList",body)
// alert("succes")
handlefetch()
    }

    const handledelete =async(id)=>{
      console.log(id);

      let res = await axios.delete(`http://localhost:3000/todoList/${id}`)

      // alert("successfully  delete")
      handlefetch()
      
    }

    const handleedit=async(i)=>{
console.log(data[i]);

let newdata=prompt("Edit the task",data[i].task)

let body={
  id : data[i].id,
  task : newdata,
}

let res = await axios.put(`http://localhost:3000/todoList/${data[i].id}`,body)
handlefetch()

    }

  return (

  
    <div className='m-3'>

        <h1>Todo List</h1>
        <input onChange={handleinput} placeholder='Enter Todo List'/>
        <button onClick={handlesend} className='btn btn-primary ms-3'>Add</button>

{data.map((da,i)=>(
<div className='d-flex mt-5' key={i}>
<h1>{i+1}.{da.task}</h1>

<span onClick={()=>handleedit(i)}className='ms-5'><FaUserEdit /></span>
<span onClick={()=>handledelete(da.id)}className='ms-5'><MdDeleteOutline /></span>


  </div>

))}
    </div>
  )
}
