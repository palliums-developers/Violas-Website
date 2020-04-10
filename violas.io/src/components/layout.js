/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header1"
import Header1 from "./header2"
import Footer from "./footer"
import "../style/layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//   return (
//     <>
//       <Header siteTitle="Violas" />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//       </div>
//       <Footer/>
//     </>
//   )
// }

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UserLang: "en",
    }
  }
  componentWillMount() {
    let temp_lang = JSON.parse(sessionStorage.getItem("violas-lang"))
    if (temp_lang) {
      this.setState({ UserLang: temp_lang })
    } else {
      let browserLang = this.getBrowserLang()
      this.storeSession(browserLang)
      this.setState({ UserLang: browserLang })
    }
  }
  getBrowserLang = () => {
    let lang_full =
      (navigator.languages && navigator.languages[0]) || navigator.language
    let lang = lang_full.split("-")[0]
    return lang
  }
  storeSession = _lang => {
    sessionStorage.setItem("violas-lang", JSON.stringify(_lang))
  }
  render() {
    // console.log(this.props.children._self.props.path===undefined?111:222)
    // console.log(222)
    return (
      <>
        {/* <Header language={this.state.UserLang} wp_path={this.props.children._self.props.path?this.props.children._self.props.path.split("/")[1]:"blog"}/> */}
        <Header language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} />
        <Header1 language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{this.props.children}</main>
        </div>
        <Footer language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout