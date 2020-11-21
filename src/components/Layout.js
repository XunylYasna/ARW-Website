import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "assets/stylesheets/application.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import Blob from "components/Blob";

import favicon96 from "../assets/favicon/favicon-96x96.png";
import favicon192 from "../assets/favicon/android-icon-192x192.png"
import ogCover from "../assets/static/ARW_Cover_Photo copy.png"

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
        <meta property="og:image" content={ogCover}/>
        <meta property="og:image:width" content='1880'/>
        <meta property="og:image:height" content='684'/>

        <meta developer="Lynux Ansay" site="https://github.com/XunylYasna/"></meta>
        <meta developer="Christopher Lim" site="https://github.com/cc-visionary"></meta>
        <meta developer="Carlos Shi" site="https://github.com/carlosshi1"></meta>
        <meta developer="Tyrone Sta. Maria" site="https://github.com/TyroneGithub"></meta>
        

        <meta name="title" content="DLSU CSO - ARW 2020"/>
        <meta name="description" content="Annual Recruitment Week (ARW) 2020 is a week-long University-wide event. Wherein the Council of Student Organizations (CSO) accredited organizations are given the chance to attract and recruit old and new members from the Lasallian community. "/>
        
        <meta name="keywords" content="ARW 2020, DLSU CSO ARW, DLSU Organizations, Join DLSU Organizations"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://arw.dlsu-cso.org/"/>
        <meta property="og:title" content="DLSU CSO - ARW 2020"/>
        <meta property="og:description" content="Annual Recruitment Week (ARW) 2020 is a week-long University-wide event. Wherein the Council of Student Organizations (CSO) accredited organizations are given the chance to attract and recruit old and new members from the Lasallian community. "/>
        <meta property="og:image" content={ogCover}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://arw.dlsu-cso.org/"/>
        <meta property="twitter:title" content="DLSU CSO - ARW 2020"/>
        <meta property="twitter:description" content="Annual Recruitment Week (ARW) 2020 is a week-long University-wide event. Wherein the Council of Student Organizations (CSO) accredited organizations are given the chance to attract and recruit old and new members from the Lasallian community. "/>
        <meta property="twitter:image" content={ogCover}></meta>
      </Helmet>
      <Blob numMetaballs={5} />
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
