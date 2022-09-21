import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Fees() {
    let[list,setList]=useState([])
    let [payment,setpayment]=useState([])
    useEffect(async()=>{

        let data=await axios.get("https://script.google.com/macros/s/AKfycbzhoJnCwGExcNqDSa6ygDRfBK3mpBfi4cbfGthliPN3CKfrjTNJDzgQRA7CiAgvSNM5/exec")
        console.log("loading",data.data)
        setList(data.data)
    },[])
  return (
    <>
  <div>Fees</div>
    <table>
    <tr>
        <th>name</th>
        {list.length>0?list[0].hasOwnProperty('payment')? list[0].payment.map((value,index)=>{
        return(
            <th>{Object.keys(value)[0]}</th>
        )
    }):null:null}
    </tr>
    {list.length>0?list.map((value,index)=>{
        return(
            <tr><td>{value.name}</td>
            {/* {value.havalue.payment.map((p)=>{
                return(
                    <td>{p}</td>
                )
            })} */}
            </tr>
        )
    }):null}
   
    </table>
    </>
  
    
  )
}
