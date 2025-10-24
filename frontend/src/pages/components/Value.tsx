import React from 'react'

import HorizontalScroll from './HorizontalScroll'
import "../../style/value.css"

export default function Value() {
    return (
        <section id='value-section'>
            <HorizontalScroll word="OUR VALUE" />
            <p>MP Partners is structured as a non-profit consulting firm, with the primary goal of creating real value
for our partners while providing high-level professional experience to our team.</p>
            <div id="value-cards">
                <div className="value-card">
                    <h3>Transparent Collaboration</h3>
                    <p>We work closely with our partners, sharing objectives,
hypotheses, and methodologies from the early stages.</p>
                </div>
                <div className="value-card">
                    <h3>Intermediate Output Approach</h3>
                    <p>We do not request immediate compensation. Our work is
only valued when the intermediate output fully meets expectations and generates concrete
value for the partner.</p>
                </div>
                <div className="value-card">
                    <h3>Impact Orientation</h3>
                    <p>We prioritize projects that deliver measurable and practical results,
ensuring that our strategic solutions can be effectively implemented.</p>
                </div>
            </div>
        </section>
    )
}
