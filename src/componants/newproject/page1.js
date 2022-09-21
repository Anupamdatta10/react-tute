import React, { Component } from 'react'
import axios  from 'axios';
export default class Users extends Component {
    constructor(props){
        super(props)
        console.log("from constractor");
        this.state={
            data:[],
            loader:false
        }
    }
    componentDidMount(){
        console.log("from componant did mount")
        this.userData(5);
    }

    userData= async(id)=>{
        this.setState({loader:true})
        let responce = await axios.get("https://randomuser.me/api/?results="+id)
        console.log(responce);
        this.setState({data:responce.data.results},()=>{
            console.log("=============>>>",this.state.data);
            this.setState({loader:false})
        })
    }

    handelclick=(id)=>{
        this.userData(id)
    }
  render() {
    return (
      <div>
        <table style={{border:"2px solid black",margin:"auto"}}>
        <tr>
            <th style={{border:"2px solid black"}}>gender</th>
            <th style={{border:"2px solid black"}}>name</th>
            <th style={{border:"2px solid black"}}>email</th>
            <th style={{border:"2px solid black"}}>image</th>
        </tr>
        {this.state.data.map((e)=>{
        return(<tr>
            <td style={{border:"2px solid black"}}>{e.gender}</td>
            <td style={{border:"2px solid black"}}>{e.name.first } {e.name.last}</td>
            <td style={{border:"2px solid black"}}>{e.email}</td>
            <td style={{border:"2px solid black"}}><img src={e.picture.large}/></td>
            </tr>)
        
        })}</table><button onClick={()=>{this.handelclick(10)}}>10</button>
        <button onClick={()=>{this.handelclick(20)}}>20</button>
        <button onClick={()=>{this.handelclick(30)}}>30</button>
        </div>
        
    )
  }
}
