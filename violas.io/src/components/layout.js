/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header1 from "./header1"
import Header2 from "./header2"
import Footer from "./footer"
import "../style/layout.css"
import { createStore } from "redux"

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
//       <Header1 siteTitle="Violas" />
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
    let temp_lang = (this.getSession("violas-lang") ? this.getSession("violas-lang").split('"')[0] : 'en')
    // console.log(temp_lang)
    if (temp_lang) {
      this.setState({ UserLang: temp_lang })
    } else {
      let browserLang = this.getBrowserLang()
      // console.log(browserLang)
      if(browserLang==='en'||browserLang==='ja'||browserLang==='ko'){
      }else{
        browserLang='en'
      }
      this.setViolasLang(browserLang)
      this.setState({ UserLang: browserLang })
    }
  }
  componentDidMount() {
    // const counterReducer=(state={count:1},action)=>{
    //   return state;
    // }
    // const store=createStore(counterReducer)
    // console.log(store)
    // console.log(store.getState())
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
  // callbackLang = (_childData) => {
  //   this.setState({ UserLang: _childData })
  // }
  render() {
    return (
      <>
        <Header1 language={this.state.UserLang} wp_path={this.getCurrentUrl()} />
        <Header2 language={this.state.UserLang} wp_path={this.getCurrentUrl()} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
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