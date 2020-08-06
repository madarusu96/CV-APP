import React from "react"
import "./Navbar.css"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from '../Content/Home'
import Experience from '../Content/Experience'
import Skills from'../Content/Skills'
import Hobby from'../Content/Hobby'

class Navbar extends React.Component { 
  render() {
    return (
     
 <HashRouter>
      <div className="navbar">Rusu Madalina
        <div className="navbar-right">
            <NavLink className="NavLink" exact to="/">Home</NavLink>
            <NavLink className="NavLink" to="/Experience">Experience</NavLink>
            <NavLink className="NavLink" to="/Skills">Skills</NavLink>
            <NavLink className="NavLink" to="/Hobby">Hobby</NavLink>
        </div>
      </div>

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Experience" component={Experience} />   
          <Route path="/Skills" component={Skills} />   
          <Route path="/Hobby" component={Hobby} />   
        </div>
      
      </HashRouter>

    )
    }
}
export default Navbar