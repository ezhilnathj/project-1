import React,{useState}from "react";


function SampleTwo(){
  const [ticket,setticket] = useState(0);

const handleoperation=(Math)=>{

  if(Math=="Add"){
    setticket(ticket+1);

  }
if(Math=="Sub"){

  setticket(ticket-1)
}

if(Math=="Reset"){
  setticket(0)
}

}

return(
    <div>
<h1>GOAT-{ticket}</h1>
<button onClick={()=>handleoperation("Add")}>Add</button>
<button onClick={()=>handleoperation("Sub")}>Sub</button>
<button onClick={()=>handleoperation("Reset")}>Reset</button>


    </div>
);
}

export default SampleTwo;