import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { SiGooglemaps } from "react-icons/si"
import { FaFacebookF, FaYelp, FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import logo from "../images/logo.png"

const Component = styled.header`
  margin-bottom: 1.45rem;
  .nav-container {
    background-color: var(--black);
  }
  .contact-nav {
    display: flex;
    flex-direction: row;
    max-width: 1170px;
    margin: 0 auto;
    a {
      color: #ffffff;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      padding: 10px;
      svg {
        margin: 0 5px;
      }
    }
  }
  .social {
    ul {
      margin-top: 5px;
    }
  }
  .traditional {
    flex: auto;
    ul {
      text-align: right;
    }
  }
  ul {
    margin-bottom: 0;
    @media (max-width: 500px) {
      margin-left: 0;
    }
  }
  li {
    display: inline-block;
    list-style-type: none;
    margin-bottom: 0;
  }
  h1 {
    text-align: center;
    padding: 5px;
    img {
      max-width: 100%;
    }
  }
  .small-hide {
    @media (max-width: 706px) {
      display: none;
    }
  }
  nav {
    width: 960px;
    max-width: 100%;
    margin: 0 auto;
    ul {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 0;
      padding: 0 5px 10px;
    }
    li {
      padding: 10px 5px 0;
    }
    a {
      color: var(--black);
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      allInfoJson {
        edges {
          node {
            email
            phone
            phone_formatted
            facebook_url
            yelp_url
            google_url
          }
        }
      }
    }
  `)
  const node = data.allInfoJson.edges[0].node
  return (
    <Component>
      <div className="nav-container">
        <div className="contact-nav">
          <div className="social">
            <ul>
              <li>
                <a href={node.facebook_url}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={node.yelp_url}>
                  <FaYelp />
                </a>
              </li>
              <li>
                <a href={node.google_url}>
                  <SiGooglemaps />
                </a>
              </li>
            </ul>
          </div>
          <div className="traditional">
            <ul>
              <li>
                <a href="/">
                  <FaPhone />
                  <span className="small-hide">{node.phone_formatted}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${node.email}`}>
                  <FiMail />
                  <span className="small-hide">{node.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img
            src={logo}
            width="320px"
            alt="Johnson & Associates - Certified Public Accountant"
          />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-cpa">What Is A CPA?</Link>
          </li>
          <li>
            <Link to="/about-johnson-associates">About J&amp;A</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </Component>
  )
}

export default Header
