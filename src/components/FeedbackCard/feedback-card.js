import React from 'react';
import feedbackCardStyles from './feedback-card.module.scss';

const FeedbackCard = ({profile, renderMetadata, renderDescription}) => (
    <div className={feedbackCardStyles.card}>
        <div className={feedbackCardStyles.profile} >
          <img src={profile} alt="Profile" />
          {renderMetadata && renderMetadata()}
        </div>
        <div className={feedbackCardStyles.description} >
            {renderDescription && renderDescription()}
        </div>
    </div>
);

export default FeedbackCard;
