import React, { useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import layoutStyles from './layout.module.scss';
import ThemeProvider from '../../contexts/theme';

const Layout = (props) => {
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

        <div className={layoutStyles.content}>{props.children}</div>
      </ThemeProvider>

      <Footer />
    </div>
  );
};

export default Layout;
