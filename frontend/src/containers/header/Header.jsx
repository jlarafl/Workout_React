import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__container-overlay">
                <div className="header__container-overlay-text">
                    <h1>Keep Track of Your Workout</h1>
                    <h3>Or discover new ones.</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
