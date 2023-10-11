import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItems";
import PriceCard from "../components/PriceCard";

const Upgrade = () => {
  return (
    <div className="pt-32 mx-auto w-[70%]">
      <div className="flex items-center gap-6 ">
        <PriceCard desc="Free" price={0} btn="Renew  23-02-2024" />
        <PriceCard desc="Silver" price={24} btn="Upgrade" />
        <PriceCard desc="Gold" price={48} btn="Upgrade" />
      </div>
      <div className="flex items-center justify-end mt-12 gap-3">
        <p className="text-xl font-normal italic cursor-pointer">
          Need more requests?
        </p>
        <p className="text-purple-20 font-medium cursor-pointer text-xl bg-bg-light py-[14px] px-8 rounded-md">
          Request custom pricing »
        </p>
      </div>
      {/* FAQ */}
      <div className="mt-20 w-[70%] mx-auto">
        <h1 className="font-bold text-4xl text-center mb-12">
          Frequently asked questions
        </h1>
        <FaqItem
          question="How can I upgrade my plan?"
          answer="To upgrade your plan, click on the 'Upgrade' button for the plan you want to switch to, and follow the instructions provided."
        />
        <FaqItem
          question="Can I cancel my subscription?"
          answer="Yes, you can cancel your subscription at any time. Visit your account settings to manage your subscription."
        />
        {/* Add more FAQ items as needed */}
        <div className="mt-12 text-purple-20 text-xl font-medium">
          <Link to="/faq">See all Frequently Asked Questions »</Link>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
