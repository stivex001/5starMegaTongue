/* eslint-disable react/prop-types */
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="text-xl font-medium">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${isOpen ? "transform rotate-360" : ""}`}

          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </div>
      <p
        className={`text-gray-600 mt-2 transition-max-h transition-opacity ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqItem;
