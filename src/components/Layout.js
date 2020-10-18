import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "assets/stylesheets/application.scss";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children, pageName }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>ARW 2020 || {pageName}</title>
      </Helmet>
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#A7F0BA"
            d="M40.9,-51.7C51.5,-39.9,57.5,-25.5,62.4,-9.2C67.4,7,71.3,25.2,63.5,34.8C55.7,44.3,36.2,45.1,20.1,47.6C4,50.1,-8.6,54.3,-25.7,54.9C-42.8,55.5,-64.3,52.5,-68.3,41.4C-72.3,30.3,-58.9,11.2,-51.6,-5.4C-44.3,-22.1,-43.2,-36.1,-35.6,-48.4C-28.1,-60.8,-14,-71.4,0.6,-72C15.2,-72.7,30.3,-63.5,40.9,-51.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
