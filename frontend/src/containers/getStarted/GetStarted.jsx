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
                                        <div id="login">
                                            <h1>Create Account</h1>
                                            <form id="login_form">
                                                <div className="field_container">
                                                    <input type="text" placeholder="Username" required />
                                                </div>

                                                <div className="field_container">
                                                    <input type="Password" placeholder="Password" required />
                                                    <button id="sign_in_button" className="button__create">
                                                        <span className="button__text">Create Account</span>
                                                    </button>
                                                    <p>Already have an account? <a href="#">Log In</a></p>
                                                </div>


                                            </form>

                                        </div>
                                    </div>
                                    <div>
                                        <button className="close-button topright" onClick=
                                            {() => close()}>
                                            <h2>X</h2>
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
