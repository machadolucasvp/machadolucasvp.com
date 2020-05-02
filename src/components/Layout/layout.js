import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import layoutStyles from './layout.module.scss'
import ThemeProvider from '../../contexts/theme';


const Layout = (props) => {
    return (

        <div className={layoutStyles.container} >

            <ThemeProvider>

                <Header className={layoutStyles.header} />


                <div className={layoutStyles.content}>

                    {props.children}

                </div>

            </ThemeProvider>

            <Footer />
        </div>
    )
}

export default Layout
