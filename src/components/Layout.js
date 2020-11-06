import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "assets/stylesheets/application.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import Blob from "components/Blob";

import favicon96 from "../assets/favicon/favicon-96x96.png";
import favicon192 from "../assets/favicon/android-icon-192x192.png"

const Layout = ({ children, mainName, pageName }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet
        bodyAttributes={{ class: className }}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            href: `${favicon96}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: `${favicon192}`
          }
        ]}
      >
        <title>ARW 2020 || {mainName ? mainName : pageName}</title>
      </Helmet>
      <Blob numMetaballs={40} />
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
