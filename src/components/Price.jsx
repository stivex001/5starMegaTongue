import PriceCard from "./PriceCard";

const Price = () => {
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
        <PriceCard desc="Free" price={0} btn="Monthly billing" />
        <PriceCard desc="Silver" price={24} btn="Monthly billing" />
        <PriceCard desc="Gold" price={48} btn="Monthly billing" />
      </div>
    </div>
  );
};

export default Price;
