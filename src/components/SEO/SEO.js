import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery } from "gatsby"

const SEO = ({ pageTitle, postNode, postPath }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    )
    let title = pageTitle ? `${pageTitle} | ${site.siteMetadata.title}` : site.siteMetadata.title
    let description = site.siteMetadata.description
    let url = site.siteMetadata.siteUrl

    if(postNode) {
        const postMeta = postNode.frontmatter
        description = postNode.excerpt
        url = `${url}${postPath}`
    }

    return (
        <Helmet defaultTitle={title}>
            <meta
                property="og:url"
                content={url}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}

SEO.propTypes = {

}

export default SEO
