import React from "react";
import { Dom } from "react-three-fiber";
import { Block, useBlock } from "components/ThreeJSComponents/blocks";

import img1 from "../../assets/images/Clusters/ENGAGE_(JAPAN).png";

function Plane({ color = "white", map, ...props }) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane
        scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
        color="#bfe2ca"
        map={map}
      />
      {children}
    </group>
  );
}

const Hero = () => (
  <section className="hero">
    <h1
      style={{
        textTransform: `uppercase`,
        textWrap: `wrap`,
        width: `500px`,
        textAlign: `center`,
      }}
    >
      Welcome to Animo City
    </h1>
    <button>Explore Map</button>
  </section>
);

export default Hero;
