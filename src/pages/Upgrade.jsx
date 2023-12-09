/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItems";
import PriceCard from "../components/PriceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";
import { apiBaseUrl } from "../Store/apiBaseUrl";

const Upgrade = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;

  const getFaq = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${apiBaseUrl}/getfaq`,
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

  const getPlans = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${apiBaseUrl}/getplans`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.message);
      setPlan(response?.data?.message);
      toast.info(response?.data?.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFaq();
    getPlans();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="pt-32 mx-auto w-[70%]">
      <div className="flex items-center gap-6">
        <PriceCard
          title={plan[0]?.plan_name}
          price={plan[0]?.amount}
          btn="Renew  23-02-2024"
          desc={plan[0]?.description}
        />
        <PriceCard
          title={plan[2]?.plan_name}
          price={plan[2]?.amount}
          btn="Upgrade"
          desc={plan[2]?.description}
        />
        <PriceCard
          title={plan[1]?.plan_name}
          price={plan[1]?.amount}
          btn="Upgrade"
          desc={plan[1]?.description}
        />
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
