import React, { useRef, useState, useEffect } from "react";
// import Helmet from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ModalVideo from "react-modal-video";

import Card from "components/Card";
import Layout from "components/Layout";
import Container from "components/Container";
import CommitteeItem from "../components/About/CommitteeItem";

import Img from "gatsby-image";

import Img1 from "../assets/images/ARW2019Photos/1.jpg";
import Img2 from "../assets/images/ARW2019Photos/2.jpg";
import Img3 from "../assets/images/ARW2019Photos/3.jpg";
import Img4 from "../assets/images/ARW2019Photos/4.jpg";
import Img5 from "../assets/images/ARW2019Photos/5.jpg";
import Img6 from "../assets/images/ARW2019Photos/6.jpg";
import Img7 from "../assets/images/ARW2019Photos/7.jpg";
import { graphql, useStaticQuery } from "gatsby";

const HeroSection = () => {
  let ref = useRef(null);
  let gridRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const tl = new gsap.timeline();
    const len = 7;

    for (let i = 0; i <= len - 1; ++i) {
      tl.to(
        [ref.children[i], ref.children[i].children],
        {
          duration: 1,
          ease: "Power2.easeInOut",
          y: 0,
        },
        0.15 * i
      );
    }

    for (let i = 0, len = 6; i <= len - 1; ++i) {
      tl.to(
        [ref.children[i], ref.children[i].children],
        {
          duration: 1,
          ease: "Power2.easeInOut",
          display: "none",
        },
        0.15 * i
      );
    }

    tl.to([ref.children[len - 1], ref.children[len - 1].children], {
      duration: 1,
      ease: "Expo.easeInOut",
      y: (index) => (index ? "101%" : "-101%"),
    }).fromTo(
      gridRef.children,
      {
        y: () => {
          return Math.random() * (500 - 300) + 300;
        },
      },
      {
        duration: 1 * 2,
        ease: "Expo.easeOut",
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="hero-section">
      {/* <div className="overlay"></div> */}
      <div className="header-box">
        <span className="main-title" id="whatis">
          What is
        </span>
        <br />
        <span className="main-title" id="h1">
          ARW 2020?
        </span>
        <br />
        <button className="main-button" onClick={() => setOpen(true)}>
          Watch the Video!
        </button>
      </div>
      <div
        className="grid"
        ref={(e) => {
          gridRef = e;
        }}
      >
        <div
          className="grid__item grid__item--a"
          style={{ backgroundImage: "url(" + Img1 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--b"
          style={{ backgroundImage: "url(" + Img2 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--c"
          style={{ backgroundImage: "url(" + Img3 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--d"
          style={{ backgroundImage: "url(" + Img4 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--e"
          style={{ backgroundImage: "url(" + Img5 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--f"
          style={{ backgroundImage: "url(" + Img6 + ")" }}
        ></div>
        <div
          className="grid__item grid__item--g"
          style={{ backgroundImage: "url(" + Img7 + ")" }}
        ></div>
      </div>

      <div className="layers" ref={(e) => (ref = e)}>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img1 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img2 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img3 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img4 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img5 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img6 + ")" }}
          />
        </div>
        <div className="layers__item">
          <div
            className="layers__item-img"
            style={{ backgroundImage: "url(" + Img7 + ")" }}
          />
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="nhY97tHeHWg"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

const AboutSection = () => {
  let sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    gsap.to(sectionRef.current, {
      scrollTrigger: sectionRef.current,
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="about-section">
      <div className="header-box fadeIn" ref={sectionRef}>
        <h1 className="fadeIn main-header">About ARW 2020</h1>
        <div className="sub-line"></div>
        <p className="fadeIn text-content">
          Annual Recruitment Week (ARW) 2020 is a week-long University-wide
          event. Wherein the Council of Student Organizations (CSO) accredited
          organizations are given the chance to attract and recruit old and new
          members from the Lasallian community. It serves as a platform for
          these organizations to showcase who they are and what they can provide
          to members through their planned events.
        </p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCsoTeam {
        nodes {
          head1
          head2
          listOfMembers
          teamName
          picture1 {
            fixed(height: 300, width: 300) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
          picture2 {
            fixed(width: 300, height: 300) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
      }
      allContentfulProjectHead {
        nodes {
          name
          picture {
            fixed(height: 300, width: 300) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
      }
      allContentfulEbInCharge {
        nodes {
          name
          picture {
            fixed(width: 300, height: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  `);

  return (
    <div className="team-section">
      <div className="header-box">
        <h1 className="main-header">Meet the Team</h1>
        <div className="sub-line"></div>
      </div>
      <div className="project-heads-section">
        <h1 className="sub-title">Project Heads</h1>
      </div>
      <div className="project-heads-card-container">
        {data.allContentfulProjectHead.nodes.map((node, index) => {
          return (
            <div key={node.name} className="card-wrapper">
              <Card>
                <div
                  style={{
                    height: "300px !important",
                    width: "300px !important",
                  }}
                >
                  <Img
                    alt=""
                    fixed={node.picture.fixed}
                    imgStyle={{
                      height: "300px",
                      width: "300px",
                    }}
                  ></Img>
                </div>
              </Card>
              <span className="text-content">{node.name}</span>
            </div>
          );
        })}
      </div>
      <div className="project-heads-section">
        <h1 className="sub-title">EB in-Charge</h1>
      </div>
      <div className="project-heads-card-container">
        {data.allContentfulEbInCharge.nodes.map((node) => {
          return (
            <div key={node.name} className="card-wrapper">
              <Card>
                <div
                  style={{
                    height: "300px !important",
                    width: "300px !important",
                  }}
                >
                  <Img
                    alt=""
                    fixed={node.picture.fixed}
                    imgStyle={{
                      height: "300px",
                      width: "300px",
                    }}
                  ></Img>
                </div>
              </Card>
              <span className="text-content">{node.name}</span>
            </div>
          );
        })}
      </div>

      <div className="committees-container">
        {data.allContentfulCsoTeam.nodes.map((node) => {
          return (
            <CommitteeItem key={node.teamName} name={node.teamName} members={node.listOfMembers}>
              <div className="card-wrapper">
                <Card>
                  <Img
                    alt=""
                    fixed={node.picture1.fixed}
                    imgStyle={{
                      height: "300px",
                      width: "300px",
                    }}
                  ></Img>
                </Card>
                <span className="text-content">{node.head1}</span>
              </div>
              <div className="card-wrapper">
                <Card>
                  <Img
                    alt=""
                    fixed={node.picture2.fixed}
                    imgStyle={{
                      height: "300px",
                      width: "300px",
                    }}
                  ></Img>
                </Card>
                <span className="text-content">{node.head2}</span>
              </div>
            </CommitteeItem>
          );
        })}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <Layout mainName="About" pageName="about">
      <Container>
        <HeroSection />
        <AboutSection />
        <TeamSection />
      </Container>
    </Layout>
  );
};

export default AboutPage;
