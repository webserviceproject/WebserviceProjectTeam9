import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./Images/playerMatchLogo.jpg";
import AboutTheApp from './aboutTheApp.js';
import ContactUS from './contactUS';
import Started from './start.js';
import HomePage from './homePage'
import AboutUS from './aboutUS';
import {Image } from 'react-bootstrap';

function App() {

  return (
    <div className="App">

      <Router>
        <div className="nav-div">
          <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '500px' }}>
            <a id="logo-nav" className="logo-nav" style={{ padding: '0px' }} href='/'><Image src={logo} className="logo-img"
              style={{ width: '200px', height: '80px' }} /></a>

            <ul className="navbar">

              <li className="move" style={{ marginLeft: '30px' }}>
                <Link to="/">Home Screen</Link>
              </li>

              <li className="move" style={{ marginLeft: '30px' }}>
                <Link to="/about-the-app">About the App</Link>
              </li>

              <li className="move" style={{ marginLeft: '30px' }}>
                <Link to="/aboutUs">About Us</Link>
              </li>

              <li className="move" style={{ marginLeft: '30px' }}>
                <Link to="/contactUS">Contact Us</Link>
              </li>

            </ul>
          </div>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/about-the-app">
              <AboutTheApp />
            </Route>

            <Route path="/aboutUs">
              <AboutUS />
            </Route>

            <Route path="/contactUS">
              <ContactUS />
            </Route>

            <Route path="/start">
              <Started />
            </Route>           
           
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
