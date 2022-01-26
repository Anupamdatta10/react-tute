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
       var x=await  axios.get('api/v1/to_do/users/list')
            console.log("hello=====>",x);
        
            var fullname=x.data[0].f_name;
            var img=x.data[0].profile_picture_type+","+x.data[0].profile_picture
            this.setState({name:fullname,
                email:x.data[0].email,
                img:img,
                loading:false
            });
        
       
    }
     render(){
        console.log("render");
        console.log("======",this.state.img);
        return(
            <>
            {
            (this.state.loading)?
            <img className="App-logo" src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png"/>:
            <div className="App-header"> 
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