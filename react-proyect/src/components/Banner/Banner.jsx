import React from 'react'
import './banner.scss'
function Banner(props) {
    return (
        <div className="c-banner">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Banner
