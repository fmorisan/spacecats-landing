import React from 'react'
import Brand from './Brand'
import './css/header.css'

function Header () {
    return (
        <header>
            <Brand />
            <nav id="nav">
                <a onClick={() => console.log(1)} href="/">What we do</a>
                <a onClick={() => console.log(1)} href="/">Our history</a>
                <a onClick={() => console.log(1)} href="/">About us</a>
            </nav>
        </header>
    )
}

export default Header