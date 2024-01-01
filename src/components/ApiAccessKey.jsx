/* eslint-disable react/prop-types */
// import React from "react";
import CustomButton from "../utils/CustomButton";
import { Spinner } from "./Spinner";

const ApiAccessKey = ({ apiKey, createNewApiKey, loading, user }) => {
  const userApiKey = user?.data?.user?.api_key;

  return (
    <section className={` mx-auto w-5/6  md:h-full md:pb-0 border `}>
      <div className="py-7 px-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Your API Access Key:</h1>
          <div className="flex items-center justify-between py-2 px-4 border border-slate-600 bg-[#e9edf4]">
            {userApiKey ? (
              <p className="text-3xl font-semibold italic">{userApiKey}</p>
            ) : (
              <p>{apiKey}</p>
            )}
            {apiKey ? (
              <CustomButton
                className="w-fit h-[41px] text-2xl font-semibold flex items-center bg-dark-blue"
                onClick={createNewApiKey}
              >
                {loading ? <Spinner /> : "Reset"}
              </CustomButton>
            ) : (
              <CustomButton
                className="w-fit h-[41px] text-2xl font-semibold flex items-center bg-dark-blue"
                onClick={createNewApiKey}
              >
                {loading ? <Spinner /> : "Create One"}
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiAccessKey;
