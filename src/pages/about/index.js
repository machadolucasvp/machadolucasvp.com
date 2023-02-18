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
                distributed systems and all this cool stuff
                <Twemoji svg text=":metal:" />.
            </p>

            <p>
                I'm currently working as <b>Engineer Lead at wefox</b>, we are
                building an amazing platform and shifting a pre-historic
                industry (insurance) all over of Europe.
                <p>
                    Over the past years, I'v been working either as{" "}
                    <b>software engineer or engineer lead</b>, mainly in
                    product-based companies. Already architected and developed
                    complex systems and even entire products from scratch,
                    scaled-up existent ones, saved some others and did lots of
                    others interesting things.{" "}
                    <b>Delivering impact is what drives me most</b>.
                </p>
                <p>
                    I consider myself lucky because I'm always working{" "}
                    <b>
                        with amazing engineers and leaders since the beginning
                        of my career
                    </b>{" "}
                    and I'm always learning a ton from everyone.{" "}
                </p>
            </p>
            <blockquote>
                <p>
                    If you are more interested about my{" "}
                    <b>work experience and trajectory</b> take a look into my
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/machadolucasvp"
                    >
                        {" "}
                        linkedin
                    </a>{" "}
                    <Twemoji svg text=";)" />.
                </p>
            </blockquote>

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
                like books or articles you might find me having coffee with
                friends or exploring the outdoor environment; From time to time
                I'm always super focused on some random hobby/activity like
                flamenco guitar, rollerblading, cycling, weightlifting, aquarism
                and goes on.
            </p>

            <p> Lovely words that great people gave to me in public:</p>
            <FeedbackCarousel />
        </div>
    </div>
)

export default AboutPage
