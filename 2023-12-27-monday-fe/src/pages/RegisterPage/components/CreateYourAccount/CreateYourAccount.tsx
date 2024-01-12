import React from "react";

import { NavLink } from "react-router-dom";

const CreateYourAccount: React.FC = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 w-full lg:w-4/6 lg:px-8 lg:py-24">
        <div className="max-w-lg mx-auto">
          <div className="max-w-lg mx-auto text-center mb-9">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Create your account
            </h1>
          </div>

          <form action="" className="space-y-4 w-full max-w-md mx-auto">
            <label htmlFor="full-name" className="block text-gray-700">
              Full name
            </label>
            <input
              id="full-name"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm hover:border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
            />

            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm hover:border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter at least 8 characters"
            />

            <label htmlFor="account-name" className="block text-gray-700">
              Account name
            </label>
            <input
              id="account-name"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm hover:border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="For example, company's or department's name"
            />

            <NavLink
              to="/create-industry-role"
              className="block bg-blue-800 text-white text-center font-bold py-2 rounded hover:bg-blue-700 transition-colors w-full"
            >
              Continue
            </NavLink>
          </form>
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

export default React.memo(CreateYourAccount);
