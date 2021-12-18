import React from 'react';
class ClassComp extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:"",
        };
    }
    show=()=>
    { console.log('hello');
        if(this.state.name==null)
        {
            this.setState({name:'anupam'});
        }
        else{
            this.setState({name:null});
        }
    }
    render(){
        return(
           
            <div>
                <button onClick={this.show}>login</button><br/>
                {this.state.name==null?null:this.state.name}
            </div>
           
        )
        };
}
export default ClassComp;