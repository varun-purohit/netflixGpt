import { useRef, useState } from "react";
import logo from "../utils/logo.svg";
import { formValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

/*
firebase data testing
*/

const Login = () => {
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleLogin() {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = formValidation(emailValue, passwordValue);

    setErrorMessage(message);
    console.log(message);
    if (message) return;

    if (login) {
      //SIGN IN
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setErrorMessage(errorMessage);
        });
    } else {
      //SIGNUP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    }
  }

  function toggleForm() {
    setLogin(!login);
  }
  return (
    <div className="relative">
      <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="  bg-black bg-opacity-80 py-12 px-16 text-white     rounded-md shadow  "
        >
          <div className="text-white">
            <h1 className="text-xl mb-4 font-bold leading-tight tracking-[1px] text-white md:text-3xl">
              {login ? "Sign In" : "Sign Up"}
            </h1>
          </div>

          {!login && (
            <div>
              <input
                type="text"
                ref={name}
                className="bg-transparent border my-4 w-[298px] border-gray-300 text-white sm:text-md rounded focus:ring-primary-600 focus:border-primary-600 block h-14 p-2.5"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="">
            <input
              type="text"
              ref={email}
              className="bg-transparent border my-4 w-[298px] border-gray-300 text-white sm:text-md rounded focus:ring-primary-600 focus:border-primary-600 block h-14 p-2.5"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="bg-transparent border my-4 w-[298px] border-gray-300 text-white sm:text-md rounded focus:ring-primary-600 focus:border-primary-600 block h-14 p-2.5"
            />
          </div>
          <p className="text-red-600 mb-2">{errorMessage}</p>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full mb-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-md px-5 py-2.5 text-center"
          >
            {login ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {login ? "New to Netflix?" : "Already a user?"}
            <a
              onClick={toggleForm}
              href="#"
              className="font-medium text-white hover:underline cursor-pointer pl-1 "
            >
              {login ? "Sign up" : "Sign in"}
            </a>
          </p>
        </form>
      </div>

      <div className="w-full h-screen">
        <div className=" h-full w-full bg-black opacity-30 absolute"></div>
        <img
          className=" h-full w-full block "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
