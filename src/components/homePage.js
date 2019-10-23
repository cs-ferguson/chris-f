import React from "react";
import { Link, useStaticQuery } from "gatsby"

import styles from "./homepage.module.scss"

const HomePage = () => {

  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }){
          edges {
            node {
              id
              parent {
                ... on File {
                  id
                  name
                }
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )


  return(
    <>
      <h1>Chris Ferguson</h1>
      <h2>Project Management &amp; Development</h2>
      <section className={ styles.homePageGrid }>
        <div className={ styles.writing }>
          <h3>Writing</h3>
          <ul>
            { data.allMarkdownRemark.edges.map( ({node}) => (
              <li><Link to={`/${ node.parent.name }`}>{ node.frontmatter.title }</Link></li>
            ) ) }
          </ul>
        </div>

        <div className={ styles.tools }>
          <h3>Tools</h3>
          <ul>
            <li><a href="https://standuptimer.chris-f.com">the stand-up timer</a></li>
          </ul>
        </div>

        <div className={ styles.bio }>
          <h3>Bio</h3>
          <p>Project Manager and Web Developer in the North-east of England.</p>
        </div>

        <div className={ styles.socials }>
          <a href="https://twitter.com/_chris_ferguson">Twitter</a>
          <a href="https://github.com/cs-ferguson">Github</a>
        </div>
      </section>
    </>
  )
}

export default HomePage
