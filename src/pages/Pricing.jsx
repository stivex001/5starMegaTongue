import Price from "../components/Price";
import SubscriptionInfo from "../components/SubscriptionInfo";
import CustomButton from "../utils/CustomButton";

// type Props = {}

const Pricing = () => {
  return (
    <div className=" pt-32">
      <div className="flex flex-col gap-7 mx-auto ">
        <div className="flex items-center mx-auto w-5/6  md:h-full md:pb-0 gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-medium text-center">
              Your Subscription:
            </h3>
            <p className="text-3xl font-bold text-center">FREE PLAN</p>
          </div>
          <CustomButton className="w-fit py-[14px] px-8">Upgrade</CustomButton>
        </div>
        <SubscriptionInfo
          title="Subscription:"
          desc="Free Plan"
          api="Renew:"
          apiDesc="2023-09-01"
          apii="API Usage"
          apDesc="0% (0 / 1,000)"
          apUsages="API Usage"
          billing="Billing Period:"
          bill="$0.00"
        />
        <div className=" h-[1px] bg-slate-700 accent-gray-800 mt-9 mx-auto w-5/6  md:pb-0" />
        <div className="mx-auto w-5/6 mt-[84px]">
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
