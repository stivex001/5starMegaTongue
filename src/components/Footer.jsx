import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import CustomButton from "../utils/CustomButton";

const Footer = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <footer className="py-16 mt-40 overflow-x-hidden">
      <div className="mx-auto w-5/6 gap-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="  text-[#e1e1e4] tex-xl font-bold">Solutions</h4>
          <p className="my-5 font-normal text-sm text-dark-20">Marketing</p>
          <p className="my-5 font-normal text-sm text-dark-20">Analytics</p>
          <p className="my-5 font-normal text-sm text-dark-20">Commerce</p>
          <p className="my-5 font-normal text-sm text-dark-20">Insights</p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="  text-[#e1e1e4] tex-xl font-bold">Support</h4>
          <p className="my-5 font-normal text-sm text-dark-20">Pricing</p>
          <p className="my-5 font-normal text-sm text-dark-20">Documentation</p>
          <p className="my-5 font-normal text-sm text-dark-20">Guides</p>
          <p className="my-5 font-normal text-sm text-dark-20">API Status</p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="  text-[#e1e1e4] tex-xl font-bold">Company</h4>
          <p className="my-5 font-normal text-sm text-dark-20">About</p>
          <p className="my-5 font-normal text-sm text-dark-20">Blogs</p>
          <p className="my-5 font-normal text-sm text-dark-20">Jobs</p>
          <p className="my-5 font-normal text-sm text-dark-20">Press</p>
          <p className="my-5 font-normal text-sm text-dark-20">Partner</p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="  text-[#e1e1e4] tex-xl font-bold">Legal</h4>
          <p className="my-5 font-normal text-sm text-dark-20">Claim</p>
          <p className="my-5 font-normal text-sm text-dark-20">Privacy</p>
          <p className="my-5 font-normal text-sm text-dark-20">Terms</p>
        </div>
        <div className="mt-16 md:basis-1/2 sm:mt-0">
          <h4 className="  text-[#e1e1e4] tex-xl font-bold whitespace-nowrap">
            Subscribe to our newsletter
          </h4>
          <p className="my-5 font-normal text-sm text-dark-20 md:max-w-xs">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex items-center gap-3 flex-wrap mb-10 md:mb-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-1.5 px-3"
            />
            <CustomButton className="w-fit py-2 px-6 border-2 outline-[rgba(18, 17, 39, 0.12)]">
              Subscribe
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={`${flexBetween} flex-wrap mx-auto w-5/6 gap-16 sm:flex`}>
        <div>
          <p className="font-normal text-sm text-gray-400">
            &copy; 2023 megatongue. All rights reserved
          </p>
        </div>
        <div className="flex items-center gap-10 text-gray-400">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
