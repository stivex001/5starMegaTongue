// import React from "react";
import CustomButton from "../utils/CustomButton";

const ApiAccessKey = () => {
  return (
    <section className={` mx-auto w-5/6  md:h-full md:pb-0 border `}>
      <div className="py-7 px-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">This Month's API Usage:</h1>
          <div className="flex items-center justify-between py-2 px-4 border border-slate-600 bg-[#e9edf4]">
            <p className="text-3xl font-semibold italic">
              031bda7dfa04b037a06778c8731c3bc1
            </p>
            <CustomButton className="w-fit h-[41px] text-2xl font-semibold flex items-center bg-dark-blue">
              Reset
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiAccessKey;
