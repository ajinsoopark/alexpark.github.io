import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Contacts from './contacts'

import Resume from '../../Resume.pdf'
import './navbar.css'

class NavBar extends Component {
    constructor () {
        super ()
        this.state = {
        }
    }

    render () {
        const path = this.props.location.pathname
        return (
            <div className='navBarContainer'>
                <div className='leftNav'>
                    <NavLink className='homeLink' to={'/'}>Alex Park</NavLink>
                    <div className='navLinks'>
                        <NavLink className={`about link ${path === '/about' ? 'activeLink' : ''}`} to={'/about'}>About</NavLink>
                        <NavLink className={`projects link ${path === '/projects' ? 'activeLink' : ''}`} to={'/projects'}>Projects</NavLink>
                        <a className='resume link' href={Resume} target='_blank'>Resume</a>
                    </div>
                </div>
                <Contacts/>
            </div>
        )
    }

}

export default withRouter(NavBar)