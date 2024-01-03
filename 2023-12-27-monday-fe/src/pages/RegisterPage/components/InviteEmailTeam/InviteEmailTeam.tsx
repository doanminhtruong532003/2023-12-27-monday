import React from "react";

const InviteEmailTeam: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-screen h-screen flex flex-wrap">
        {/* Blue container */}
        <div className="h-full w-3/5 flex flex-col">
          <div className="pt-16 pl-24 md:pt-24 md:pl-32 lg:pt-32 lg:pl-40 h-screen">
            <div className="mb-16">
              <img
                className="mb-12 w-28 h-8 object-fit-contain"
                src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/logos/monday.png"
                alt="Monday Logo"
              />
              <div className="mb-2 font-medium text-2xl leading-7">
                <h2>Who else is on your team?</h2>
              </div>
            </div>
            <div className="bg-blue h-3/5  content-wrapper flex-10  overflow-y-auto w-3/4">
              <div className=" flex flex-col mb-40">
                <label htmlFor="invite-link-input ">
                  <h6>Invite with link (anyone with a @ email)</h6>
                </label>
                <div className="flex mb-4">
                  <div className="flex flex-grow justify-center">
                    <input
                      className="border-2 border-wolf-gray border-solid rounded-sm rounded-tr-none border-r-0 focus:outline-none text-asphalt flex-grow text-base md:text-lg font-normal h-10 md:h-12 leading-10 md:leading-12 p-1 md:p-3"
                      type="text"
                      placeholder="Your link invite teams"
                    />
                    <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-20 md:w-32 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                      Copy
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <input
                      className="border-2 border-wolf-gray border-solid rounded-sm rounded-tr-none border-r-0 focus:outline-none text-asphalt flex-grow text-base md:text-lg font-normal h-10 md:h-12 leading-10 md:leading-12 p-1 md:p-3"
                      type="text"
                      placeholder="Your link invite teams"
                    />
                    <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-20 md:w-32 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                      Copy
                    </button>
                  </div>
                </div>{" "}
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <input
                      className="border-2 border-wolf-gray border-solid rounded-sm rounded-tr-none border-r-0 focus:outline-none text-asphalt flex-grow text-base md:text-lg font-normal h-10 md:h-12 leading-10 md:leading-12 p-1 md:p-3"
                      type="text"
                      placeholder="Your link invite teams"
                    />
                    <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-20 md:w-32 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                      Copy
                    </button>
                  </div>
                </div>
                <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-4/6 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                  Add another
                </button>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="flex items-end flex-1 mt-spacing-small">
              <div className="flex flex-row justify-between w-full">
                <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-2/4 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                  Remind me later
                </button>
                  <button className="border border-wolf_gray border-solid rounded-r-sm text-base w-2/4 h-10 md:h-12 px-3 md:px-5 focus:outline-none hover:bg-gray-300 transition-colors duration-300">
                    Invite your team
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div className="h-screen w-2/5">
          <img
            className="w-full h-full object-cover"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
            alt="Teammates"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(InviteEmailTeam);
