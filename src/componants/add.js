
import React, { useState } from 'react';
export default function Add(){
// const [z,setz]=useState(0)
// const [x, setx] = useState(0);
// const [y, sety] = useState(0);

function getdata(e){
    console.log(e.target.value)
}
// function fun()
// {  

//    setz(x+y);
// }
    return(
    <div>
        <div></div>
        <input type="text" onChange={(e)=>{ getdata(e)}}/>
        <input type="text" onChange={(e)=>{ }}/>
        <button>add</button>
    </div>
    )
}