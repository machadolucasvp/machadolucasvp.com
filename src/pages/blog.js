import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import Post from '../components/Post/post';

import Layout from '../components/Layout/layout';
import blogStyles from './blog.module.scss';

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
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `);

  return (
    <div className={blogStyles.postList}>
      {data.allMarkdownRemark.edges.map((e) => (
        <Post
          title={e.node.frontmatter.title}
          date={e.node.frontmatter.date}
          time={e.node.timeToRead}
          tags={e.node.frontmatter.tags}
          link={`blog/${e.node.fields.slug}`}
        />
      ))}
    </div>
  );
};
