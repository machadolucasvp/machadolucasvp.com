import React from 'react';
import blogStyles from './post.module.scss'
import { Link } from 'gatsby'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {
    return (
        <Link className={blogStyles.link} to={props.link}>
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
        </Link>
    );
}

export default Post;