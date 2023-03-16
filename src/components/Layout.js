import React from "react";
import { Footer } from "./Footer";
import { Heder } from "./Heder";

export const Layout = ({ children }) => {
  return (
    <>
      {/* <!-- Dark mode Button --> */}

      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        <Heder />

        {/* dynamic page container */}

        {children}

        <Footer />
      </div>
    </>
  );
};
