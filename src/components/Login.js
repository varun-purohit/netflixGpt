import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className=" ">
      <Header />
      <div className="absolute bg-black bg-gradient-to-b from-black form-90%">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="text-white w-[32%] rounded px-16 py-14 bg-black bg-opacity-80  top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]   ">
        <form className="flex-cloumn justify-center align-center">
          <h1 className=" text-3xl my-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="Full Name"
              className="w-[100%] px-2 py-4 my-2 rounded bg-[#333]"
            />
          )}

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-[100%] px-2 py-4 my-2 rounded bg-[#333]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] px-2 py-4 my-2 rounded bg-[#333]"
          />
          <button className="w-[100%] my-10 py-3  bg-red-700 rounded">
            Sign In
          </button>
          <p className="text-gray-600">
            {isSignInForm ? "New to Netflix? " : "Already Registered? "}
            <span
              className="text-white cursor-pointer "
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up now" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
