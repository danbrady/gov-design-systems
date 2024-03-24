import * as React from "react";
import Flag from "react-flagkit";

const Card = ({ title, url, country, countryCode, language, agency }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg flex flex-col border-t-4 border-t-gray-300 relative">
      <div className="pt-5 px-5 grow">
        <div className="grow">
          <div className="flex">
            <div className="grow">
              <h4 className="text-lg font-bold text-gray-700 leading-tight mb-2 text-balance">
                <a
                  href={url}
                  className="before:content-[] absolute inset-0 z-10 p-5"
                >
                  {title}
                </a>
              </h4>

              {agency && (
                <div className="text-gray-400 uppercase text-sm text-balance tracking-tight leading-tight mb-2">
                  {agency}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="">
          <a
            href={url}
            className="inline-flex items-center
          py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Visit Site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 48 48"
            >
              <path
                d="M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z"
                fill="currentColor"
              />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </a>
        </div>
      </div>
      <div className="px-5 py-2 border-t bg-slate-100 flex gap-2">
        <Flag
          country={countryCode.toUpperCase()}
          size={24}
          className="opacity-70"
        />

        <div className="">
          <span className="uppercase text-sm text-slate-500 tracking-tight">
            {country}
          </span>
        </div>

        <div className="flex-grow text-end text-slate-400">{language}</div>
      </div>
    </div>
  );
};

export default Card;
