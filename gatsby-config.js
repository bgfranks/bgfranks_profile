/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Brandon Franks",
    description: "Brandon Franks personal portfolio site",
  },
  plugins: [
    { resolve: "gatsby-plugin-styled-components" },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`],
        display: "swap",
      },
    },
  ],
}
