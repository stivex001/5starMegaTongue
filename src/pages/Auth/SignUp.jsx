/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import pics from "../../assets/Group 1.png";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Store/authSlice";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../../Store/apiBaseUrl";
import { signUpSchema } from "../../models/auths";
import { MailIcon } from "../../icons/Mail";
import { PersonIcon } from "../../icons/PersonIcon";
import { OpenEyeIcon } from "../../icons/CloseEye";

const SignUp = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  const [isUppercaseValid, setUppercaseValid] = useState(false);
  const [isSpecialCharValid, setSpecialCharValid] = useState(false);
  const [isNumberValid, setNumberValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showText, setShowText] = useState(false);

  const togglePassword = () => {
    setShowText((showText) => !showText);
  };

  const { user, registerError, regiterStatus } = useSelector(
    (state) => state.auth
  );

  console.log(regiterStatus);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [navigate, user]);

  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch
  } = form;

  const SubmitHandler = async (data) => {
    setLoading(true);
    dispatch(registerUser(data));
    setLoading(false);
  };

  const password = watch("password", "");


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isUppercaseValid = /[A-Z]/.test(newPassword);
    const isNumberValid = /[0-9]/.test(newPassword);
    const isSpecialCharValid = /[^A-Za-z0-9]/.test(newPassword);

    const doPasswordsMatch = newPassword === register.confirmPassword;
    // Update the state variables
    setUppercaseValid(isUppercaseValid);
    setSpecialCharValid(isSpecialCharValid);
    setNumberValid(isNumberValid);
    setPasswordValid(doPasswordsMatch);
  };

  return (
    <div className="h-screen overflow-x-hidden ">
      <div className="sm:flex h-screen">
        {/* Left Side */}
        <div className=" sm:flex-1 bg-purple-20 p-20 text-white ">
          <div className="flex items-center justify-center flex-col ">
            <img
              src={pics}
              alt="Welcome Back Image"
              className="sm:w-[377px] sm:h-[318px] object-cover"
            />
            <div className="my-8 flex flex-col items-center gap-3">
              <p className="text-2xl whitespace-nowrap sm:text-3xl font-semibold">
                Welcome Aboard
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
        <div className="w-full sm:flex-1 bg-white py-3 px-5 sm:py-20 sm:px-24">
          <div className="">
            <div className="text-center whitespace-nowrap text-3xl sm:text-5xl font-bold mb-8 text-purple-20">
              Create Account
            </div>
            {regiterStatus === "rejected" ? <p>{registerError}</p> : null}
            <form
              className="w-full sm:w-5/6 flex flex-col gap-5"
              onSubmit={handleSubmit(SubmitHandler)}
            >
              <div className=" md:flex items-center gap-5">
                <div className="relative w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type={"text"}
                    placeholder="John"
                    {...register("firstname")}
                    className="w-full h-12 text-sm border border-slate-200 px-4 py-3 rounded-md"
                  />
                  {/* <div className="absolute top-4 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                    <button type="button" className="button">
                      <PersonIcon />
                    </button>
                  </div> */}
                  {errors?.firstname && (
                    <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                      <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                        !
                      </div>
                      <p>{errors?.firstname?.message}</p>
                    </div>
                  )}
                </div>

                <div className="relative w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type={"text"}
                    placeholder="Doe"
                    {...register("lastname")}
                    className="w-full h-12 text-sm border border-slate-200 px-4 py-3 rounded-md"
                  />
                  {/* <div className="absolute top-2 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                    <button type="button" className="button">
                      <PersonIcon />
                    </button>
                  </div> */}
                  {errors?.firstname && (
                    <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                      <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                        !
                      </div>
                      <p>{errors?.lastname?.message}</p>
                    </div>
                  )}
                </div>
              </div>

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
                {/* <div className="absolute top-5 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                  <button type="button" className="button">
                    <MailIcon />
                  </button>
                </div> */}
              {errors?.email && (
                <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                    !
                  </div>
                  <p>{errors?.email?.message}</p>
                </div>
              )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type={!showText ? "password" : "text"}
                  placeholder="Password"
                  {...register("password")}
                  onChange={handlePasswordChange}
                  className="w-full h-12 text-sm border border-slate-200 px-4 py-3 rounded-md"
                />
                <div className="absolute top-2 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                  <button
                    type="button"
                    className="button"
                    onClick={togglePassword}
                  >
                    <OpenEyeIcon />
                  </button>
                </div>
                {errors?.password && (
                  <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                    <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                      !
                    </div>
                    <p>{errors?.password?.message}</p>
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type={!showText ? "password" : "text"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="w-full h-12 text-sm border border-slate-200 px-4 py-3 rounded-md"
                />
                <div className="absolute top-4 right-0 h-full w-14 flex items-center justify-center bg-transparent">
                  <button
                    type="button"
                    className="button"
                    onClick={togglePassword}
                  >
                    <OpenEyeIcon />
                  </button>
                </div>
                {errors?.confirmPassword && (
                  <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
                    <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
                      !
                    </div>
                    <p>{errors?.confirmPassword?.message}</p>
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="mb-8">
                <p className="text-gray-600 mb-2">Password Requirements:</p>
                <label className="flex items-center space-x-2 gap-3">
                  <input
                    type="checkbox"
                    className={`form-checkbox text-purple-20 text-sm font-normal ${
                      isUppercaseValid ? "text-green-500" : "text-red-500"
                    }`}
                    checked={isUppercaseValid}
                    disabled
                  />
                  Contains at least one uppercase letter
                </label>
                <label className="flex items-center space-x-2 gap-3">
                  <input
                    type="checkbox"
                    className={`form-checkbox text-purple-20 text-sm font-normal ${
                      isSpecialCharValid ? "text-green-500" : "text-red-500"
                    }`}
                    checked={isSpecialCharValid}
                    disabled
                  />
                  Contains at least one special character
                </label>
                <label className="flex items-center space-x-2 gap-3">
                  <input
                    type="checkbox"
                    className={`form-checkbox text-purple-20 text-sm font-normal ${
                      isNumberValid ? "text-green-500" : "text-red-500"
                    }`}
                    checked={isNumberValid}
                    disabled
                  />
                  Contains at least one number
                </label>
                {/* <label className="flex items-center space-x-2 gap-3">
                  <input
                    type="checkbox"
                    className={`form-checkbox text-purple-20 text-sm font-normal ${
                      isPasswordValid ? "text-green-500" : "text-red-500"
                    }`}
                    checked={isPasswordValid}
                    disabled
                  />
                  Passwords are matching
                </label> */}
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-bg-btn text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  {regiterStatus === "pending" ? "Registering" : "Register"}
                </button>
              </div>
            </form>

            <p className="text-[rgba(49, 46, 129, 0.80)] text-center text-[18px] font-normal">
              Already a member?{" "}
              <Link
                to="/login"
                className="text-purple-20 text-[18px] font-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
