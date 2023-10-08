// import React from 'react'

import ApiAccessKey from "../components/ApiAccessKey";
import ApiUsage from "../components/ApiUsage";
import Hero from "../components/Hero";
import SubscriptionInfo from "../components/SubscriptionInfo";

// type Props = {}

const Subscription = () => {
  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <ApiAccessKey />
      <ApiUsage />
      <SubscriptionInfo
        title="Subscription:"
        desc="Free Plan"
        api="API Usage"
        apiDesc="0% (0 / 1,000)"
        apiUsages="API Usage"
      />
      <SubscriptionInfo
        title="Name:"
        desc="Emmy"
        api="Email:"
        apiDesc="odejinmipromise@gmail.com"
        company="Company"
        comName="5Star Inn Company"
        notification="Notifications:"
        not="Unsubscribed"
      />
       <SubscriptionInfo
        title="Current:"
        desc="No payment methods on file"
        api="Billing period:"
        apiDesc="2023-09-01 - 2023-09-30"
        company="Total Due:"
        comName="$0.00"
      />
    </div>
  );
};

export default Subscription;
