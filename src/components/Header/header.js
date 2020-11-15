import React, { useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profile from '../../assets/profile.jpeg';
import headerStyles from './header.module.scss';
import { useTheme } from '../../contexts/theme';

const buildBulbColor = (themeType) => (!isDarkMode(themeType) ? '#ffbd69' : '#ffffff');
const isDarkMode = (themeType) => themeType === 'dark';

const Header = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const handleBulbClick = () => {
    window.__setPreferredTheme(isDarkMode(theme.type) ? 'light' : 'dark');
    setTheme(window.__theme);
    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true,
        });
      }, 300);
    }
  };

  return (
    <header>
      <nav className={headerStyles.nav}>
        <div className={headerStyles.profileCard}>
          <img src={profile} alt="Profile" />
          <AniLink
            className={headerStyles.listItem}
            paintDrip
            direction="top"
            duration={0.7}
            to="/"
            hex={theme.color}
          >
            {' '}
            <h1>Lucas Machado</h1>
          </AniLink>
        </div>
        <ul className={headerStyles.list}>
          <li>
            <AniLink
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
              paintDrip
              direction="top"
              duration={0.7}
              to="/"
              hex={theme.color}
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
              paintDrip
              direction="top"
              duration={0.7}
              to="/blog"
              hex={theme.color}
            >
              Blog
            </AniLink>
          </li>
          <li>
            <AniLink
              className={headerStyles.listItem}
              activeClassName={headerStyles.activeListItem}
              paintDrip
              direction="top"
              duration={0.7}
              to="/projects"
              hex={theme.color}
            >
              Projects
            </AniLink>
          </li>
          <li>
            <a to="#" className={headerStyles.bulb}>
              <FontAwesomeIcon
                id="bulb"
                icon={faLightbulb}
                size="sm"
                color={buildBulbColor(theme.type)}
                onClick={handleBulbClick}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
