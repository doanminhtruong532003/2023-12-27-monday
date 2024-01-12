import React, { useState } from "react";

const ProjectSetupName: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Giới hạn độ dài tối đa là 60 kí tự
    if (newValue.length <= 60) {
      // Nếu độ dài nhỏ hơn hoặc bằng 60 kí tự, cập nhật giá trị hiển thị và state
      setDisplayValue(newValue);
      setInputValue(newValue);
    } else {
      // Nếu vượt quá 60 kí tự, chỉ cập nhật giá trị hiển thị, không cập nhật state
      setDisplayValue(newValue.slice(0, 60) + "...");
    }
  };

  const handleButtonClick = () => {
    console.log("Chuyển đến trang tiếp theo");
    // Thêm logic chuyển trang tại đây
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col justify-center h-screen w-full md:w-1/2 py-12 px-9">
        <div className="flex box-initial flex-col h-128 m-auto max-w-110">
          <div className="py-0 pl-17 pr-0">
            <img
              className="h-8"
              src="https://cdn.monday.com/images/logos/logo-full-big.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-base">
              <div className="mb-12">
                <h1 className="p-0 pt-12 text-xl font-medium">
                  Let's start working together
                </h1>
              </div>
              <div className="relative box-border font-normal leading-5 font-custom ">
                <section className="flex pb-1 items-center mb-2">
                  <label htmlFor="input py-2">
                    Give your board a name, e.g. marketing plan, sales pipeline,
                    quarterly roadmap...
                  </label>
                </section>
                <div className="relative h-10 box-border">
                  <input
                    type="text"
                    value={displayValue}
                    onChange={handleInputChange}
                    placeholder="My first board"
                    className={`w-full h-full outline-none bg-transparent border rounded-small transition-colors duration-productive-medium ease-in px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-primary-text-color ${
                      inputValue.trim() !== ""
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="mb-auto">
              <div className="mb-8 mt-14 bg-allgreybackgroundcolor p-8 border rounded-lg truncate">
                In monday.com, "boards" are the place where all your content
                lives.
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-grow flex-shrink-0 basis-0 flex-row-reverse">
              {" "}
              <button
                onClick={handleButtonClick}
                disabled={!inputValue.trim()}
                className={`ml-4 px-4 py-2 rounded text-white ${
                  inputValue.trim() ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow justify-center h-screen w-full md:w-1/2">
        <div className="items-end bg-gray-100 rounded-lg flex flex-col h-full p-2 relative">
          <button className="justify-center items-center p-0 w-10 h-10 float-right z-10">
            X
          </button>
          <div className="h-551">
            <div className="bg-white box-border flex flex-col items-center h-551 overflow-y-auto pt-8 absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ease-in-out w-[90%] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] filter drop-shadow-[-10px_10px_30px_rgba(29,140,242,.3)]">
              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="ml-8">
                  <div className="flex flex-col justify-start  w-full">
                    <div
                      className={`${
                        inputValue
                          ? ""
                          : "my-3 mx-0 w-1/5 h-2 bg-colorwolfgray rounded-lg"
                      }`}
                    >
                      <h1 className="overflow-hidden text-3xl text-ellipsis whitespace-nowrap text-placeholdercolor font-semibold border border-transparent rounded min-w-0 p-0 px-1">
                        {inputValue || ""}
                      </h1>
                    </div>

                    <div className="flex flex-col justify-between mb-4 mr-8 mt-2 w-full">
                      <div className="flex flex-row h-10 pointer-events-none">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-8 overflow-auto">
                  <div className="flex flex-col gap-8">
                    <div className="justify-items-center auto-rows-auto gap-0 grid  border-layoutbordercolor rounded-b-lg"></div>
                    <div className="grid grid-cols-customTable">
                      <div className="col-span-5 mb-2 content-start items-center flex h-9">
                        <div className="bg-customblue w-1/5 h-2 rounded-lg"></div>
                      </div>
                      <div className="col-span-1">
                        <div className="border-l-4 border-customblue rounded-tl-lg">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-xl justify-start items-center flex h-9 w-full font-medium ">
                          +
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customblue ">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-xl justify-start items-center flex h-9 w-full font-medium "></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customblue ">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-xl justify-start items-center flex h-9 w-full font-medium "></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customblue ">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-xl justify-start items-center flex h-9 w-full font-medium "></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customblue rounded-bl-lg opacity-50">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full  ">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-5 mb-2 content-start items-center flex h-9">
                        <div className="bg-customgreen w-1/5 h-2 rounded-lg"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customgreen rounded-tl-lg">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full">
                          <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y border-x py-0 px-7 border-layoutbordercolor text-xl justify-start items-center flex h-9 w-full font-medium ">
                          +
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-l-4 border-customgreen rounded-bl-lg opacity-50">
                          <div className="border-t border-b py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full  ">
                            <div className="w-70 h-1 bg-colorwolfgray rounded-lg"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="border-y py-0 px-7 border-layoutbordercolor text-sm justify-start items-center flex h-9 w-full opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectSetupName);
