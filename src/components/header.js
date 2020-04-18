import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/" />About</li>
                    <li> <Link to="/" />Blog</li>
                    <li> <Link to="/" />Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
