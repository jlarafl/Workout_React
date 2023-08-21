import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import dumbbell from '../../assets/images/dumbbell.png'

const Navbar = () => {


    const [scroll, setScroll] = useState(false);

    const changeNavbar = (e) => {
        if (window.scrollY >= 100) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }

    }
    window.addEventListener('scroll', changeNavbar)

    return (
        <div className={scroll ? "navbar__container-scroll" : "navbar__container"}>
            <div className="navbar__container-links">
                <div className="navbar__container-links-logo">
                    <a href="#home"><img src={dumbbell} alt="dumbbell logo" /></a>
                </div>
                <div>
                    <h1>My Workout</h1>
                </div>
                <ul className="navbar__container-links_container">
                    <Link to="home" spy={true} smooth={true} offset={50} duration={100}>Home</Link>
                    <Link to="exercise" spy={true} smooth={true} offset={50} duration={100}>Workouts</Link>
                    <Link to="getStarted" spy={true} smooth={true} offset={50} duration={100}>Get Started</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
