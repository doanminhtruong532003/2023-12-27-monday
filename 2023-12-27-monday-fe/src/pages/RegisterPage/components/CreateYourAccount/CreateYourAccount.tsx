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

          <form action="" className="w-full mx-auto  space-y-4">
            <span>Full name</span>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm hover:border-gray-200"
              placeholder="Enter your full name"
            />
            <span>Password</span>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm hover:border-gray-200"
              placeholder="Enter at least 8 characters"
            />
            <span>Account name</span>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm hover:border-gray-200"
              placeholder="For example, company's or department's name"
            />

            <div className="flex items-center justify-between">
              <NavLink
                to="/create-industry-role"
                className="relative w-full bg-blue-800 border text-white font-bold py-2 px-4 rounded flex items-center justify-center group overflow-hidden"
              >
                <div className="z-10 flex items-center">Continue</div>
                <span className="absolute inset-0 bg-blue-500  opacity-40 group-hover:opacity-0 transition-opacity z-0"></span>
              </NavLink>
            </div>
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
