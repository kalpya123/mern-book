import React,{Component} from 'react';
import { TextField  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NavBar from '../Navbar/navbar';
import axios from 'axios';


class Updatepost extends Component {
    constructor (props)
    {
        super(props);

        this.state={
            username:"",
            booktitle:"",
            decription:"",
        }



    }
    NameChangeHandler =(event) =>{
      let name=event.target.value;
   
      this.setState({
        username:name
      })
    }
    BookTitle =(event) =>{
     let booktitle= event.target.value;
   
     this.setState({
      booktitle:booktitle
     })
    }
    description =(event) =>{
      let description = event.target.value;
    
      this.setState({
        decription:description
      })
    }
    componentDidMount() {
       axios.get('http://localhost:5000/Posts/'+this.props.match.params.id)
       .then(res =>{
           this.setState({
            username:res.data.username,
            booktitle:res.data.booktitle,
            decription:res.data.decription     
        })
       })
       .catch((err) =>{
           console.log("err"+err);
       })
    }

    submitHandler =(event) =>{
      event.preventDefault();
  

      const posts = {
        username:this.state.username,
        booktitle: this.state.booktitle,
        decription:this.state.decription
      }
     
      axios.post('http://localhost:5000/Posts/edit/'+this.props.match.params.id,posts)
      .then(res => {
        window.location="/posts";
      })
      .catch(err =>{
        console.log("error" + err);
      })
      this.setState({
        username:"",
        booktitle:"",
        decription:""
      })
    
    }

    render()
    {
        return (
        
           

       <div className="text">
            <NavBar />
            <br/>
           <h1>Update</h1>
           <br />
         <form autoComplete="off" onSubmit={this.submitHandler}>

  <TextField 
  id="outlined-basic" 
  label="Username" variant="outlined" 
  value={this.state.username}
  onChange={this.NameChangeHandler}
  />
  <br />
  <br />
  <TextField id="outlined-basic" 
  label="BookTitle" 
  variant="outlined"
  value={this.state.booktitle}
  onChange={this.BookTitle} />
  <br />
  <br />
  <TextField id="outlined-basic" 
  label="decription" 
  variant="outlined"
  value={this.state.decription}
  onChange={this.description} 
  />
  <br />
  <br />
  <Button
       type="submit"
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>

</form>
       </div>




        )
    }
}
export default Updatepost;