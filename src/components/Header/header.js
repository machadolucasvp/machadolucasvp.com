import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import profile from '../..//assets/profile3.jpeg'

const Header = () => {
    return (
        <header>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.profileCard}>
                    <img src={profile} />
                    <span>
                        <h1>Lucas Machado</h1>
                        <small className={headerStyles.role}><span style={{color:'#ff79c6'}}>const</span> <span style={{color: '#50fa7b'}}>role</span> <span style={{color:'#ff79c6'}}> = </span> () <span style={{color:'#ff79c6'}}> => </span>  <span style={{color:'#f1fa8c'}}>'software engineer'</span></small>
                    </span>
                </div>
                <ul className={headerStyles.list}>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/" >About
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/blog" >Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/projects">Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
