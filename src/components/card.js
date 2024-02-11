import * as React from "react";

const Card = ({ title, url, country, countryCode, language, agency }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-sm shadow-sm">
      {/* <a href={url}>
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/640x320/eee/aaa"
          alt=""
        />
      </a> */}

      <div className="flex flex-col h-full">
        <div className="grow">
          <div className="p-6">
            <div className="flex">
              <div className="">
                <span
                  className={`fi fi-${countryCode} mr-2 mb-2 border`}
                ></span>
              </div>
              <div className="">
                <span className="uppercase text-sm text-slate-400 tracking-tight">
                  {country}
                </span>{" "}
                &middot;{" "}
                <span className="text-slate-400 text-sm">{language}</span>
              </div>
            </div>
            <div className="flex">
              <div className="grow">
                <h2 className="text-2xl font-bold text-slate-500 leading-tight mb-2 text-balance">
                  {title}
                </h2>

                {agency && (
                  <h3 className="text-md text-slate-400 mb-2">{agency}</h3>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <a
            href={url}
            className="inline-flex items-center
          mt-2 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
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
