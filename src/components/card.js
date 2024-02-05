import * as React from "react";

const Card = ({ title, url, country, countryCode, language, agency }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg">
      {/* <a href={url}>
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/640x320/eee/aaa"
          alt=""
        />
      </a> */}

      <div className="p-5">
        <h4 className="mb-2 text-xl font-bold text-gray-900">{title}</h4>
        <a href={url}>
          {agency && (
            <div className="text-gray-400 uppercase text-sm tracking-tight">
              {agency}
            </div>
          )}
          <span className="text-gray-400 uppercase font-bold text-sm">
            {country}
          </span>{" "}
        </a>

        <div className="flex justify-between">
          <span className="text-gray-400 uppercase text-xs font-bold">
            {language}
          </span>
          <span className={`fi fi-${countryCode.toLowerCase()}`}></span>{" "}
        </div>

        <div className="">
          <a
            href={url}
            className="inline-flex items-center
          py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Visit Site
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
