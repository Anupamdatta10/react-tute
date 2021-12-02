import react from "react";
import React, { useState } from 'react';
import Listitem from "./listItem";
function Todo() {
    const [name,setName] = useState(" ");
    const [arr,setArr] = useState([{id:1,name:"Nirveek"}]);
    function addname()
    {
        console.log(name)
        var hash={}
       if(arr.length==0)
       {
           hash["id"]=0
       }
       else
       {
        hash["id"]=arr[arr.length-1].id+1;
       }
        hash["name"]=name;
        setArr(...arr,hash);
        console.log(arr);
    }
    // var arr = [{ id: 1, name: "nirveek naskar" },
    // { id: 2, name: "sourav mondal" },
    // { id: 3, name: "anupam datta" },
    // ]
    return (
        <>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={addname}>addname</button>
            <div>{
                arr.map((user) => (
                    <Listitem name={user} key={user.id} />
                ))
            }

            </div>
        </>
    )
}
export default Todo;