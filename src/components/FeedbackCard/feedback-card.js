import React from 'react';
import feedbackCardStyles from './feedback-card.module.scss';

const FeedbackCard = ({profile, renderMetadata, renderDescription}) => (
    <div className={feedbackCardStyles.card}>
        <div className={feedbackCardStyles.profile} >
          <img src={profile} alt="Profile" />
          {renderMetadata && renderMetadata()}
        </div>
        <span className={feedbackCardStyles.description} >
            {renderDescription && renderDescription()}
        </span>
    </div>
);

export default FeedbackCard;
