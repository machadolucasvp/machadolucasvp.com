import React, { useState, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import headerStyles from './header.module.scss'
import profile from '../..//assets/profile.jpeg'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../../contexts/theme';


const Header = () => {

    const { theme, setTheme } = useTheme(null)

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
                        paintDrip direction="top" duration={0.7} to="/" hex={theme === 'light' ? "#ffffff" : "#282c35"}> <h1>Lucas Machado</h1>
                    </AniLink>
                </div>
                <ul className={headerStyles.list}>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip direction="top" duration={0.7} to="/" hex={theme === 'light' ? "#ffffff" : "#282c35"}>About
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip direction="top" duration={0.7} to="/blog" hex={theme === 'light' ? "#ffffff" : "#282c35"}>Blog
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip direction="top" duration={0.7} to="/projects" hex={theme === 'light' ? "#ffffff" : "#282c35"}>Projects
                        </AniLink>
                    </li>
                    <li>
                        <a to="#" className={headerStyles.bulb} >
                            <FontAwesomeIcon id="bulb" icon={faLightbulb}
                                size="sm"
                                color={theme === 'light' ? "#ffbd69" : "#ffffff"}
                                onClick={() => {
                                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                                    setTheme(window.__theme)
                                    if (window.DISQUS !== undefined) {
                                        window.setTimeout(() => {
                                          window.DISQUS.reset({
                                            reload: true
                                          })
                                        }, 300)
                                      }
                                }}/>
                        </a>
                    </li>


                </ul>
            </nav>
        </header >
    )
}

export default Header
