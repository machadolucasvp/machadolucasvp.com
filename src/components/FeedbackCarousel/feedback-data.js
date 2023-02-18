import React from "react"

import pauloProfile from "../../assets/paulo-profile.jpeg"
import marceloProfile from "../../assets/marcelo-profile.jpeg"
import guidoProfile from "../../assets/guido-profile.jpeg"

const feedbackData = [
    {
        profile: pauloProfile,
        onRenderMetadata: () => {
            return (
                <span>
                    <span>Paulo Correa</span>
                    <br />
                    through{" "}
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/paulocorreaslz"
                    >
                        {" "}
                        linkedin
                    </a>
                </span>
            )
        },
        onRenderDescription: () => {
            return (
                <div>
                    <p>
                        I had the opportunity to work with Lucas during my time
                        at pulse, and I can say that he is a professional above
                        average, when I say this, I am not being nice, I am
                        being honest, I had the opportunity to see up close his
                        technical skills and I can guarantee that the team that
                        has Lucas in its team will be very well prepared for
                        various situations because his decision-making ability
                        makes the difference.
                    </p>
                    <p>
                        Lucas can work in pressure environments with tranquility
                        and will deliver value to your business like no one
                        else. Many are his qualities, but I can easily highlight
                        many of them: Friendly, Highly Skilled, Technical, High
                        Mood, Extreme analytical capacity. Lucas is super
                        competent, focused, solicited, and has a very high level
                        of technical knowledge.
                    </p>

                    <p>
                        To have Lucas on the team is to have someone who is
                        concerned with the well-being not only of the team but
                        also with the results of the company. Lucas will
                        certainly have a bright future ahead of him. I consider
                        myself grateful to have known and worked with him on the
                        same team. I recommend his work with my eyes closed
                        because I know he will be able to do the job.
                    </p>
                </div>
            )
        },
    },
    {
        profile: marceloProfile,
        onRenderMetadata: () => {
            return (
                <span>
                    <span>Marcelo Borges</span>
                    <br />
                    through{" "}
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/marceloborgespereira/"
                    >
                        {" "}
                        linkedin
                    </a>
                </span>
            )
        },
        onRenderDescription: () => {
            return (
                <div>
                    <p>
                        There is only one word that comes to mind when I think
                        of Lucas, and that is brilliant. Lucas is a great
                        professional, probably one of the best (if not the best)
                        I have already worked with, it is startling to see how a
                        person so young can already have so much knowledge, he
                        really knows how to work in a team, knows how to share
                        his experiences, and most importantly knows how to
                        listen to his coworkers, he is the complete package that
                        any company needs.{" "}
                    </p>
                    <p>
                        Lucas was the Tech lead in my team at Mundiale, and he
                        is the best at it, he knows how to handle adversities
                        and is not afraid of facing new challenges, he is great
                        not only at programming but also in architecting new
                        solutions. For all these reasons he has my most sincere
                        respect, and I would really appreciate it if we get to
                        work together once again in the future, because working
                        with him is such a fun and enriching experience.
                    </p>

                    <p>
                        I would have no hesitation recommending Lucas to any
                        potential company seeking new talent.
                    </p>
                </div>
            )
        },
    },
    {
        profile: guidoProfile,
        onRenderMetadata: () => {
            return (
                <span>
                    <span>Guido Coelho</span>
                    <br />
                    through{" "}
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/guidopcoelho/"
                    >
                        {" "}
                        linkedin
                    </a>
                </span>
            )
        },
        onRenderDescription: () => {
            return (
                <div>
                    <p>
                        With a perfect combination between technical and social
                        skills, Lucas is the kind of professional every company
                        would benefit in having him in the team. We worked
                        together in Mundiale, in the same squad, where I was the
                        Product Manager and he was the Tech Lead.
                    </p>
                    <p>
                        The best way to describe his work is that he made
                        everything simple and possible. From explaining
                        technical details to discussing strategy, Lucas always
                        have a clear and inteligent point of view. He is a
                        leader in development and there is no doubt his future
                        is bright. He is a professional I would recommend in any
                        situation.
                    </p>
                </div>
            )
        },
    },
]

export default feedbackData
