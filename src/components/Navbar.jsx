/* eslint-disable react/no-unknown-property */
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../utils/CustomButton";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { logOutUser } from "../Store/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width: 1068px)");

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [showMenuList, setShowMenuList] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userData = user?.data?.user;

  console.log(user?.data, "gusgu");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowList = () => {
    setShowMenuList(!showMenuList);
  };

  const menuRef = (useRef < HTMLDivElement) | (null > null);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenuList(false);
      }
    };

    // Add a click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuRef]);

  const handleLogout = () => {
    dispatch(logOutUser());
    setShowMenuList(false);
    toast.warning("Logged Out Successfully", { position: "bottom-left" });
  };

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-white`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img src={Logo} alt="megatongue" className="w-12 h-12" />
              <Link
                to="/"
                className="text-purple-20 text-2xl font-poppins font-semibold"
              >
                MegaTongue
              </Link>
            </div>

            {/* Right Side */}
            {isAboveMediaScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div
                  className={`${flexBetween} gap-8 text-black text-xl font-normal leading-normal md:ml-60`}
                >
                  <Link to="/pricing" className="">
                    Pricing
                  </Link>
                  <Link to="#">API Documentation</Link>
                  {/* <Link to="#">Pricing</Link> */}
                </div>
                <div className={`${flexBetween} gap-8 text-xl font-normal`}>
                  <div className="relative">
                    {userData ? (
                      <CustomButton
                        className="bg-light-gray text-purple-20 w-fit"
                        onClick={handleShowList}
                      >
                        {userData?.firstname}
                      </CustomButton>
                    ) : (
                      <CustomButton
                        className="bg-light-gray text-purple-20 w-fit"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </CustomButton>
                    )}
                    {showMenuList && (
                      <div className="absolute w-[172px] bg-white shadow-md">
                        <div className="py-3 px-2">
                          <div className="flex flex-col gap-2 ">
                            <Link
                              to="/"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              Home
                            </Link>
                            <Link
                              to="/upgrade"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              Upgrade
                            </Link>
                            <Link
                              to="/subscription-plan"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              Subscription Plan
                            </Link>
                            <Link
                              to="/profile"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              Account{" "}
                            </Link>
                            <Link
                              to="/payment"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              Payment{" "}
                            </Link>
                            <Link
                              to="/api-usage"
                              className=" text-base font-normal hover:text-purple-20 transition"
                              onClick={() => setShowMenuList(false)}
                            >
                              API Usage{" "}
                            </Link>
                            <p
                              onClick={handleLogout}
                              className=" text-base font-normal hover:text-purple-20 transition cursor-pointer"
                            >
                              Signout{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M31 1H1M31 11H1M31 21H1"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> */}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-purple-20 p-2 "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 22"
                  fill="#fff"
                  className="cursor-pointer"
                >
                  <path
                    d="M31 1H1M31 11H1M31 21H1"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediaScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-purple-20 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-10 w-10 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <div className={`ml-[20%] flex flex-col gap-10 text-2xl`}>
            <div className="flex flex-col gap-8 text-xl font-normal text-white ">
              <Link
                to="/"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                Home
              </Link>
              <Link
                to="/upgrade"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                Upgrade
              </Link>
              <Link
                to="/subscription-plan"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                Subscription Plan
              </Link>
              <Link
                to="/profile"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                Account{" "}
              </Link>
              <Link
                to="/payment"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                Payment{" "}
              </Link>
              <Link
                to="/api-usage"
                className=" text-base font-normal hover:text-slate-400 transition"
                onClick={() => setIsMenuToggled(false)}
              >
                API Usage{" "}
              </Link>
              <p
                onClick={handleLogout}
                className=" text-base font-normal hover:text-slate-400 transition cursor-pointer"
              >
                Signout{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
