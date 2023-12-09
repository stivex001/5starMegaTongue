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
import { apiBaseUrl } from "../Store/apiBaseUrl";

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
        `${apiBaseUrl}/getsubscribplan`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
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
        `${apiBaseUrl}/getplans`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
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
    getPlans();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  console.log(subPlan["subscription plan"]);

  return (
    <div className="pt-32">
      <div className="flex flex-col gap-7 mx-auto ">
        <div className="flex items-center mx-auto w-5/6  md:h-full md:pb-0 gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-medium text-center">
              Your Subscription:
            </h3>
            <p className="text-3xl font-bold text-center">
              {subPlan["subscription plan"]?.toUpperCase()} PLAN
            </p>
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
          desc={subPlan["subscription plan"] + " " + "plan"}
          api="Renew:"
          apiDesc={subPlan?.Renew}
          apii="API Usage"
          apDesc={`(${subPlan["Api usage"]} / 1,000)`}
          apUsages="API Usage"
          billing="Billing Period:"
          bill={`${subPlan["Billing period"]?.start} - ${subPlan["Billing period"]?.end}`}
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
