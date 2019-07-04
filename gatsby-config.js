module.exports = {
  siteMetadata: {
    title: "suscribeme",
    message: "Hola, estamos construyendo una experiencia increíble 🚧",
    pattern: "Arrows",
    color: "#705bc9",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: []
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
