import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import commentStyles from './comment.module.scss';

const Comments = ({ title, url, identifier }) => {
  const completeURL = `https://lucasmachado.surge.sh${url}`;
  const disqusShortName = 'lucasmachado-surge-sh';

  return (
    <div className={commentStyles.CommentsWrapper}>
      <div className={commentStyles.CommentsTitle}>Comentários</div>
      <ReactDisqusComments
        className={commentStyles.disqus}
        shortname={disqusShortName}
        identifier={identifier}
        title={title}
        url={completeURL}
      />
    </div>
  );
};

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default Comments;
