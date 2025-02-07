import { useState } from "react";

const optionsArr = ["Name", "Username"];

const CenterSearch = ({
  darkTheme,
  onSearchChange,
  selectedOption,
  setSelectedOption,
}: {
  darkTheme: boolean;
  onSearchChange: any;
  selectedOption: string;
  setSelectedOption: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-[1200px] mx-auto px-3 mb-7">
      <h1
        className={
          darkTheme
            ? "lg:text-6xl sm:text-4xl text-xl font-bold text-center text-white mb-6"
            : "lg:text-6xl sm:text-4xl text-xl font-bold text-center text-[#4dabf7] mb-6"
        }
      >
        In this platform you can find <br /> whoever you would love!
        <br /> Give it a shot and Try!
      </h1>
      <div className="w-full flex sm:flex-row flex-col justify-center gap-2">
        <input
          type="text"
          onChange={(e) => onSearchChange(e.target.value.toLocaleLowerCase())}
          className={
            darkTheme
              ? "sm:w-7/12 w-full rounded-md shadow-xl px-4 py-5 text-lg lg:text-2xl focus:outline-none bg-[#191919] text-white"
              : "sm:w-7/12 w-full rounded-md shadow-xl px-4 py-5 text-lg lg:text-2xl focus:outline-none"
          }
          placeholder="Try to type something..."
        />
        <button
          type="button"
          onClick={toggleDropdown}
          className={
            darkTheme
              ? "md:min-w-[150px] sm:w-5/12 w-full bg-[#191919] text-white rounded-md md:text-base text-sm relative flex justify-between items-center  shadow-lg px-4 py-3 hover:cursor-pointer"
              : "md:min-w-[150px] sm:w-5/12 w-full rounded-md md:text-base text-sm bg-white relative flex justify-between items-center  shadow-lg px-4 py-3 hover:cursor-pointer"
          }
        >
          {selectedOption}
          <svg
            className={`text-black w-4 h-4 transition-transform duration-300 ${
              isOpen && "rotate-180"
            } ${darkTheme ? "text-white" : "text-black"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
              fill="currentColor"
            />
          </svg>
          {isOpen && (
            <div
              className={`absolute sm:top-18 top-12 right-0 w-full md:text-base text-sm ${
                darkTheme ? "bg-[#303a38]" : "bg-white"
              } ${
                darkTheme ? "text-white" : "text-[#222]"
              } shadow-lg rounded-lg md:min-w-[150px]`}
            >
              <ul className="w-full">
                {optionsArr.map((item: any, index: number) => (
                  <li
                    key={index}
                    onClick={() => setSelectedOption(item)}
                    className={`px-4 py-2 ${
                      darkTheme ? "hover:bg-[#6e7574]" : "hover:bg-blue-100"
                    } cursor-pointer text-inherit ${
                      index + 1 === optionsArr.length && "rounded-b-lg"
                    } ${index === 0 && "rounded-t-lg"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default CenterSearch;
