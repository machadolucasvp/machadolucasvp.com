import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyles.container} >

            <Header className={layoutStyles.header} />


            <div className={layoutStyles.content}>

                {props.children}

            </div>

            <Footer />
        </div>
    )
}

export default Layout
