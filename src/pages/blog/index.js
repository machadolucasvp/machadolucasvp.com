import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Post from '../../components/Post/post';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
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
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          time={node.timeToRead}
          tags={node.frontmatter.tags}
          link={`post/${node.fields.slug}`}
        />
      ))}
    </div>
  );
};

export default BlogPage;
