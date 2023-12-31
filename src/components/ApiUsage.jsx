/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const ApiUsage = ({ apiUsage }) => {
  console.log( apiUsage);

  return (
    <section className={` mx-auto w-5/6  md:h-full md:pb-0 border `}>
      <div className="py-7 px-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">This Month's API Usage:</h1>
          <div className="bg-[#e9edf4] py-3 px-[39px] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-2xl italic font-semibold">API Requests</p>
              <span className="text-[20px] font-normal italic">
                {typeof apiUsage?.message === "number"
                  ? apiUsage?.message
                  : "0"}{" "}
                / 1000
              </span>
            </div>
            <div className="w-full">
              <input
                type="text"
                readOnly
                className="w-full h-[43px] rounded-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-normal italic">API Requests</p>
              <span className="text-xl font-normal italic">
                {apiUsage?.date}
              </span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-700 accent-gray-800 mt-9" />
          <div className="py-10">
            <h1 className="text-3xl font-semibold ">Statistics</h1>
            <span className="text-xl font-normal italic">
              {apiUsage?.message}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiUsage;
