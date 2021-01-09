import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  h1 {
    line-height: 0.5;
    span {
      font-size: 1rem;
      padding-left: 5px;
    }
  }
  .image-container {
    width: 100%;
    padding-bottom: 1.45rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    @media (max-width: 767px) {
      flex: none;
      width: 100%;
    }
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 1.45rem;
  }
  a {
    color: var(--blue);
  }
`

const Contact = ({ data }) => {
  const node = data.allInfoJson.edges[0].node
  return (
    <Layout>
      <SEO title="Contact Los Angeles CPA" />
      <Page>
        <div className="wrapper">
          <h1>
            Contact <br />
            <span>Los Angeles Accountants</span>
          </h1>
          <div className="image-container">
            <Img
              fluid={data.hero.childImageSharp.fluid}
              alt="Desk with laptop and headset"
            />
          </div>
          <div className="row">
            <div className="col">
              <h3>Send Us A Messgae</h3>
              <form
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  aria-label="Phone Number"
                  placeholder="Phone"
                />
                <textarea
                  id="message"
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="col">
              <h3>Other Ways To Get In Touch</h3>
              <ul>
                <li>
                  <a href={`tel:${node.phone}`}>Call {node.phone_formatted}</a>
                </li>
                <li>
                  <a href={`mailto:${node.email}`}>Email {node.email}</a>
                </li>
                <li>Fax {node.fax}</li>
                <li>
                  <a href={node.facebook_url} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={node.yelp_url} target="_blank" rel="noreferrer">
                    Yelp
                  </a>
                </li>
                <li>
                  <a href={node.google_url} target="_blank" rel="noreferrer">
                    Google
                  </a>
                </li>
                <li>
                  <a href={node.map_url} target="_blank" rel="noreferrer">
                    {node.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactPageQuery {
    allInfoJson {
      edges {
        node {
          email
          phone
          phone_formatted
          facebook_url
          yelp_url
          google_url
          map_url
          address
          fax
        }
      }
    }
    hero: file(relativePath: { eq: "contact-los-angeles-accountants.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
