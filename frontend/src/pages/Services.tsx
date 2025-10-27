import Service from './components/Service';

import "../style/services.css";


export default function Services() {
    const servicesData = [
        {
            title: "Strategic Advisory",
            description: "Development of business strategies and growth models, review of competitive positioning, and definition of long-term partnerships."
        },
        {
            title: "Market Intelligence",
            description: "Targeted market research, analysis of emerging trends in sports & entertainment, and mapping of investment opportunities."
        },
        {
            title: "Investor Relations & Execution",
            description: "Support in developing relationships with investors and brands, facilitation of commercial operations, and implementation of strategic partnerships."
        },
        {
            title: "Thought Leadership",
            description: "Production of reports and insights to guide the transformation of business models in the sports and media sectors."
        },
        {
            title: "Investment Readiness & Referral Model",
            description: "We work with funds and partners that, due to capital constraints, refer promising start-ups they cannot currently invest in. MP Partners supports these companies through strategic improvement, while referrers retain preference to invest once the start-up becomes investment-ready."
        },
        {
            title: "Project Management",
            description: "Managing and coordinating lifestyle real estate projects from inception through planning up until start of construction"
        },
        {
            title: "Operational Review & Cost Optimization",
            description: "Assessing historical financial and operational performance of sport and leisure businesses, and identifying measures to implement effective change"
        }
    ];

    return (
        <div className="services-container">
            <div className="services-intro">
                <h1>Our Services</h1>
                <p>
                    MP Partners provides strategic advisory services tailored to the needs of businesses and investors
                    operating in the fields of sports, media, and innovation. Our areas of activity include:
                </p>
            </div>
            <div className="services-list">

                {servicesData.map((service, index) => (
                    <Service
                        key={index}
                        title={service.title}
                        description={service.description}
                        image_src={`../assets/services/service_${index + 1}.jpg`}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}