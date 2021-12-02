import React, { useState } from 'react';


function Textutils()
{ 
    const [data,setText]=useState("");
    const [result,setResult]=useState("");
    function wordcount()
    {
        var word=data.split(" ");
        console.log(word)
        setResult("word count= "+word.length);
    }
    function vowelcount()
    {
        const count = data.match(/[aeiou]/gi).length;
        setResult("vowels = " + count);
    }
    return(
        <>
        <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
       <div> 
           <button onClick={wordcount}>word count</button>
       <button onClick={()=>{setResult("Uppercase = "+ data.toUpperCase())}}>upprcase</button>
       <button onClick={()=>{setResult("lowercase = "+ data.toLowerCase())}}>lowercase</button>
       <button onClick={vowelcount} >vowelcount</button>

       </div>
        <div className="mt-5">user value={data}        
        </div>
        <div>{result}</div>
        </>
    )
}
export default  Textutils;