import React from "react"
import { Carousel } from "antd"
import feedbackCarouselStyles from "./feedback-carousel.module.scss"
import FeedbackCard from "../FeedbackCard/feedback-card"

import feedbackData from "./feedback-data"

const FeedbackCarousel = () => (
    <Carousel className={feedbackCarouselStyles.carousel} draggable={true} autoplay>
            {feedbackData.map(feedback => {
                return (
                        <FeedbackCard
                            renderDescription={feedback.onRenderDescription}
                            renderMetadata={feedback.onRenderMetadata}
                            profile={feedback.profile}
                        />
                )
            })}
    </Carousel>
)

export default FeedbackCarousel
