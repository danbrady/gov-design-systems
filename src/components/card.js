import * as React from "react"
import { Link } from "gatsby"

const Card = ({ title }) => (
  <div className="card w-96 relative">
    <div className="absolute  center uppercase bg-white rounded-full px-4 py-1 border -top-1/3">
      Country
    </div>
    <div className="rounded-lg aspect-video bg-gray-600"></div>
    <div className="px-4 py-2 text-center">
      <h2 className="font-serif text-2xl font-bold my-2">{title}</h2>
      <h3 className="font-bold text-base my-2">Federal Chancery</h3>
      <h4 className="uppercase text-slate-700 text-xs my-2">
        English : Français : Deutsch
      </h4>
      <a href="" className="">
        link site
      </a>
    </div>
  </div>
)

export default Card
