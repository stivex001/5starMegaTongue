/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'

import { useEffect, useState } from "react";
import FaqItem from "../components/FaqItems";
import { toast } from "react-toastify";
import axios from "axios";
import { apiBaseUrl } from "../Store/apiBaseUrl";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [loading, setIsLoading] = useState(false);

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

  useEffect(() => {
    getFaq();
  }, []);

  if (loading) {
    return <p>Loading....</p>
  }

  return (
    <div className="pt-32 w-[50%] mx-auto">
      <h1 className="font-bold text-4xl text-center mb-12">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-dark-20 font-bold text-2xl mb-8">General</h3>
          {faq?.map((items) => (
            <FaqItem
              key={items?.id}
              question={items?.question}
              answer={items?.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
