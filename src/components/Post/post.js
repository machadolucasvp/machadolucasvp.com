import React from 'react';
import blogStyles from './post.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../../contexts/theme';

const Post = (props) => {

    const { theme } = useTheme();


    return (
        <AniLink className={blogStyles.link} paintDrip direction="top"
            to={props.link} duration={0.7}
            hex={theme === 'light' ? "#ffffff" : "#282c35"}>

            <div className={blogStyles.card}>
                <div className={blogStyles.cardItem}>
                    <ul>
                        <li>{props.date}</li>

                        <li>  {props.time} min <FontAwesomeIcon className={blogStyles.icon} icon={faBook} size="sm"/></li>
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