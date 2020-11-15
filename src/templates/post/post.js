import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import postStyles from './post.module.scss';
import Comments from '../../components/Comments/comments';
import '../../../static/prismjs/themes/dracula-theme.css';

export const res = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
      id
      fields {
        slug
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const renderPostMetadata = () => (
    <>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <ul>
        <li>{data.markdownRemark.frontmatter.date}</li>
        <li> • </li>
        <li>
          {data.markdownRemark.timeToRead}
          {' '}
          min
          <FontAwesomeIcon
            className={postStyles.timeToReadIcon}
            icon={faBook}
            size="sm"
          />
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <div className={postStyles.header}>
        {renderPostMetadata()}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <Comments
        url={data.markdownRemark.fields.slug}
        title={data.markdownRemark.frontmatter.title}
        identifier={data.markdownRemark.id}
      />
    </div>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      timeToRead: PropTypes.number,
      html: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PostTemplate;
