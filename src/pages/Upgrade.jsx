import PriceCard from "../components/PriceCard";

const Upgrade = () => {
  return (
    <div className="pt-32 mx-auto w-[70%]">
      <div className="flex items-center gap-6 ">
        <PriceCard desc="Free" price={0} btn="Renew  23-02-2024" />
        <PriceCard desc="Silver" price={24} btn="Upgrade" />
        <PriceCard desc="Gold" price={48} btn="Upgrade" />
      </div>
      <div className="flex items-center justify-end mt-12 gap-3">
        <p className="text-xl font-normal italic cursor-pointer">
          Need more requests?
        </p>
        <p className="text-purple-20 font-medium cursor-pointer text-xl bg-bg-light py-[14px] px-8 rounded-md">
          Request custom pricing »
        </p>
      </div>
    </div>
  );
};

export default Upgrade;
