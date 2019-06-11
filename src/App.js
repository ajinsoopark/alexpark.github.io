import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Home from './Components/Home/home'
import AboutMe from './Components/AboutMe/aboutMe'
import Projects from './Components/Projects/projects'
import NavBar from './Components/NavBar/navBar'

import './App.css'

class App extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='contentContainer'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/about' component={AboutMe}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
