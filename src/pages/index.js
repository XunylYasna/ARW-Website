import React from "react";
import Container from "components/Container";

import Layout from "components/Layout";
import Hero from "components/Home/Hero";
import Introduction from "components/Home/Introduction";
import Events from "components/Home/Events";
import Partners from "components/Home/Partners";

const IndexPage = () => {
  console.log(`%c
  ▒█░░░ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▄░▒█ ▒█▀▀▄
  ▒█░░░ ░▀▀▀▄▄ ▒█░░░ ░▀▀▀▄▄ 　 ▒█▄▄▀ ▒█▒█▒█ ▒█░▒█
  ▒█▄▄█ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ 　 ▒█░▒█ ▒█░░▀█ ▒█▄▄▀
  \n\t 𝒜𝓃𝓈𝒶𝓎, ℒ𝒾𝓂, 𝒮𝒽𝒾, 𝒮𝓉𝒶 ℳ𝒶𝓇𝒾𝒶 \n`, "font-family:monospace")

  return (
    <Layout mainName="Home" pageName="home">
      <Container>
        <Hero />
        <Introduction />
        <Events />
        <Partners />
      </Container>
    </Layout>
  );
};

export default IndexPage;
