

import HorizontalScroll from './HorizontalScroll'
import "../../style/value.css"

export default function Value() {
    return (
        <section id='value-section'>
            <HorizontalScroll word="OUR VALUES" />
            <p>MP Partners is structured as a non-profit consulting firm, with the primary goal of creating real value
for our partners while providing high-level professional experience to our team.</p>
            <div id="value-cards">
                <div className="value-card">
                    <h3>Transparent Collaboration</h3>
                    <p>We work closely with our partners, sharing objectives,
hypotheses, and methodologies from the early stages.</p>
                </div>
                <div className="value-card">
                    <h3>Value First</h3>
                    <p>We like to actually create value for the companies we collaborate with ensuring longevity and better profitability for our clients.</p>
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
