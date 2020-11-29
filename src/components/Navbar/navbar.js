import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import './navbar.css';
function Navbar(props) {
 
    return (
        <div>
    
    <AppBar position="static">
  <Toolbar>
    <Grid
      justify="space-between" 
      container 
      spacing={24}
    >
      <Grid item>
        <Typography type="title" color="inherit">
        <Link to="/" style={{fontWeight: 'bold'},{color:"white"}}>Logout</Link>
        </Typography>
      </Grid>
      <Grid item>
      
        <Typography type="title" color="inherit">
        <Link to="/posts" style={{fontWeight: 'bold'},{color:"white"}}>Posts</Link>
        </Typography>
        
      </Grid>

      <Grid item>
      <Typography type="title" color="inherit">
      <Link to="/Create" style={{fontWeight: 'bold'},{color:"white"}}>Create</Link> 
        </Typography>
      </Grid>
    </Grid>
  </Toolbar>
</AppBar>
<br />
  </div>
        
    )
  }
  export default Navbar;