/* eslint-disable react-refresh/only-export-components */
// import React from 'react'

import FaqItem from "../components/FaqItems";

const FAQ = () => {
  return (
    <div className="pt-32 w-[50%] mx-auto">
      <h1 className="font-bold text-4xl text-center mb-12">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-dark-20 font-bold text-2xl mb-8">General</h3>
          <FaqItem
            question="How can I upgrade my plan?"
            answer="To upgrade your plan, click on the 'Upgrade' button for the plan you want to switch to, and follow the instructions provided."
          />
          <FaqItem
            question="Can I cancel my subscription?"
            answer="Yes, you can cancel your subscription at any time. Visit your account settings to manage your subscription."
          />
        </div>
        <div>
          <h3 className="text-dark-20 font-bold text-2xl mb-8">
            DATA & SOURCES
          </h3>
          <FaqItem
            question="How can I upgrade my plan?"
            answer="To upgrade your plan, click on the 'Upgrade' button for the plan you want to switch to, and follow the instructions provided."
          />
          <FaqItem
            question="Can I cancel my subscription?"
            answer="Yes, you can cancel your subscription at any time. Visit your account settings to manage your subscription."
          />
        </div>
        <div>
          <h3 className="text-dark-20 font-bold text-2xl mb-8">
            API ACCESS & FEATURES
          </h3>
          <FaqItem
            question="How can I upgrade my plan?"
            answer="To upgrade your plan, click on the 'Upgrade' button for the plan you want to switch to, and follow the instructions provided."
          />
          <FaqItem
            question="Can I cancel my subscription?"
            answer="Yes, you can cancel your subscription at any time. Visit your account settings to manage your subscription."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
