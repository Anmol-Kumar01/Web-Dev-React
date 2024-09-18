import React, { useState } from "react";
import "./FAQ.css"; 


const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        {question} <span>{isActive ? "✖" : "➕"}</span>
      </div>
      {isActive && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Websites can range so much in terms of content and complexity that it is impossible to answer directly without knowing the details. Usually, it takes from 1 - 4 weeks.",
    },
    {
      question: "How much does a project cost?",
      answer: "The pends on the scope of the project. Contact me for a detailed quote.",
    },
    {
      question: "What services do you offer exactly?",
      answer: "I offer web design, development, and custom illustration services.",
    },
    {
      question: "What if I have the website designed but need development only?",
      answer: "No problem, I can work with your design and turn it into a fully functional website.",
    },
    {
      question: "Can you create custom illustrations, icons, or mockups for me?",
      answer: "Yes, I specialize in creating custom designs tailored to your brand.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faqs">
      <h1 className="faq-title">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}

      <div className="cta-section">
        <h2>Interested in working with me?</h2>
        <button className="cta-button">Start a project</button>
      </div>
    </div>
  );
};

export default FAQ;
