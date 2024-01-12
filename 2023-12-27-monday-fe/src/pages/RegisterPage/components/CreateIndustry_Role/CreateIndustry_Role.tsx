import React from "react";
import { NavLink } from "react-router-dom";

interface OptionsFormProps {
  questionId: number; // Define the type for questionId as number
}

const OptionsForm: React.FC<OptionsFormProps> = ({ questionId }) => (
  <div className="mb-8">
    <label
      htmlFor={`question_${questionId}`}
      className="block text-gray-700 font-bold text-2xl mb-2"
    >
      Hey there, what brings you here today?
    </label>
    <div id={`question_${questionId}`} className="flex items-center space-x-2">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="flex items-center border-gray-300 border p-2 rounded-xl"
        >
          <input
            type="radio"
            id={`option${questionId}_${index}`}
            name={`question${questionId}_options`}
            className="text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`option${questionId}_${index}`}
            className="text-gray-700  ml-2"
          >
            Option {index + 1}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const CreateIndustry_Role: React.FC = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 w-full lg:w-4/6 lg:px-8 lg:py-24">
        <div className="w-full max-w-lg mx-auto space-y-4 p-4">
          <OptionsForm questionId={1} />
          <OptionsForm questionId={2} />

          <NavLink
            to="/create-focus-first"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              {/* SVG icon for the arrow */}
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease"></span>
            <span className="relative">Continue</span>
          </NavLink>
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

export default React.memo(CreateIndustry_Role);
