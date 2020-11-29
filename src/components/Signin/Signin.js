import React,{Component} from 'react';
import './signin.css';
import { Button } from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Signin extends Component{


constructor(props) {
    super(props);

        this.state={
            isloged:true,
            username:"",
            password:""
        }
    

    }
submitHandler =(event) =>{
    event.preventDefault();
    const signin ={
        username:this.state.username,
        password:this.state.password,
    }
  
    
axios.post("http://localhost:5000/Signup/login",signin).then(res =>{
    console.log("Sign in done",res.data);
    window.location='/homepage';
}).catch(err =>{
    console.log("err"+err);
    this.setState({
        isloged:false
    })
    
    
})
this.setState({
    username:"",
    password:""
})




}
NameChangeHandler =(event) =>{
let name=event.target.value;
this.setState({username:name})

}

PasswordChangeHandler =(event) =>{
    let pass= event.target.value;
    this.setState({password:pass})
}

render(){
    let login = this.state.isloged;
    let error;
   
    if(!login)
    {
      error="username and password is incorrect";
    }
      
    return(
     <div className="container">
      <h1>Sign in</h1>
      <br />
     <form autoComplete="off" onSubmit={this.submitHandler}>
    <h5 className="label"><AccountCircleIcon  style={{ fontSize: 22 }}/> Username</h5>
         <input type="text"
         required
         className="inputs"
         placeholder="username must be here" 
         name="username"
         onChange={this.NameChangeHandler}
         >

         </input>
        
         <br />
         <br />
         <p className="label">Password</p>
         <input type="password" 
         required
         placeholder="password must be here"
         name="password"
         className="inputs"
         onChange={this.PasswordChangeHandler}
         >

         </input>
         
         
        <br />
        <br />

          <div className="error"> 
          {error}
        </div>
        < br />
     <Button type="submit" variant="contained" color="primary" startIcon={<ExitToAppIcon />}>SignIn</Button>
        
         </form>    
         <br /> 
      <Link to="/signup"><Button  variant="contained" color="primary">SignUp</Button></Link> 
         <br />
             
     </div>
    

    )
}
}
export default Signin;