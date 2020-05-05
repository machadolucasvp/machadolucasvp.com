import React, { useEffect } from "react"
import '../styles/styles.scss'
import { graphql, useStaticQuery } from 'gatsby'
import WorkInProgress from '../components/WorkInProgress/wip'




export default () => {

    const res = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                technologySkills
                technologyValues
                languageSkills
                languageValues
            }
        }
    }
`)
    return (
        <div>
            <WorkInProgress />
        </div>
    )
}
