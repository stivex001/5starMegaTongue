/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItems";
import PriceCard from "../components/PriceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Upgrade = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;

  const getFaq = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/getfaq`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data?.message);
      setFaq(response?.data?.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

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
        <FaqItem question={faq?.[0]?.question} answer={faq?.[0]?.answer} />
        <FaqItem question={faq?.[1]?.question} answer={faq?.[1]?.answer} />

        <div className="mt-12 text-purple-20 text-xl font-medium">
          <Link to="/faq">See all Frequently Asked Questions »</Link>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
