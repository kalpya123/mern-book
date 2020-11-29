import React,{Component} from 'react';
import Navbar from '../Navbar/navbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishIcon from '@material-ui/icons/Publish';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './posts.css';
const Allpostshere = props =>(
  <div className="grid">
    <br />


  <Card className="post">
  <CardContent>
    <Typography color="textSecondary" gutterBottom>
    username
    </Typography>
    <Typography variant="h5" component="h2">
    {props.posts.username}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    booktitle
    </Typography>
    <Typography variant="h5" component="h2">
    {props.posts.booktitle}
    </Typography>
    <Typography color="textSecondary">
    Decription
    </Typography>
    <Typography variant="body2" component="p">
      <br />
      {props.posts.decription}
    </Typography>
  </CardContent>
  <CardActions>
  <Button
    variant="contained"
    color="secondary"
    startIcon={<DeleteIcon />}
    onClick={() =>{props.deletepost(props.deletepost(props.posts._id))}}
  >
    Delete
  </Button>
  <br />
  <Link to={"/edit/"+props.posts._id}>
  <Button 
  variant="contained" 
  color="primary" 
  startIcon={<PublishIcon />}
>
Update  
</Button>
</Link>
  </CardActions>

</Card>

</div>

)


class Posts extends Component {
    constructor (props)
    {
        super(props);
   this.state ={posts:[]}
       
    }

    componentDidMount(){
      axios.get('http://localhost:5000/Posts/getposts')
      .then(res =>{
        this.setState({posts:res.data})
       
      })
      .catch(err =>{
        console.log(err);
      })
     
    }

    displayPosts= () =>{
     return this.state.posts.map(allposts =>{
       return <Allpostshere posts={allposts} deletepost={this.deletepost} key={allposts._id}/>
     })
  
    }
    deletepost =(id) =>{
      console.log("here is id" + id)
      axios.delete('http://localhost:5000/Posts/delete/'+id)
     .then(res =>{console.log(res.data)
     window.location="/posts";
    });
     this.setState({
       posts: this.state.posts.filter(el => el._id !== id)
     })
    }


    render()
    {
        return (
     
       <div className="test">
           <Navbar />
           <br />
           <h1> your posts</h1> 
           <br />
           

    
        <div className="blog">
          {this.displayPosts()}
          </div>
      
           </div>
          
        )
    }
}
export default Posts;