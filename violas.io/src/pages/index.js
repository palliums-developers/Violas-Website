import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends Component {
  // render() {
  //   const data = this.props.data
  //   return (
  //     <>
  //       <Layout>
  //         <SEO title="Home" />
  //         <div>
  //           <h1>Pages</h1>
  //           {data.allWordpressPage.edges.map(({ node }) => (
  //             <div key={node.slug}>
  //               <Link to={node.slug}>
  //                 <h2>{node.title}</h2>
  //               </Link>
  //               <h3>{node.excerpt}</h3>
  //             </div>
  //           ))}
  //         </div>
  //         <h1>Posts</h1>
  //         {data.allWordpressPost.edges.map(({ node }) => (
  //           <div key={node.slug}>
  //             <Link to={node.slug}>
  //               <h2>{node.title}</h2>
  //             </Link>
  //             <h3>{node.excerpt}</h3>
  //           </div>
  //         ))}
  //       </Layout>
  //     </>
  //   )
  // }

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
  initPage = _ => {
    if (this.state.UserLang === "ja") {
      window.location = "/homepage-ja"
    } else if (this.state.UserLang === "ko") {
      window.location = "/homepage-ko"
    } else {
      window.location = "/homepage-en"
    }
  }
  render() {
    // const data = this.props.data;
    return (
      <>
        <Layout language={this.state.UserLang}>
          <SEO title="Home" />
          {/* {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))} */}
          {this.initPage()}
        </Layout>
      </>
    )
  }
}

export default HomePage

// export const pageQuery = graphql`
//   query {
//     allWordpressPage {
//       edges {
//         node {
//           title
//           content
//           slug
//           id
//         }
//       }
//     }
//     allWordpressPost {
//       edges {
//         node {
//           title
//           content
//           slug
//           id
//           author {
//             name
//           }
//           date
//         }
//       }
//     }
//   }
// `
