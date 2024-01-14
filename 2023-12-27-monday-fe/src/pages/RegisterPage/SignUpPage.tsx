import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { submitForm } from "~/redux/constant/action";

interface FormInputs {
  email: string;
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const dispatch = useDispatch();

  const onSubmit = (data: FormInputs) => {
    dispatch(submitForm(data));
  };


  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 w-full lg:w-4/6 lg:px-8 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mb-6">
            Welcome to monday.com
          </h1>
          <p className="text-gray-500">
            Get started - it's free. No credit card needed.
          </p>

          <button className="relative w-full bg-white border border-gray-400 text-gray-900 py-2 px-4 rounded flex items-center justify-center group mt-6">
            <div className="z-10 flex items-center">
              <FcGoogle className="mr-2 " /> Continue with Google
            </div>
            <span className="absolute inset-0 bg-hoverButton opacity-0 group-hover:opacity-100 transition-opacity z-0"></span>
          </button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <span className="text-gray-500 mx-4">Or</span>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              defaultValue="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
            {errors.email && <span>Please enter a valid email address</span>}

            <input
              type="submit"
              className="relative w-full bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center group overflow-hidden font-bold"
            >
              <div className="z-10 flex items-center">Continue</div>
              <span className="absolute inset-0 bg-blue-500  opacity-40 group-hover:opacity-0 transition-opacity z-0"></span>
            </input>
          </form>

          <div className="mt-6">
            <p className="text-gray-700">
              Get started - it's free. No credit card needed.
            </p>
            <p className="text-gray-500 mt-4">
              By proceeding, you agree to the
              <a href="#_" className="text-blue-500 hover:underline ml-1">
                Terms of Service
              </a>
              and
              <a href="#_" className="text-blue-500 hover:underline ml-1">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?
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

export default React.memo(SignUpPage);
