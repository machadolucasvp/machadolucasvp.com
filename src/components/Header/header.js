import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import headerStyles from './header.module.scss'
import profile from '../..//assets/profile.jpeg'

const Header = () => {
    return (
        <header>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.profileCard}>
                    <img src={profile} />
                    <span>
                        <h1>Lucas Machado</h1>
                    </span>
                </div>
                <ul className={headerStyles.list}>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip to="/" hex="#7D53DE">About
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            paintDrip to="/blog" hex="#7D53DE">Blog
                        </AniLink>
                    </li>
                    <li>
                        <AniLink className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                             paintDrip to="/projects" hex="#7D53DE">Projects
                        </AniLink>
                    </li>

                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
