import React from 'react'
import './exercise.css'
import exercise1 from '../../assets/images/exercise1.gif'
import exercise2 from '../../assets/images/exercise2.gif'
import exercise3 from '../../assets/images/exercise3.gif'
import exercise4 from '../../assets/images/exercise4.gif'

const Exercise = () => {
    return (
        <div className="exercise__container">
            <div className="exercise__images-grid">
                <img src={exercise1} alt="exercise" />
                <img src={exercise2} alt="exercise" />
                <img src={exercise3} alt="exercise" />
                <img src={exercise4} alt="exercise" />
            </div>
            <div className="exercise__container-image">
                <h1 className="exercise__container-text">
                    Be introduced to new workouts or keep track of your very own selection.
                    Know exactly what to do and how to do it.
                </h1>
            </div>
        </div>
    )
}

export default Exercise
