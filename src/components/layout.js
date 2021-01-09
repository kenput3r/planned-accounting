import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import "./fonts.css"

const Layout = ({ children, templateName }) => {
  return (
    <>
      <Header templateName={templateName} />
      <main>{children}</main>
      <footer
        style={{
          backgroundColor: "var(--blue)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div className="wrapper">
          Copyright © {new Date().getFullYear()} Johnson &amp; Associates, Built
          by
          {` `}
          <a
            href="https://github.com/kenput3r"
            style={{ color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            @kenput3r
          </a>{" "}
          <br />
          <a
            href="https://goo.gl/maps/P2Mjq62ZkSw5Ut7n7"
            style={{ color: "#ffffff" }}
            target="_blank"
            rel="noreferrer"
          >
            3055 Wilshire Blvd - Los Angeles, CA 90010 - USA
          </a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
