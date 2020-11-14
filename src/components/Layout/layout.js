import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import layoutStyles from './layout.module.scss';
import ThemeProvider from '../../contexts/theme';

const Layout = ({ children }) => {
  useEffect(() => {
    const ele = document.getElementById('loader');
    if (ele) {
      ele.classList.add('available');
      setTimeout(() => {
        ele.outerHTML = '';
      }, 1500);
    }
  }, []);

  return (
    <div className={layoutStyles.container}>
      <ThemeProvider>
        <Header className={layoutStyles.header} />

        <div className={layoutStyles.content}>{children}</div>
      </ThemeProvider>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
