import { Link } from "react-router-dom";
import pics from "../../assets/Group 1.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Store/authSlice";
import { useState } from "react";
import { OpenEyeIcon } from "../../icons/CloseEye";
import { MailIcon } from "../../icons/Mail";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../models/auths";

const Login = () => {
  const dispatch = useDispatch();

  const [showText, setShowText] = useState(false);

  const togglePassword = () => {
    setShowText((showText) => !showText);
  };

  const { loginStatus } = useSelector((state) => state.auth);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(signInSchema),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const SubmitHandler = ({ email, password }) => {
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="sm:flex h-screen">
        {/* Left Side */}
        <div className="sm:flex-1 bg-purple-20 p-40 text-white  ">
          <div className="flex items-center justify-center  flex-col ">
            <img
              src={pics}
              alt="Welcome Back Image"
              className=" sm:w-[377px] sm:h-[318px] object-cover"
            />
            <div className="my-8 flex flex-col items-center gap-3">
              <p className="text-2xl whitespace-nowrap sm:text-3xl font-semibold">
                Welcome Back
              </p>
              <span className="text-base text-center sm:text-[18px] font-normal">
                Just a couple of clicks and we start
              </span>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className=" text-purple-20 p-2 w-2 h-2" />
              </div>
              <div className=" text-purple-20 bg-[#b4b7ed] w-4 h-4 rounded-full backdrop-opacity-20" />
              <div className=" text-[#b4b7ed] bg-[#b4b7ed] w-2 h-2 rounded-full backdrop-opacity-20" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:flex-1 bg-white py-3 px-5 sm:py-40 sm:px-24">
          <div className="mt-10">
            <div className="text-center sm:text-left text-3xl sm:text-5xl font-bold mb-8 text-purple-20">
              Sign In
            </div>
            <form
              className="w-full sm:w-5/6 flex flex-col gap-7"
              onSubmit={handleSubmit(SubmitHandler)}
            >
              <div className="relative">
                <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type={"text"}
                  placeholder="Email"
                  {...register("email")}
                  className="w-full text-sm border border-slate-200 px-4 py-3 rounded-md"
                />
                <div className="absolute top-5 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                  <button type="button" className="button">
                    <MailIcon />
                  </button>
                </div>
              </div>
              {errors?.email && (
                <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                    !
                  </div>
                  <p>{errors?.email?.message}</p>
                </div>
              )}

              <div className="relative">
                <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type={!showText ? "password" : "text"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full text-sm border border-slate-200 px-4 py-3 rounded-md"
                />
                <div className="absolute top-5 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                  <button
                    type="button"
                    className="button"
                    onClick={togglePassword}
                  >
                    <OpenEyeIcon />
                  </button>
                </div>
              </div>
              {errors?.password && (
                <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                    !
                  </div>
                  <p>{errors?.password?.message}</p>
                </div>
              )}

              <div className="mb-5 mt-10">
                <button
                  type="submit"
                  className="w-full bg-bg-btn text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  {loginStatus === "pending" ? "Authenticating" : "Sign In"}
                </button>
              </div>
            </form>

            <p className="text-[rgba(49, 46, 129, 0.80)] text-center text-[18px] font-normal mb-5">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-purple-20 text-[18px] font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
