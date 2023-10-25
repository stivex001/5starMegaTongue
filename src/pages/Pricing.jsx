/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import Price from "../components/Price";
import SubscriptionInfo from "../components/SubscriptionInfo";
import CustomButton from "../utils/CustomButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";

const Pricing = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;
  const [subPlan, setSubPlan] = useState("");
  const [plan, setPlan] = useState([]);
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

  const getPlans = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/getplans`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
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
    getSubscriptionPlan();
    getPlans()
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="pt-32">
      <div className="flex flex-col gap-7 mx-auto ">
        <div className="flex items-center mx-auto w-5/6  md:h-full md:pb-0 gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-medium text-center">
              Your Subscription:
            </h3>
            <p className="text-3xl font-bold text-center">FREE PLAN</p>
          </div>
          <CustomButton
            className="w-fit py-[14px] px-8"
            onClick={() => navigate("/upgrade")}
          >
            Upgrade
          </CustomButton>
        </div>
        <SubscriptionInfo
          title="Subscription:"
          desc="Free Plan"
          api="Renew:"
          apiDesc="2023-09-01"
          apii="API Usage"
          apDesc="0% (0 / 1,000)"
          apUsages="API Usage"
          billing="Billing Period:"
          bill="$0.00"
        />
        <div className=" h-[1px] bg-slate-700 accent-gray-800 mt-9 mx-auto w-5/6  md:pb-0" />
        <div className="mx-auto w-[70%] mt-[84px]">
          <Price plan={plan} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
