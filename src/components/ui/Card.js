import React from 'react'
import './Card.css'

const Card = ({ children, className }) => {
    const classes = `card ${className}`

    return React.createElement('div', { className: classes }, children)
    // return (
    //     <div className={classes}>{children}</div>
    // )
}

export default Card
