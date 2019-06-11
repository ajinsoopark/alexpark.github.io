import React, { Component } from 'react'

class Home extends Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        return (
            <div className='homeContainer'>
                <h1 className='firstLine'>I'm Alex Park,</h1>
                <h1 className='secondLine'>a New York City based</h1>
                <h1 className='thirdLine'>Software Engineer.</h1>
            </div>
        )
    }

}

export default Home