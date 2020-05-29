import React from 'react'
import './css/section.css'

export function Section({name, children, vertical}) {
    return (
        <div className="section">
            <div className="section-header">
                {name}
            </div>
            <div className="section-card-container" data-vertical={vertical}>
                {children}
            </div>
        </div>
    )
}

export function SectionCard({image, children}) {
    return (
        <div className="section-card">
            {image?<img src={image} alt=""/>:<></>}
            {children}
        </div>
    )
}