import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="bg-sky-500 text-white py-3">
    <Link to="/" className="text-white">
      {siteTitle}
    </Link>
  </header>
);

export default Header;
