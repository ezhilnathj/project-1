import React,{useState}from "react";

function SampleComp(){
const [ticket,setticket] = useState(0);

const handleadd=()=>{


    if(ticket==10){
        return;
    }else
    {
        setticket(ticket+1);
    }


};

return(
    <div>
<h1>GOAT-{ticket}</h1>
<button onClick={handleadd}>Add</button>
    </div>
);
}

export default SampleComp;