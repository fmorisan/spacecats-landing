import React from 'react'
import './css/carousel.css'

import chevron from './assets/chevron.svg'

export function Carousel({children}) {
    const [current, setCurrent] = React.useState(0);

    function next() {
        setCurrent(
            current+1>children.length-1?0:current+1
        )
    }

    function prev() {
        setCurrent(
            current-1<0?children.length-1:current-1
        )
    }

    return (
        <div className="carousel">
            <span className="carousel-arrow-prev" onClick={prev}>
                <img src={chevron} alt="prev" style={{transform: "rotate(180deg)"}} className="chevron" />
            </span>
            <div className="head">
                {children[current]}
            </div>
            <span className="carousel-arrow-next">
                <img src={chevron} alt="prev" onClick={next} className="chevron" />
            </span>
        </div>
    )
}