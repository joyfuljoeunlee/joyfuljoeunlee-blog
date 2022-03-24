module.exports = {
  siteMetadata: {
    title: `JOEUN LEE`,
    description: `웹 프론트엔드 개발자의 성장 블로그`,
  },

  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://admin.joyfuljoeunlee.dev`,
        contentApiKey: `ca2b26d79b672c187b9acf60f7`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `웹 프론트엔드 개발자의 성장 블로그`,
        short_name: `웹 프론트엔드 개발자의 성장 블로그`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/memoji.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
