/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import axios from "axios";
import ApiUsage from "../components/ApiUsage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// type Props = {}

const ApisUsage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;
  const [apiUsage, setApiUsage] = useState("");
  const [loading, setIsLoading] = useState(false);

  console.log(user, "auth");

  // const userData = user?.data?.user

  const getApiUsage = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/getapiusage`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setApiUsage(response?.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiUsage();
  }, []);

  return <div className="pt-32">
    <ApiUsage apiUsage={apiUsage}/>
  </div>;
};

export default ApisUsage;
