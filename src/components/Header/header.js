import React, { useState, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import profile from '../..//assets/profile.jpeg'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import globalStyles from '../../styles/styles.scss'

const Header = () => {

    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === 'dark'

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    })

    return (
        <header>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.profileCard}>
                    <img src={profile} />
                    <AniLink className={headerStyles.listItem}
                        paintDrip duration={0.7} to="/" hex="#7D53DE"> <h1>Lucas Machado</h1>
                    </AniLink>
                </div>
                <ul className={headerStyles.list}>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip duration={0.7} to="/" hex="#7D53DE">About
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip duration={0.7} to="/blog" hex="#7D53DE">Blog
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip duration={0.7} to="/projects" hex="#7D53DE">Projects
                        </AniLink>
                    </li>
                    <li>
                        <a to="#" >
                            <FontAwesomeIcon icon={faLightbulb}
                                size="sm"
                                color={theme === 'light' ? "#ffbd69" : "#ffffff"}
                                onClick={() => {
                                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                                }}/>
                        </a>
                    </li>


                </ul>
            </nav>
        </header >
    )
}

export default Header
