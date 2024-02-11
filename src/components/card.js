import * as React from "react";

const Card = ({ title, url, country, countryCode, language, agency }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg flex flex-col">
      <div className="pt-5 px-5 grow">
        <div className="grow">
          <div className="mb-2">
            <span className={`fi fi-${countryCode} mr-2 mb-2 border`}></span>
            <span className="uppercase text-sm text-gray-500 tracking-tight">
              {country}
            </span>
          </div>

          <div className="flex">
            <div className="grow">
              <h4 className="text-lg font-bold text-gray-800 leading-tight mb-2">
                {title}
              </h4>

              {agency && (
                <div className="text-gray-400 uppercase text-sm tracking-tight leading-tight mb-2">
                  {agency}
                </div>
              )}
            </div>
          </div>

          <div className="text-gray-400 uppercase text-xs">{language}</div>
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
      <div className="px-5 py-2 border-t border-slate-300  bg-slate-100 flex justify-between">
        <div className="">
          <span className={`fi fi-${countryCode} mr-2 border`}></span>
          <span className="uppercase text-sm text-slate-400 tracking-tight">
            {country}
          </span>
        </div>
        <div className="text-slate-400">{language}</div>
      </div>
    </div>
  );
};

export default Card;
