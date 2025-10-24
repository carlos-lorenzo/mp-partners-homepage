import React from 'react'

import "../style/about.css"
import ScrollTextSwap from './components/ScrollTextSwap'
export default function About() {
    return (
        <div id='about-page'>
            <h3 id='about-title'>Who We Are</h3>
            <h2 id='about-subtitle'>Where Data Meets Decisions</h2>
            <div id="about-content">
            <p>MP Partners is a junior consulting firm founded by Bocconi University students with the goal of
supporting companies, start-ups, and alternative investment operators, particularly within the sports,
media, and innovation industries, in developing strategic and growth-oriented projects.</p>
            <p>Our mission is to bridge the gap between academia and business, providing our partners with rigorous
analysis, actionable insights, and creative solutions capable of generating tangible value.</p>
            </div>
            <ScrollTextSwap 
            title='Our Impact'
            description='As part of our track record, we have already launched collaborations in the sports industry, including
            a project developed with Open Field Advisory, where we supported the firm in identifying Italian
            companies interested in partnerships with American sports teams (NFL), as well as potential
            collaborations for related events in Italy and the U.S., contributing to market research, investor
            relations, and deal execution.'/>

            <ScrollTextSwap 
            title="Our Future"
            description='We are currently finalizing contracts with venture capital funds and developing further collaborations
            with start-ups to expand our network and strengthen our investment-readiness ecosystem.'
            />
        </div>
    )
}
