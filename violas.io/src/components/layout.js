/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component, Children } from "react"
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
    let temp_lang = (this.getSession("violas-lang") ? this.getSession("violas-lang").split('"')[1] : 'en')
    if (temp_lang) {
      this.setState({ UserLang: temp_lang })
    } else {
      let browserLang = this.getBrowserLang()
      this.setViolasLang(browserLang)
      this.setState({ UserLang: browserLang })
    }
  }
  getBrowserLang = () => {
    let lang_full =
      (navigator.languages && navigator.languages[0]) || navigator.language
    let lang = lang_full.split("-")[0]
    return lang
  }
  setViolasLang = _lang => {
    // console.log(_lang)
    // sessionStorage.setItem("violas-lang", JSON.stringify(_lang))
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("violas-lang", _lang)
    }
  }
  getSession = (_temp) => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(_temp)
    }
  }
  getCurrentUrl = _ => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.split("/")[1].split("-")[0]
    }
  }
  callbackLang = (_childData) => {
    this.setState({ UserLang: _childData })
  }
  render() {
    // console.log(this.props.children._self.props.path===undefined?111:222)
    // let temp = { wp_path: this.getCurrentUrl() }
    // console.log(this.getCurrentUrl())
    return (
      <>
        {/* <Header language={this.state.UserLang} wp_path={this.props.children._self.props.path?this.props.children._self.props.path.split("/")[1]:"blog"}/> */}
        {/* <Header language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} />
        <Header1 language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} /> */}
        <Header language={this.state.UserLang} callbackLang={this.callbackLang} wp_path={this.getCurrentUrl()} />
        <Header1 language={this.state.UserLang} wp_path={this.getCurrentUrl()} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {/* <main>{React.Children.map(this.props.children,child=>(
            React.cloneElement(child,{wp_path:this.getCurrentUrl()})
          ))}</main> */}
          {/* <main>{this.props.children({ ...this.props, ...temp })}</main> */}
          <main>{this.props.children}</main>
        </div>
        <Footer language={this.state.UserLang} wp_path={this.getCurrentUrl()} />
        {/* <Footer language={this.state.UserLang} wp_path={this.props.children._self ? this.props.children._self.props.path.split("/")[1] : undefined} /> */}
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout