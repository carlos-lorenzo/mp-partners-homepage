import React from 'react'

import Hero from './components/Hero'
import Overview from './components/Overview'
import HorizontalScroll from './components/HorizontalScroll'
import "../style/home.css"

export default function Home() {
    return (
        <div id='home-page'>
            <Hero />
            <Overview />
        </div>
    )
}
