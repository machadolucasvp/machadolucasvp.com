import React from "react"
import Layout from '../components/Layout/layout'
import SkillChart from '../components/Chart/skill'
import '../styles/styles.scss'
import { graphql, useStaticQuery } from 'gatsby'



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
        <Layout >
            <h2>Hello world !</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
               Nulla at risus.</p>
        </Layout>
    )
}
