/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import CustomButton from "../utils/CustomButton";

const PriceCard = ({ desc, price, btn }) => {
  return (
    <div className="bg-white shadow-lg h-[728px] rounded-xl">
      <div className="px-6 py-10 ">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 h-[564px]">
            <p className="text-xl font-bold text-purple-20">{desc}</p>
            <div className="flex items-center gap-2">
              <p className="text-dark-20 text-[44px] font-bold">${price}</p>
              <span className="text-base font-bold text-gray-400 pt-4">
                /month
              </span>
            </div>
            <span className="text-base font-normal text-gray-400 max-w-[312px]">
              The essensitals to provide your best work for clients.
            </span>
            <div className="flex flex-col gap-3 pt-4">
              {/* Free */}
              {desc === "Free" && (
                <>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      5 Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Up to 500 subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Basic analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      48-hour support response time
                    </span>
                  </div>
                </>
              )}

              {/* Silver */}
              {desc === "Silver" && (
                <>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      25 Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Up to 10,000 subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Advanced analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      24-hour support response time
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Marketing advisor
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Custom integration
                    </span>
                  </div>
                </>
              )}

              {/* Gold */}
              {desc === "Gold" && (
                <>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Unlimited projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Unlimited subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Custom analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      1-hour support response time
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Marketing advisor
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Custom integration
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Private slack channel
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0893 4.91073C18.4147 5.23617 18.4147 5.76381 18.0893 6.08925L8.08926 16.0892C7.76382 16.4147 7.23619 16.4147 6.91075 16.0892L1.91075 11.0892C1.58531 10.7638 1.58531 10.2362 1.91075 9.91073C2.23619 9.5853 2.76382 9.5853 3.08926 9.91073L7.50001 14.3215L16.9107 4.91073C17.2362 4.5853 17.7638 4.5853 18.0893 4.91073Z"
                        fill="#10B981"
                      />
                    </svg>
                    <span className="text-sm font-normal text-dark-20">
                      Tracking customers flow
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <CustomButton className="flex justify-center">
              {btn}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
