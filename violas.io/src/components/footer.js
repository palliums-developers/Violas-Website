import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import langLink from "./langLink"

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: langLink(this.props.language) }}
          ></div>
        </div>
      </footer>
    )
  }
}

export default Footer
