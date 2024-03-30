import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = ({
  title,
  url,
  country,
  countryCode,
  language,
  agency,
  thumbnail,
}) => {
  return (
    <div className="bg-white border border-slate-100 rounded-lg shadow-sm relative">
      {/* <a href={url}>
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/640x320/eee/aaa"
          alt=""
        />
      </a> */}

      <div className="absolute top-0 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white border flex items-center gap-2 px-4 z-50 rounded-full">
        <span className={`fi fi-${countryCode}`}></span>
        <span className="text-xs font-bold uppercase text-slate-500 whitespace-nowrap tracking-wider leading-loose">
          {country}
        </span>
      </div>

      <div className="flex flex-col h-full text-center">
        <div className="relative rounded-t-lg overflow-hidden">
          <img src={thumbnail} alt="" />

          {thumbnail && (
            <>
              {/* <GatsbyImage image={featuredImg} alt={`Screenshot of ${title}`} /> */}
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent from-50% to-neutral-500"></div>
            </>
          )}
        </div>
        <div className="grow pt-6 px-4">
          <div className="flex">
            <div className="grow">
              <h2 className="text-2xl font-bold text-slate-700 leading-tight mb-2 text-balance bg-white/50">
                {title}
              </h2>

              {agency && (
                <h3 className="text-md text-slate-400 mb-2">{agency}</h3>
              )}
            </div>
          </div>
          <div className="text-slate-300 text-sm">{language}</div>
        </div>

        <div className="p-6">
          <a
            href={url}
            className="inline-flex items-center
          mt-2 text-xs font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
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
    </div>
  );
};

export default Card;
