// import React from 'react'
import { useEffect, useState } from "react";
import ApiAccessKey from "../components/ApiAccessKey";
import ApiUsage from "../components/ApiUsage";
import Hero from "../components/Hero";
import SubscriptionInfo from "../components/SubscriptionInfo";
import axios from "axios";
import { toast } from "react-toastify";


const Subscription = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token
  const [apikey, setApiKey] = useState();
  const [loading, setIsLoading] = useState(false);
 

  console.log(user, "auth");

  const getApiKey = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/getapikey`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response,"apikey")
      setApiKey(response);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiKey();
  }, []);

  console.log(apikey,"gsdggd")

  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <ApiAccessKey apiKey={user?.data?.user?.api_key}/>
      <ApiUsage />
      <SubscriptionInfo
        title="Subscription:"
        desc="Free Plan"
        api="API Usage"
        apiDesc="0% (0 / 1,000)"
        apiUsages="API Usage"
      />
      <SubscriptionInfo
        title="Name:"
        desc="Emmy"
        api="Email:"
        apiDesc="odejinmipromise@gmail.com"
        company="Company"
        comName="5Star Inn Company"
        notification="Notifications:"
        not="Unsubscribed"
      />
       <SubscriptionInfo
        title="Current:"
        desc="No payment methods on file"
        api="Billing period:"
        apiDesc="2023-09-01 - 2023-09-30"
        company="Total Due:"
        comName="$0.00"
      />
    </div>
  );
};

export default Subscription;
