import React from 'react'
import './excersizes.css'
import excersize1 from '../../assets/images/excersize1.gif'
import excersize2 from '../../assets/images/excersize2.gif'
import excersize3 from '../../assets/images/excersize3.gif'
import excersize4 from '../../assets/images/excersize4.gif'

const Excersizes = () => {
    return (
        <div className="excersize__container">
            <div className="excersize__images-grid">
                <img src={excersize1} alt="excersize" />
                <img src={excersize2} alt="excersize" />
                <img src={excersize3} alt="excersize" />
                <img src={excersize4} alt="excersize" />
            </div>
            <div className="excersize__container-text">
                <h1>
                    Be introduced to new workouts or keep track of your very own selection.
                    Know exactly what to do and how to do it.
                </h1>
            </div>
        </div>
    )
}

export default Excersizes
