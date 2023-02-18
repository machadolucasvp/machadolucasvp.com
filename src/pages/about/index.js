import React from "react"
import { Twemoji } from "react-emoji-render"
import FeedbackCarousel from "../../components/FeedbackCarousel/feedback-carousel"

import aboutStyles from "./about.module.scss"

const AboutPage = () => (
    <div className={aboutStyles.container}>
        <div className={aboutStyles.intro}>
            <p>
                <b>
                    Hey, I'm Lucas Machado
                    <Twemoji svg text=":wave:" />!
                </b>{" "}
                I'm a <b>software engineer and enthusiast</b>, passionate about
                distributed systems and all these cool stuff{" "}
                <Twemoji svg text=":metal:" />.
            </p>

            <blockquote>
                <p>
                    <b>TLDR;</b> That's my bio from
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/machadolucasvp"
                    >
                        {" "}
                        linkedin
                    </a>
                    : Passionate about software engineering, I love to solve
                    problems that impact peoples life. I learn fast and take
                    ownership by nature. I'm a Software Engineer with experience
                    in leadership, architecture, development and maintenance of
                    large-scale applications, always focusing in high-quality
                    software delivery.
                </p>
            </blockquote>

            <p>
                I'm currently working as <b>Engineer Lead at wefox</b>, we are
                building an amazing platform and shifting a pre-historic
                industry (insurance) over all of Europe.
                <p>
                    I'v been mainly working in product-based companies and{" "}
                    <b>delivering impact is what drives me most</b>, already{" "}
                    <b>
                        worked with amazing engineers and leaders over my career
                    </b>{" "}
                    and I'm always learning a ton from everyone.{" "}
                </p>
            </p>

            <p>
                I was born and raised in the northeast of Brazil, but I'm
                currently living in <b>Barcelona, Spain</b>. If you are in town,
                let me know, and let's get a coffee.{" "}
            </p>

            <p>
                I love Physics (at some point in university I wanted to be a
                theoretical physicist), Math, and Computer Science but I also
                tend to consume a lot of things about History (time fascinates
                me).
            </p>

            <p>
                In my free time, if I'm not consuming software-related content
                like books or articles you will find me having coffee with
                friends or exploring the outdoor environment; From time to time
                I'm always super focused on some random hobby/activity like
                flamenco guitar, rollerblading, mountain cycling, weightlifting,
                aquarism and goes on.
            </p>

            <p> Lovely words that great people gave to me in public:</p>
            <FeedbackCarousel />
        </div>
    </div>
)

export default AboutPage
