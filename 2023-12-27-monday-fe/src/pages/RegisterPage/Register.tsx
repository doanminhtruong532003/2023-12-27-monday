import React from "react";

import { FcGoogle } from "react-icons/fc";

const RegisterPage: React.FC = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 w-full lg:w-4/6 lg:px-8 lg:py-24">
        <div className="max-w-lg mx-auto">
          <div className="max-w-lg mx-auto text-center mb-9">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome to monday.com
            </h1>
            <p className="mt-4 text-gray-500">
              Get started - it's free. No credit card needed.
            </p>
          </div>

          <button className="relative w-full bg-white border border-gray-400 text-gray-900 font-normal py-2 px-4 rounded flex items-center justify-center group">
            <div className="z-10 flex items-center">
              <FcGoogle className="mr-2 " /> Continue with Google
            </div>
            <span className="absolute inset-0 bg-hoverButton opacity-0 group-hover:opacity-100 transition-opacity z-0"></span>
          </button>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 font-bold">Or</span>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
          </div>

          <form action="" className="w-full mx-auto  space-y-4">
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm hover:border-gray-200"
              placeholder="Enter email"
            />

            <div className="flex items-center justify-between">
              <button className="relative w-full bg-blue-800 border text-white font-bold py-2 px-4 rounded flex items-center justify-center group overflow-hidden">
                <div className="z-10 flex items-center">Continue</div>
                <span className="absolute inset-0 bg-blue-500  opacity-40 group-hover:opacity-0 transition-opacity z-0"></span>
              </button>
            </div>
          </form>

          <div className="max-w-lg mx-auto text-center mb-9">
            <p className="mt-4 text-gray-700">
              Get started - it's free. No credit card needed.
            </p>
            <p className="mt-4 text-gray-500">
              <a href="#_" className="text-blue-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#_" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-auto">
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="#_" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className="relative h-full w-full lg:w-2/6">
        <img
          alt="Welcome"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default React.memo(RegisterPage);
