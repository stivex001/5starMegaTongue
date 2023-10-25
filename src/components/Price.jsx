/* eslint-disable react/prop-types */
import PriceCard from "./PriceCard";

const Price = ({plan}) => {
  console.log(plan);
  return (
    <div className="flex flex-col gap-[64px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-dark-20 font-bold text-4xl max-w-3xl">
          Pricing plans for teams of all sizes
        </h1>
        <span className="font-normal text-gray-400 text-[18px] max-w-xl">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customers loyalty, and driving sales.
        </span>
      </div>
      {/* Card */}
      <div className="flex items-center gap-6">
        <PriceCard desc={plan[0]?.plan_name} price={0} btn="Monthly billing" />
        <PriceCard desc={plan[1]?.plan_name} price={24} btn="Monthly billing" />
        <PriceCard desc={plan[2]?.plan_name} price={48} btn="Monthly billing" />
      </div>
    </div>
  );
};

export default Price;
