import React from 'react'

import "../../style/partners.css"

export default function Partners() {
    const nPartners = 3;
    const partnerURLs = ["https://openfieldadvisory.com/", "https://www.ambrosiaventures.co/", "https://www.brooklinesportsadvisory.com/"];

    return (
        <section id='partners-section'>
            <h3 id='overview-title'>OUR PARTNERS</h3>
            <div id="partners-banner">
                
                {Array.from({ length: nPartners }).map((_, index) => (
                    <div key={index} className="partner-logo">
                        <a href={partnerURLs[index]} target="_blank" rel="noopener noreferrer">
                            <img className="partner-logo" src={`../assets/partners/partner_${index}.png`} alt={`Partner ${index}`} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
