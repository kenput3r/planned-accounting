import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }
  h6 {
    margin-left: 0.2rem;
  }
  .image-container {
    width: 100%;
    padding-bottom: 1.45rem;
  }
`
const createMarkup = string => ({ __html: string })

const AboutJohnsonAssociates = ({ data }) => {
  const { node } = data.allPagesJson.edges[0]
  return (
    <Layout>
      <SEO title={node.page_title} />
      <Page>
        <h1>{node.page_title}</h1>
        <h6>{node.tagline}</h6>
        <div className="image-container">
          <Img fluid={node.hero.childImageSharp.fluid} alt={node.hero_alt} />
        </div>
        <div dangerouslySetInnerHTML={createMarkup(node.text_content)} />
      </Page>
    </Layout>
  )
}

export default AboutJohnsonAssociates

export const query = graphql`
  query AboutJohnsonAssociatesQuery {
    allPagesJson(filter: { slug: { eq: "about-johnson-associates" } }) {
      edges {
        node {
          page_title
          tagline
          page_description
          hero {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero_alt
          text_content
        }
      }
    }
  }
`
