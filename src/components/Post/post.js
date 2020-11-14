import React from 'react';
import PropTypes from 'prop-types';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import blogStyles from './post.module.scss';
import { useTheme } from '../../contexts/theme';

const Post = ({
  link, date, time, title, tags,
}) => {
  const { theme } = useTheme();

  return (
    <AniLink
      className={blogStyles.link}
      paintDrip
      direction="top"
      to={link}
      duration={0.7}
      hex={theme === 'light' ? '#ffffff' : '#282c35'}
    >
      <div className={blogStyles.card}>
        <div className={blogStyles.cardItem}>
          <ul>
            <li>{date}</li>
            <li>
              {' '}
              {time}
              {' '}
              min
              {' '}
              <FontAwesomeIcon
                className={blogStyles.icon}
                icon={faBook}
                size="sm"
              />
            </li>
          </ul>
          <h2>{title}</h2>
          <div className={blogStyles.tagContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={blogStyles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </AniLink>
  );
};

Post.propTypes = {
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Post;
