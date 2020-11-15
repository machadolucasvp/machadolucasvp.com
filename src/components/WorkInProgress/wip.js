import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Twemoji } from 'react-emoji-render';
import Typist from 'react-typist';

import wip from '../../assets/wip.svg';
import wipStyles from './wip.module.scss';
import { useTheme } from '../../contexts/theme';
import 'react-typist/dist/Typist.css';

const WorkInProgress = () => {
  const { theme } = useTheme();

  return (
    <div className={wipStyles.container}>
      <div className={wipStyles.typer}>
        <Typist className={wipStyles.typist} startDelay={1000}>
          <span> Welcome!</span>
          <Typist.Delay ms={800} />
          <Typist.Backspace count={8} delay={200} />
          <span> Unfortunately my coffee ran out haha</span>
          <Typist.Delay ms={800} />
          <Typist.Backspace count={36} delay={100} />
          <span>
            This page is a work in progress
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
              others one
              {' '}
              <Twemoji text=":wink:" />
            </AniLink>
          </span>
          {' '}
        </Typist>
      </div>

      <img src={wip} alt="Page under development" />
    </div>
  );
};

export default WorkInProgress;
