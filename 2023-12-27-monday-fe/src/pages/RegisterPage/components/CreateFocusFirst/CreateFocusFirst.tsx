import React from "react";

interface OptionProps {
  id: string;
  label: string;
}

interface RowProps {
  row: OptionProps[];
  rowIndex: number;
}

const CreateFocusFirst: React.FC = () => {
  const options = Array.from({ length: 9 }, (_, index) => ({
    id: `option1_${index}`,
    label: `Tùy chọn ${index + 1}`,
  }));

  const chunkedOptions = chunkArray(options, 3);

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 w-full lg:w-4/6 lg:px-8 lg:py-24">
        <div className="max-w-lg mx-auto">
          <div className="w-full mx-auto space-y-4">
            {/* Form 1 */}
            <form action="">
              <label className="block text-gray-700 font-bold text-2xl mb-2">
                One last question, how did you hear about us?
              </label>
              {chunkedOptions.map((row, rowIndex) => (
                <Row key={rowIndex} row={row} rowIndex={rowIndex} />
              ))}
            </form>

            <div className="flex items-center justify-between">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Continue
                </span>
                <span className="relative invisible">Continue</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full lg:w-2/6">
        <img
          alt="Welcome"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

const Row: React.FC<RowProps> = ({ row, rowIndex }) => (
  <div className="flex items-center space-x-2 mb-4">
    {row.map((option) => (
      <Option key={option.id} id={option.id} label={option.label} />
    ))}
  </div>
);

const Option: React.FC<OptionProps> = ({ id, label }) => (
  <div className="flex items-center border-gray-300 border p-2 rounded-xl">
    <input type="radio" id={id} name="options" />
    <label htmlFor={id} className="text-gray-700 ml-2">
      {label}
    </label>
  </div>
);

// Function to chunk an array into smaller arrays
const chunkArray = <T extends unknown>(array: T[], size: number): T[][] => {
  return array.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, [] as T[][]);
};

export default React.memo(CreateFocusFirst);
