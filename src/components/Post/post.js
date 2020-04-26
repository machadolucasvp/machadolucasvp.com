import React from 'react';
import blogStyles from './post.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {
    return (
        <AniLink className={blogStyles.link} cover to={props.link} duration={0.7} bg="#7D53DE">
            <div className={blogStyles.card}>
                <div className={blogStyles.cardItem}>
                    <ul>
                        <li>{props.date}</li>

                        <li>  {props.time} min <FontAwesomeIcon className={blogStyles.icon} icon={faBook} size="sm" color="#282c35" /></li>
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
        </AniLink>
    );
}

export default Post;