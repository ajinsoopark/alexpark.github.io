import React, { Component } from 'react'

import './projects.css'

class Projects extends Component {
    constructor () {
        super ()
        this.state = {
            previews: [{
                file: 'nextStep',
                appName: 'Next Step',
                info:'Prepare for interviews, while receiving feedback on your answers.',
                stack: 'React/Redux, Node.js, CSS3, PostGres',
                liveLink: 'https://nextstep-pursuit.herokuapp.com/',
                gitLink: 'https://github.com/ajinsoopark/Next-Step'
            }, {
                file: 'hikeMe',
                appName: 'Hike Me',
                info: 'Find a hiking trail, or walk in nature based on location.',
                stack: 'React, Node.js, CSS3',
                liveLink: 'https://hikeme.herokuapp.com/',
                gitLink: 'https://github.com/ajinsoopark/HikeMe'
            }]
        }
    }

    displayPreviews = () => {
        const { previews } = this.state
        return previews.map((image, i) => {
            return (
                <div key={i} className='projectImageContainer'>
                    <img className='projectImage' alt='' src={require(`../../Previews/${image.file}.png`)}></img>
                    <div className='projectOverlay'>
                        <div className='liveGitLinks'>
                            <a className='liveLink appLink' href={image.liveLink}>LIVE</a>
                            <a className='gitLink appLink' href={image.gitLink}>GIT</a>
                        </div>
                        <p className='appName'>{image.appName}</p>
                        <p className='appInfo'>{image.info}</p>
                        <p className='stack'>{image.stack}</p>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div className='projectsContainer'>
                <h2>Projects</h2>
                <div className='previewsContainer'>
                    {this.displayPreviews()}
                </div>
            </div>
        )
    }

}

export default Projects