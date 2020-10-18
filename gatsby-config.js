module.exports = {
  siteMetadata: {
    author: "Amar Zia Arslaan",
    title: "Gatsby Starter Template sasslan",
  },
  pathPrefix: "/gatsby-starter-sasslan",
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `source sans pro\:300,400,400i,700`,
          // `IBMPlexMono\:400, 700`,
          `Montserrat\:400`,
          `Staatliches\:400`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // Contentful API
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ma9m10t6uqcv`,
        accessToken: `IHjkXTfLrpN4IPyJ4HR_0YRuTgf8bGTGh0xYGtH8RvE`,
      },
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-svg-sprite",
    "gatsby-plugin-scroll-reveal",
  ],
};
