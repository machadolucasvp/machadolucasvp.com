import React from 'react';
import Layout from '../components/Layout/layout'
import { graphql } from 'gatsby'
import blogStyles from './blog.module.scss'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../static/prismjs/themes/dracula-theme.css'

export const res = graphql`
    query (
        $slug: String
        ) {
            markdownRemark (fields: {
                slug: {
                    eq: $slug
                }
            }){
                frontmatter{
                    title
                    date
                }
                html
                timeToRead
            }
        }
    `

const Blog = (props) => {
    return (
        <div>
            <div className={blogStyles.header}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <ul>
                    <li>{props.data.markdownRemark.frontmatter.date}</li>
                    <li> • </li>
                   
                      <li>  {props.data.markdownRemark.timeToRead} min <FontAwesomeIcon icon={faBook} size="sm" color="#282c35" /></li>
                </ul>
            </div>

            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div >
    );
}

export default Blog;