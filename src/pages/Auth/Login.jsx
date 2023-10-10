import { Link } from "react-router-dom";
import pics from "../../assets/Group 1.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const { loginError, loginStatus } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = ({ email, password }) => {
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="flex-1 bg-purple-20 p-20 text-white ">
          <div className="flex items-center justify-center flex-col ">
            <img
              src={pics}
              alt="Welcome Back Image"
              className="w-[377px] h-[318px] object-cover"
            />
            <div className="my-8 flex flex-col items-center gap-3">
              <p className="text-3xl font-semibold">Welcome Back</p>
              <span className="text-[18px] font-normal">
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
        <div className="flex-1 bg-white py-20 px-24">
          <div className="mt-10">
            {loginStatus === "rejected" && (
              <p className="text-red-500 text-lg text-center">
                {errors.message || loginError}
              </p>
            )}
            <div className="text-5xl font-bold mb-8 text-purple-20">
              Sign In
            </div>
            <form className="w-5/6" onSubmit={handleSubmit(SubmitHandler)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 mb-2 text-base font-normal"
                >
                  Email
                </label>
                <div className="flex items-center justify-between w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    className="focus:outline-none"
                    {...register("email")}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M17.3014 12.7722C21.798 9.50555 23.4175 8.30129 24.5 7.46876V17.0312C24.5 18.0491 23.6741 18.875 22.6562 18.875H2.34375C1.32595 18.875 0.5 18.0491 0.5 17.0312V7.47341C1.5836 8.30545 3.20752 9.506 7.70373 12.7724C7.84181 12.8732 8.00292 12.9974 8.18164 13.1353C8.61629 13.4705 9.15508 13.8861 9.72005 14.2397C10.5243 14.7432 11.4902 15.197 12.4994 15.1924C13.5151 15.1998 14.493 14.7374 15.3012 14.2303C15.8681 13.8745 16.4076 13.4574 16.8349 13.127C17.0116 12.9904 17.1691 12.8687 17.3014 12.7722ZM12.5086 12.6251L12.5 12.6249L12.4914 12.6251C12.3094 12.6282 12.0706 12.571 11.7777 12.443C11.4896 12.3171 11.1808 12.1368 10.8676 11.9286C10.4502 11.6511 10.0731 11.3593 9.7355 11.098C9.54815 10.953 9.37296 10.8174 9.20982 10.6989L9.20968 10.6988C3.21033 6.34513 2.34936 5.67132 1.0725 4.67203C0.971409 4.59292 0.867711 4.51176 0.758651 4.42658C0.593396 4.29491 0.5 4.10159 0.5 3.89648V2.96875C0.5 1.95095 1.32595 1.125 2.34375 1.125H22.6562C23.6741 1.125 24.5 1.95095 24.5 2.96875V3.89648C24.5 4.10531 24.4038 4.3005 24.2443 4.42429L24.2422 4.42591C24.1578 4.49213 24.0766 4.5559 23.9973 4.61814C22.6805 5.65218 21.8999 6.26513 15.7903 10.6988L15.7902 10.6989C15.627 10.8174 15.4518 10.953 15.2645 11.098C14.9269 11.3593 14.5498 11.6511 14.1324 11.9286C13.8192 12.1368 13.5104 12.3171 13.2223 12.443C12.9294 12.571 12.6906 12.6282 12.5086 12.6251Z"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-600 mb-2 text-base font-normal"
                >
                  Password
                </label>
                <div className="flex items-center justify-between w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="focus:outline-none"
                    {...register("password")}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      opacity="0.5"
                      d="M17.7693 13.1246L17.2761 12.7433L15.7409 11.5566L15.4568 11.337L15.5742 10.9975C15.686 10.6744 15.7453 10.3354 15.7499 9.99352L17.7693 13.1246ZM17.7693 13.1246L18.0344 12.5604M17.7693 13.1246L18.0344 12.5604M18.0344 12.5604C18.3974 11.788 18.6248 10.9286 18.6249 10.0004M18.0344 12.5604L18.6249 10.0004M12.2558 6.76321C12.5471 6.73647 12.8416 6.74966 13.131 6.80322C13.6233 6.8943 14.0874 7.09957 14.486 7.40254C14.8846 7.70552 15.2066 8.09775 15.4261 8.54773C15.6456 8.99769 15.7565 9.49285 15.7499 9.99344L12.2558 6.76321ZM12.2558 6.76321C12.3338 6.99923 12.3744 7.24754 12.3749 7.49922L12.3749 7.51069L12.3744 7.52216C12.3669 7.69039 12.3412 7.85731 12.2977 8.01998L12.1035 8.74582L11.5089 8.28635L8.63355 6.06408L8.14136 5.68368L8.61869 5.28479C9.70735 4.37503 11.0807 3.87615 12.4995 3.8751L12.4996 3.8751C13.3041 3.87466 14.1008 4.03279 14.8441 4.34045C15.5875 4.64812 16.2629 5.09928 16.8318 5.66816C17.4007 6.23703 17.8518 6.91245 18.1595 7.65581C18.4672 8.39916 18.6253 9.19587 18.6249 10.0004M12.2558 6.76321L18.6249 10.0004M12.4999 16.1251L12.5045 16.1251C12.799 16.1223 13.0929 16.0984 13.3838 16.0534L14.3887 16.831C13.7708 16.939 13.1414 17.0001 12.4999 17.0001C7.89945 17.0001 3.87078 14.3215 1.83146 10.3437C1.77782 10.2372 1.74988 10.1196 1.74988 10.0003C1.74988 9.88098 1.77783 9.76333 1.8315 9.65678C2.13735 9.05964 2.50434 8.49905 2.90955 7.95969L6.44047 10.6885C6.78425 13.7424 9.34679 16.1251 12.4999 16.1251ZM20.1179 14.1748L19.6442 14.574L20.1343 14.9528L24.4517 18.2895C24.4518 18.2896 24.4519 18.2897 24.4521 18.2898C24.478 18.3101 24.4949 18.3399 24.499 18.3726C24.5032 18.4055 24.4941 18.4387 24.4737 18.4649L23.7066 19.4519L23.7066 19.4519C23.6965 19.4649 23.684 19.4757 23.6697 19.4838C23.6554 19.492 23.6397 19.4972 23.6234 19.4992C23.6071 19.5013 23.5906 19.5001 23.5748 19.4957C23.5589 19.4914 23.5441 19.4839 23.5311 19.4739L23.5298 19.4728L0.548205 1.71088C0.548083 1.71078 0.547961 1.71068 0.547839 1.71059C0.52188 1.69025 0.505007 1.66046 0.500909 1.62773C0.496792 1.59483 0.505908 1.56166 0.526252 1.53548L0.526356 1.53535L1.29311 0.548302C1.29312 0.548282 1.29314 0.548261 1.29315 0.548241C1.30322 0.5353 1.31574 0.524467 1.32999 0.516357C1.34426 0.508236 1.36 0.503006 1.37629 0.500967C1.39259 0.498928 1.40912 0.500121 1.42496 0.504476C1.44079 0.508831 1.45561 0.516263 1.46857 0.526349L1.46857 0.526351L1.46987 0.52735L6.4394 4.36837L6.69798 4.56823L6.98481 4.41159C8.67646 3.48777 10.5726 3.0025 12.5001 3.0001C17.1005 3.00018 21.1291 5.67882 23.1683 9.65666C23.2219 9.76314 23.2498 9.88069 23.2498 9.99991C23.2498 10.1191 23.2219 10.2367 23.1683 10.3432C22.4155 11.8099 21.3786 13.1124 20.1179 14.1748Z"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-4 mt-14">
                <button
                  type="submit"
                  className="w-full bg-bg-btn text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  {loginStatus === "pending" ? "Authenticating" : "Sign In"}
                </button>
              </div>
            </form>

            <p className="text-[rgba(49, 46, 129, 0.80)] text-center text-[18px] font-normal">
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
