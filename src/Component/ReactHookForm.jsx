import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactHookForm() {

    const { register, handleSubmit, formState: { error },} = useForm()

    const handleform = (data) => {

            console.log(data);
        }

console.log(error,"errors");

  return (

        <div>
            <h1>ReactHookForm</h1>

            <label>Enter Name</label>
            <input{...register("Firstname", { required: "firstname is required" })} placeholder='name'></input>

<p>{error?.firstname?.message}</p>
            <br></br>
            <br></br>
            
            <label>Enter Email</label>
            <input {...register("Email")} placeholder='email'></input>

            <br></br>
            < br></br>

            <button onClick={handleSubmit(handleform)}>Submit</button>

        </div>
    )
}
