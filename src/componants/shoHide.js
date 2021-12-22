import React from 'react';
import Randuser from './randomuser';
class ClassComp extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:"anupam",
            show:true
        };
    }
    show=()=>
    { console.log('hello');
        if(this.state.show==true)
        {
            this.setState({show:false});
        }
        else{
            this.setState({show:true});
        }
    }
    render(){
        return(
           
            <div>
                <button onClick={this.show}>login</button><br/>
                {this.state.show==false?null:<Randuser/>}
            </div>
           
        )
        };
}
export default ClassComp;