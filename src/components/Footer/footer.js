import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = () => (
  <footer className={footerStyles.list}>
    <a target="_blank" className={footerStyles.listItem} href="https://github.com/machadolucasvp">
        github
    </a>

    <a target="_blan" className={footerStyles.listItem} href="https://www.linkedin.com/in/machadolucasvp">
        linkedin
    </a>

    <a target="_blan" className={footerStyles.listItem} href="https://twitter.com/machadolucasvp">
        twitter
    </a>
  </footer>
);

export default Footer;
