import React from 'react'
import header from '../../assets/images/header.jpeg'
import './header.css'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__container-overlay">
                <div className="header__container-overlay-text">
                    <h1>Header TExt</h1>
                    <h3>Describe text</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
