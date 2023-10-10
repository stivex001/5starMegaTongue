/* eslint-disable react/no-unescaped-entities */
const Payment = () => {
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
            You currently have no payment methods on file.
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
