import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../style/services.css";

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
  }
];

const AccordionItem = ({ title, description, isOpen, onClick }: { title: string; description: string; isOpen: boolean; onClick: () => void; }) => (
  <div className="accordion-item">
    <motion.div
      className="accordion-header"
      onClick={onClick}
      initial={false}
    >
      <h3>{title}</h3>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
        <svg width="15" height="15" viewBox="0 0 20 20">
            <path fill="currentColor" d="M4.2 6.2l5.8 5.8 5.8-5.8 1.2 1.2-7 7-7-7z"></path>
        </svg>
      </motion.div>
    </motion.div>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="accordion-content"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <p>{description}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);


export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>
          MP Partners provides strategic advisory services tailored to the needs of businesses and investors
          operating in the fields of sports, media, and innovation. Our areas of activity include:
        </p>
      </div>
      <div className="accordion-container">
        {servicesData.map((service, index) => (
          <AccordionItem
            key={index}
            title={service.title}
            description={service.description}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}