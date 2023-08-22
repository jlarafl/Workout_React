import React from 'react'
import Popup from 'reactjs-popup'
import './getStarted.css'

const GetStarted = () => {


    return (
        <div id="getStarted" name="getStarted" className="getStarted__container">
            <div className="getStarted__container-image">
                <div className="getStarted__container-text">
                    <h1>Are You Ready to Get Started?</h1>
                    <Popup trigger={<button class="getStarted__button" role="button">Sign Up</button>} modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div className='content'>

                                    </div>
                                    <div>
                                        <button className="close-modal" onClick=
                                            {() => close()}>
                                            Close modal
                                        </button>
                                    </div>
                                </div>
                            )
                        }

                    </Popup>
                </div>
            </div>
            <div className="getStarted__container-text">
            </div>
        </div>
    )
}

export default GetStarted
