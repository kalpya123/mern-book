import React,{Component} from 'react';
import './signup.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

import {Link} from 'react-router-dom';
class Signup extends Component{


constructor(props) {
    super(props);

        this.state={
            username:"",
            email:"",
            password:""
        }
    

    }
submitHandler =(event) =>{
    event.preventDefault();
   const signup ={
    username:this.state.username,
    email:this.state.email,
    password:this.state.password
}

 
axios.post('http://localhost:5000/Signup/add',signup).then(res =>{
    console.log(res.data)
    window.location = '/';
   
});
this.setState({
    username:"",
    email:"",
    password:""
})

}


NameChangeHandler =(event) =>{
let name=event.target.value;
this.setState({username:name})

}
EmailChangeHandler =(event) =>{
    let mail= event.target.value;
    this.setState({email:mail})
}

PasswordChangeHandler =(event) =>{
    let pass= event.target.value;
    this.setState({password:pass})
}
render(){


    
    return(

<div className="container">
          <h1>Sign Up</h1>
     <form autoComplete="off" onSubmit={this.submitHandler}>
     <p className="label">Username</p>
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
         <p className="label">Email</p>
         <input type="email" 
         required
         placeholder="email must be here"
         name="email" 
         className="inputs"
         onChange={this.EmailChangeHandler}
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


     <Button type="submit" variant="contained" color="primary">SignUp</Button>
        
         </form>    
         <br />
        <Link to="/"><Button type="submit" variant="contained" color="primary">Sign in</Button> </Link>
     </div>

    )
}
}
export default Signup;