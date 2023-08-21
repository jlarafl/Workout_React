import React from 'react'
import './getStarted.css'
import getstarted from '../../assets/images/getstarted.jpeg'

const GetStarted = () => {
    return (
        <div id="getStarted" name="getStarted" className="getStarted__container">
            <div className="getStarted__container-image">
                <div className="getStarted__container-text">
                    <h1>Are You Ready to Get Started?</h1>
                    <button class="getStarted__button" role="button">Sign Up</button>
                </div>
            </div>
            <div className="getStarted__container-text">
            </div>
        </div>
    )
}

export default GetStarted
