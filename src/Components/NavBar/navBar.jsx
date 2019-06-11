import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Contacts from './contacts'

import './navbar.css'

class NavBar extends Component {
    constructor () {
        super ()
        this.state = {
        }
    }

    render () {
        const path = this.props.location.pathname
        console.log(path)
        return (
            <div className='navBarContainer'>
                <NavLink className='homeLink' to={'/'}>ap</NavLink>
                <div className='quoteContent'>
                    <p className='intro'>Alex Park. Korean-American, born and Raised in Queens, New York.</p>
                </div>
                <div className='navLinks'>
                    <NavLink className='about link' to={'/about'}>About</NavLink>
                    <span className={`bottomBorder1 ${path === '/about' ? 'active' : ''}`}></span>
                    <NavLink className='projects link' to={'/projects'}>Projects</NavLink>
                    <span className={`bottomBorder2 ${path === '/projects' ? 'active' : ''}`}></span>
                    <NavLink className='resume link' to={'/resume'}>Resume</NavLink>
                    <span className={`bottomBorder3 ${path === '/resume' ? 'active' : ''}`}></span>
                </div>
                <Contacts/>
            </div>
        )
    }

}

export default withRouter(NavBar)