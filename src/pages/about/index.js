import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Twemoji } from "react-emoji-render"
import FeedbackCarousel from "../../components/FeedbackCarousel/feedback-carousel"
import SEO from "../../components/SEO/SEO"

import { useTheme } from "../../contexts/theme"

import aboutStyles from "./about.module.scss"

const AboutPage = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className={aboutStyles.container}>
            <SEO pageTitle="About me" />
            <div className={aboutStyles.intro}>
                <h1 id="about-me">About me </h1>
                <p>
                    <b>
                        Hey there, I'm Lucas Machado
                        <Twemoji svg text=":wave:" />!
                    </b>{" "}
                    I'm a <b>software engineer and enthusiast</b>, passionate
                    about distributed systems and all the cool stuff that comes
                    with them
                    <Twemoji svg text=":metal:" />! Currently, I'm working as{" "}
                    <b>Engineer Lead at wefox</b>, we're building an amazing
                    platform and shifting the insurance industry all over
                    Europe.{" "}
                </p>
                <p>
                    <p>
                        Over the years,{" "}
                        <b>
                            I've gained extensive experience as a software
                            engineer and engineering lead
                        </b>
                        . I've shipped entire products from scractch, scaled-up
                        existing ones and even saved some others.{" "}
                        <b>Delivering impact is what drives me most</b>, and
                        making people's lives better through software fascinates
                        me.
                    </p>

                    <p>
                        I consider myself lucky because I've always been
                        surrounded by amazing engineers and leaders. From the
                        very beginning of my career, I've been able to learn
                        from some of the best in the industry, and I'm
                        constantly pushing myself to improve and grow as a
                        professional.
                    </p>
                </p>
                <blockquote>
                    <p>
                        If you're interested in{" "}
                        <b>learning more about my career and background</b>,
                        feel free to check out my
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
                <h1 id="about-this-website"> About this website </h1>
                Welcome! Whether you stumbled upon this website by chance or
                intentionally, I'm glad you are here.
                <p>
                    This website is my small corner of the web for sharing
                    thoughts, experiences, and insights with the world. Hope you
                    find it informative and engaging! Feel free to check out my
                    latest{" "}
                    <AniLink
                        paintDrip
                        direction="top"
                        duration={0.7}
                        to="/articles"
                        hex={theme.color}
                    >
                        articles
                    </AniLink>
                    .
                </p>
                <h1 id="a-bit-more-about-me"> A bit more about me </h1>
                <p>
                    I was born and raised in the northeast of Brazil, a place
                    with a unique culture and vibrant people called São Luís.
                    Currently, I'm living in Barcelona, Spain, which has been an
                    amazing city to explore and call home. If you happen to be
                    in town, let me know, and let's grab a coffee{" "}
                </p>
                <p>
                    I love Physics, Mathematics, and Computer Science, and I'm
                    fascinated by the way they shape our understanding of the
                    world. At one point during my university years, I was drawn
                    to the field of theoretical physics and even participated in
                    several research programs related to astrophysics out of
                    sheer curiosity. I also love learning about History, as it
                    helps me understand how we got to where we are today and
                    where we can be in the future.
                </p>
                <p>
                    In my free time, I enjoy being engaged into software-related
                    content such as books and articles, as well as socializing
                    over coffee with friends or exploring the environment
                    outdoors. And from time to time, I get fully immersed in a
                    random hobby or activity like playing flamenco guitar,
                    rollerblading, cycling, weightlifting and goes on...
                </p>
                <p>I believe empathy is the key to unlock a better world. </p>
                <h1 id="what-people-have-to-say-about-me">
                    What people have to say about me
                </h1>
                <p>
                    Finally, here are a few lovely words that great people have
                    shared about me in public:
                </p>
                <FeedbackCarousel />
            </div>
        </div>
    )
}

export default AboutPage
