/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { useEffect, useState } from "react";
import ApiAccessKey from "../components/ApiAccessKey";
import ApiUsage from "../components/ApiUsage";
import Hero from "../components/Hero";
import SubscriptionInfo from "../components/SubscriptionInfo";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Spinner from "../components/spinner/Spinner";
import { apiBaseUrl } from "../Store/apiBaseUrl";

const Subscription = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;
  const [apikey, setApiKey] = useState("");
  const [apiUsage, setApiUsage] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [apiLoading, setIsApiLoading] = useState(false);
  const [subPlan, setSubPlan] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const userData = user?.data?.user;

  const createNewApiKey = async (e) => {
    e.preventDefault();
    setIsApiLoading(true);

    try {
      const createResponse = await axios.post(`${apiBaseUrl}/apikey`, null, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (createResponse?.data?.statusCode === true) {
        // If successful, make a GET request to retrieve the new API key
        const response = await axios.get(`${apiBaseUrl}/getapikey`, {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        // Update the apiKey state with the retrieved API key
        if (response?.data?.status === true) {
          setApiKey(response?.data?.message);
          setIsApiLoading(false);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: createResponse?.data?.message,
        });
        setIsApiLoading(false);
      }
    } catch (error) {
      // Handle any errors that occur during the API key creation process
      toast.error(error?.data?.message || error.message);
      setIsApiLoading(false);
    }
  };

  const getApiUsage = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${apiBaseUrl}/getapiusage`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setApiUsage(response?.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  const getUserInfo = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${apiBaseUrl}/getuserinfo`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setUserInfo(response?.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  const getSubscriptionPlan = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${apiBaseUrl}/getsubscribplan`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
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
    console.log("API key changed:", apikey);
  }, [apikey]);

  useEffect(() => {
    getApiUsage();
    getUserInfo();
    getSubscriptionPlan();
  }, []);


  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <ApiAccessKey
        apiKey={apikey}
        createNewApiKey={createNewApiKey}
        loading={apiLoading}
        user={user}
      />
      <ApiUsage apiUsage={apiUsage} />
      <SubscriptionInfo
        title="Subscription:"
        desc={subPlan["subscription plan"] + " " + "plan"}
        api="API Usage"
        apDesc={`(${subPlan["Api usage"]} / 1,000)`}
        apiUsages="API Usage"
      />
      <SubscriptionInfo
        title="Name:"
        desc={userData?.firstname}
        api="Email:"
        apiDesc={userData?.email}
        company="Company"
        comName={userData?.company}
        notification="Notifications:"
        not={userData?.notification || "Unsubscribed"}
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
