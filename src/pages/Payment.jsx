/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";

/* eslint-disable react/no-unescaped-entities */
const Payment = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;
  const [subPlan, setSubPlan] = useState("");
  const [loading, setIsLoading] = useState(false);

  const getSubscriptionPlan = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/getsubscribplan`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setSubPlan(response?.data);
      toast.info(response?.data?.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSubscriptionPlan();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="pt-32">
      <div className={` mx-auto w-5/6  md:h-full md:pb-0 border  py-7 px-8`}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Your payment method(s):</h1>
            <p className="text-purple-20 text-xl font-semibold cursor-pointer">
              Add new
            </p>
          </div>

          <span className="text-[18px] text-gray-400 font-normal italic">
            {subPlan?.message}
          </span>

          <div className="w-full h-[1px] bg-slate-700 accent-gray-800 mt-20" />
          <div className="py-7 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold italic ">Your Invoices</h1>
            <span className="text-[18px] text-gray-400 font-normal italic">
              No invoices on file.
            </span>
            <span className="text-xl font-medium italic text-purple-20">
              Account Dashboard »
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
