import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import CreatePost from './CreatePost/CreatePost'
import ViewPost from './ViewPost/ViewPost';
import LandingPage from './LandingPage/LandingPage';
import { Route, Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route expact path="/login" component={Login}/>
      <Route expact path="/register" component={Register}/>
      <Route expact path="/createpost" component={CreatePost}/>
      <Route expact path="/viewpost" component={ViewPost}/>
    </div>
  )
}

export default App;