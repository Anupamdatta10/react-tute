import React, { useState } from 'react';
import '../App.css';
import axios  from 'axios';
export default function  Randuser(){
    
    const [name,setName] = useState("");
    const [img,setimg] = useState("http://s3.amazonaws.com/37assets/svn/765-default-avatar.png");
    const [email,setEmail]=useState("");
    const [loading,setload]=useState(false);
    async function userdisplay()
    {   setload(true);
        var x=await axios.get('https://randomuser.me/api/');
        console.log("hello",x.data.results[0].name.first);
        
        var fullname=x.data.results[0].name.first+" "+x.data.results[0].name.last;
        setName(fullname);
        setimg(x.data.results[0].picture.large);
        setEmail(x.data.results[0].email);
        setload(false);
    }
    return (
        <>
        
       {(loading)?
       <img className="App-logo" src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png"/>:
       <div> 
            <img src={img} className='profileimg'/>
            <div>name {name}</div>
            <div>email {email}</div>
            <button onClick={userdisplay}>generate random user</button>
        </div>
       }
       
       
        </>
    )
}