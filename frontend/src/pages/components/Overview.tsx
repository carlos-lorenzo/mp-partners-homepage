import React from 'react'
import { useRef } from 'react';

import HorizontalScroll from './HorizontalScroll'

import "../../style/overview.css"


export default function Overview() {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <>
        <section id="overview" ref={targetRef}>
            <h3 id='overview-title'>WHAT WE DO</h3>
            <div id="overview-content">
                <h2>Impulsing Innovation</h2>
                <p>At MP Partners, we drive innovation by connecting businesses with the capital they need to grow. This is achieved through our network of high net worth individuals, family offices, and institutional investors who are committed to supporting entrepreneurial ventures.</p>
                <p>Our team of experts is dedicated to understanding your unique challenges and providing tailored solutions that deliver results. We take a collaborative approach to working with our clients, ensuring that we fully understand their needs and objectives.</p>

                <p>We provide the information. <b>You</b> innovate.</p>

            </div>
           
        </section>
        
        </>
    )
}
