import React, { useRef, useEffect } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";

import Container from "components/Container";
import Hero from "components/Home/Hero";
import Introduction from "components/Home/Introduction";
import Events from "components/Home/Events";

import { Canvas, Dom } from "react-three-fiber";
import { Block, useBlock } from "components/ThreeJSComponents/blocks";
import { Html } from "@react-three/drei";
import state from "components/ThreeJSComponents/state";

const HTMLContent = ({ children }) => {
  return (
    <Block factor={1.5} offset={1}>
      <group position={(0, 0, 0)}>
        <Html
          fullscreen
          style={{
            top: 0,
            left: 0,
          }}
        >
          {children}
        </Html>
      </group>
    </Block>
  );
};

const IndexPage = () => {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Layout pageName="home">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <Canvas
          concurrent
          colorManagement
          camera={{ position: [0, 0, 120], fov: 70 }}
        >
          <HTMLContent>
            <Container>
              <Hero />
              <Introduction />
              <Events />
            </Container>
          </HTMLContent>
        </Canvas>
      </Layout>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
};

export default IndexPage;
