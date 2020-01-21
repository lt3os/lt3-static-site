module.exports = {
  siteMetadata: {
    title: `lt3 - The beating 💗 of your front-end application`,
    description: `Docs pages and more`,
    author: `@tophergd and @gilstroem`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E94163`,
        theme_color: `#E94163`,
        display: `minimal-ui`,
        icon: `src/images/lt3-logo.jpeg`,
      },
    },

    `gatsby-plugin-offline`,
  ],
};
