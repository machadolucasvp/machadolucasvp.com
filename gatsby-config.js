/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'Lucas Machado',
    languageSkills: ['Java', 'Javascript', 'Typescript', 'C', 'Python', 'SQL'],
    languageValues: ['90%', '80%', '60%', '45%', '50%', '85%'],
    technologySkills: ['Spring Boot', 'Hibernate', 'Express', 'AdonisJs', 'React', 'CSS', 'Angular'],
    technologyValues: ['90%', '85%', '70%', '80%', '65%', '50%', '45%']
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImageToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
            },
          }
        ]
      }
    }
  ],
}
