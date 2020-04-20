import Layout from '../components/Layout/layout'
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Post from '../components/Post/post'
import { Link } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
    query {
         allMarkdownRemark {
             edges {
                 node {
                     frontmatter {
                         title
                         date
                         tags
                     }
                 }
             }
         }
    }
    `)
    console.log(data)
    return (
        <Layout >

            {data.allMarkdownRemark.edges.map(e => {
                return (
                    <Post
                        title={e.node.frontmatter.title}
                        date={e.node.frontmatter.date} 
                        time= {e.node.timeToRead}
                        tags={e.node.frontmatter.tags}>
                    </Post>
                )
            })}

        </Layout>
    );
}