
import React from "react";
import Sign_up from "./signup";
import Login from "./login"
class dashboard  extends React.Component{
    constructor() {
        console.log("constructer");
        super();
        this.state = {
         login:true
        };
        
      }
      loginOrSignup=(e)=>
      {
          this.setState({login:e});
      }
      render() {
          return(
              <>
              {this.state.login?<Login/>:<Sign_up/>}
              </>
          )
      }

}

export default dashboard;