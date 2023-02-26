/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "machadolucasvp",
        description:
            "Software Engineer and Engineering Lead. This website is my small corner of the web for sharing thoughts, experiences, and insights with the world.",
        author: "Lucas Machado",
        siteUrl: "https://www.machadolucasvp.com"
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-transition-link",
            options: {
                layout: require.resolve("./src/components/Layout/layout.js"),
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/pages`,
            },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                            linkImageToOriginal: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-prismjs",
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
                    },
                ],
            },
        },
    ],
}
