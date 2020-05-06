import Layout from '../components/Layout/layout'
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Post from '../components/Post/post'
import { Link } from 'gatsby'
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import blogStyles from './blog.module.scss'


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
                     },
                     fields {
                         slug
                     }
                     timeToRead
                 }
             }
         }
    }
    `)

    return (
            <div className= {blogStyles.postList}>
                {data.allMarkdownRemark.edges.map(e => {
                    return (
                        <Post
                            title={e.node.frontmatter.title}
                            date={e.node.frontmatter.date}
                            time={e.node.timeToRead}
                            tags={e.node.frontmatter.tags}
                            link={`blog/${e.node.fields.slug}`}>
                    
                        </Post>
                    )
                })}
            </div>

    );
}