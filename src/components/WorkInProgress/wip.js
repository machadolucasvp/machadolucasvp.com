import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Twemoji } from 'react-emoji-render';
import Typist from 'react-typist';

import wipStyles from './wip.module.scss';
import { useTheme } from '../../contexts/theme';
import 'react-typist/dist/Typist.css';

const WorkInProgress = () => {
  const { theme } = useTheme();

  return (
    <div className={wipStyles.container}>
      <div className={wipStyles.typer}>
        <Typist className={wipStyles.typist} startDelay={1000}>
          <span>
            Under development
            {' '}
            <Twemoji text=":metal:" />
          </span>
          <Typist.Delay ms={800} />
          <br />
          <span>
            Have a look at
            {' '}
            <AniLink
              paintDrip
              direction="top"
              duration={0.7}
              to="/blog"
              hex={theme.color}
            >
              my blog
              {' '}
              <Twemoji text=":wink:" />
            </AniLink>
          </span>
          {' '}
        </Typist>
      </div>
    </div>
  );
};

export default WorkInProgress;
