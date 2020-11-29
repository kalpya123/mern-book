
import './App.css';
import SignUp  from '../src/components/Signup/Signup';
import Signin from '../src/components/Signin/Signin';
import Create from '../src/components/Create/Create';
import Nav from '../src/components/Navbar/navbar';
import Post from '../src/components/posts/posts';
import Updateposts from '../src/components/Update/updateposts'; 

import {BrowserRouter as Router,Route} from "react-router-dom";
function App() {
  return (
    <div>
     
       
      <Router>
      <Route path="/" exact component={Signin}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/homepage"  component={Nav} />
      <Route path='/Create' component={Create} />
      <Route path ="/posts" component={Post} />
      <Route path ="/edit/:id"  component={Updateposts} />
      <Route path ="/logout"  component={Signin} />
      </Router>      
    </div>
  );
}

export default App;
