import React from 'react';
import '../App.css';
import axios  from 'axios';
class RandUserClass extends React.Component
{
    constructor()
    { console.log("constructer");
        super();
        this.state={
           name:"",
            img:"http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
            email:"",
            loading:true
        };
    }
    componentDidMount()
    {   console.log("componentDidMount");
       this.userdisplay();
    }
    userdisplay= async ()=>
    {  
        console.log("button click");
        this.setState({loading:true});
       var x=await  axios.get('https://randomuser.me/api/')
            console.log("hello",x.data.results[0].name.first);
        
            var fullname=x.data.results[0].name.first+" "+x.data.results[0].name.last;
            this.setState({name:fullname,
                img:x.data.results[0].picture.large,
                email:x.data.results[0].email,
                loading:false
            });
        
       
    }
     render(){
        console.log("render");
        console.log("======",this.state.loading);
        return(
            <>
            {
            (this.state.loading)?
            <img className="App-logo" src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png"/>:
            <div> 
                 <img src={this.state.img} className='profileimg'/>
                 <div>name {this.state.name}</div>
                 <div>email {this.state.email}</div>
                 <button onClick={this.userdisplay}>generate random user</button>
             </div>
            }
            
            
             </>
           
           
        )
        };
}
export default RandUserClass;