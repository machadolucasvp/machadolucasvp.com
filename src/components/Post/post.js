import React, { useState, useEffect } from 'react';
import blogStyles from './post.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(null)

    useEffect(() => {
        setIsDarkMode(document.getElementsByTagName("BODY")[0].className === 'dark')
    }, []);

    return (
        <AniLink className={blogStyles.link} paintDrip direction="top"
            to={props.link} duration={0.7}
            hex={isDarkMode ? '#282c35' : '#ffffff'}>

            <div className={blogStyles.card}>
                <div className={blogStyles.cardItem}>
                    <ul>
                        <li>{props.date}</li>

                        <li>  {props.time} min <FontAwesomeIcon className={blogStyles.icon} icon={faBook} size="sm" color="" /></li>
                    </ul>
                    <h2>{props.title}</h2>
                    <div className={blogStyles.tagContainer}>
                        {props.tags.map(e => {
                            return (
                                <span className={blogStyles.tag}>{e}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </AniLink >
    );
}

export default Post;