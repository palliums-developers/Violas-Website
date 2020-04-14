// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery, StaticQuery } from "gatsby"
import React, { Component } from "react"
import langLink from "./langLink"
import Img from "gatsby-image"
import "../style/header.css"

import logoWhite_jpg from "../images/logo-white.png"
import logoPurple_jpg from "../images/logo-purple.png"
import homepage_jpg from "../images/homepage.jpg"
import vision_jpg from "../images/vision.jpg"
import association_jpg from "../images/association.jpg"
import partners_jpg from "../images/partners.jpg"
import media_jpg from "../images/media.jpg"

// const Header = ({ language }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {language}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "en",
    }
  }
  componentDidMount() {
    this.setState({ language: this.props.language });

  }
  changeLang(_chosenLang) {
    let type = this.props.wp_path ? this.props.wp_path.split("-")[0] : null
    let slug = "blog"
    if (type) {
      slug = type + "-" + _chosenLang
    }
    return slug
  }
  changeSession(_chosenLang) {
    sessionStorage.setItem("violas-lang", JSON.stringify(_chosenLang))
  }
  clickLang(_lang) {
    switch (_lang) {
      case "en":
        return (
          <>
            <a
              aria-current="page"
              href={this.changeLang("ja")}
              onClick={this.changeSession.bind(this, "ja")}
            >
              日本語
            </a>
            <a
              aria-current="page"
              href={this.changeLang("ko")}
              onClick={this.changeSession.bind(this, "ko")}
            >
              한국어
            </a>
          </>
        )
      case "ja":
        return (
          <>
            <a
              aria-current="page"
              href={this.changeLang("en")}
              onClick={this.changeSession.bind(this, "en")}
            >
              EN
            </a>
            <a
              aria-current="page"
              href={this.changeLang("ko")}
              onClick={this.changeSession.bind(this, "ko")}
            >
              한국어
            </a>
          </>
        )
      case "ko":
        return (
          <>
            <a
              aria-current="page"
              href={this.changeLang("ja")}
              onClick={this.changeSession.bind(this, "ja")}
            >
              日本語
            </a>
            <a
              aria-current="page"
              href={this.changeLang("en")}
              onClick={this.changeSession.bind(this, "en")}
            >
              EN
            </a>
          </>
        )
    }
  }

  // clickLang(_lang) {
  //   switch (_lang) {
  //     case "ja":
  //       return (<a href={this.changeLang("ja")}></a>)
  //     case "ja":
  //       return <a href={this.changeLang("ko")}></a>
  //     default:
  //       return <a href={this.changeLang("en")}></a>
  //   }
  // }

  storeSession = (_lang) => {
    sessionStorage.setItem("violas-lang", JSON.stringify(_lang))
  }
  headerImg = (_pages) => {

    // const data=useStaticQuery(graphql`
    //   query{
    //     file(relativePath: {eq: "media.jpg"}){
    //       childImageSharp{
    //           fluid(maxWidth:1000){
    //               ...GatsbyImageSharpFluid
    //           }
    //         }
    //     }
    //   }
    // `);

    switch (_pages) {
      case "homepage":
        // return <img src="/static/9bb038b9ff4d9f1cede0b1232abd6e6c/14b42/homepage.jpg" />
        // return <img src={homepage_jpg} />
        return homepage_jpg
      case "vision":
        // return <img src="/static/3cad50fb229e266066a9bdf3996fd227/14b42/vision.jpg" />
        // return <img src={vision_jpg} />
        return vision_jpg
      case "association":
        // return <img src="/static/b9880b6f7ff04cd9bb3e35c078570490/14b42/association.jpg" />
        // return <img src={association_jpg} />
        return association_jpg
      case "partners":
        // return <img src="/static/82dd86db42801d541b03592db593786b/14b42/partners.jpg" />
        // return <img src={partners_jpg} />
        return partners_jpg
      case "media":
        // return <img src="/static/2937f6503b6e9bf3b89b6e28fabc842a/14b42/media.jpg" />
        // return <Img fluid={data.media.childImageSharp.fluid}/>
        // return <img src={media_jpg} />
        return media_jpg
      case "logo-purple":
        // return <img src="/static/c7a541a81abe46e6e59775bf7782f50d/75ec2/logo-purple.png" />
        // return <img src={logoPurple_jpg} />
        return logoPurple_jpg
      case "logo-white":
        return logoWhite_jpg
      default:
        return logoWhite_jpg;
    }

    // let imgData = await graphql(`
    //   allImageSharp {
    //     nodes {
    //       sizes {
    //         originalName
    //         src
    //       }
    //     }
    //   }
    // `)
    // console.log(imgData)
  }
  // logoPath=()=>{
  //   const data=useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: {eq: "logo-white.png"}) {
  //       childImageSharp {
  //         fixed {
  //           originalName
  //           src
  //         }
  //       }
  //     }
  //   }
  //   `)
  //   console.log(111)
  // }
  render() {
    // console.log(this.props.wp_path===undefined)
    return (
      <header
        style={{
          background: `transparent`,
          // backgroundImage: url(this.headerImg(this.props.wp_path.split("-")[0])),
          // height:`720px`
          // marginBottom: `1.45rem`,
          position: 'absolute',
          top: '0px'
        }
        }
      >
        <div
          style={{
            // margin: `0 auto`,
            // maxWidth: 1200,
            // height: `100px`,
            // padding: `1.45rem 1.0875rem`,
            // background:"black"
            // backgroundImage: 'url(' + this.headerImg(this.props.wp_path.split("-")[0] ? this.props.wp_path.split("-")[0] : '111') + ')',
          }}
          className="head"
        >
          {/* <div
            className="nav"
            dangerouslySetInnerHTML={{ __html: langLink(this.state.language) }}
          ></div> */}
          <div className="linkPage">
            {
              // console.log(langLink(this.state.language))
              this.props.wp_path === undefined ? langLink(this.state.language, "purple", "purple", "header") :
                this.props.wp_path.split("-")[0] === "whitepaper" ? langLink(this.state.language, "purple", "purple", "header") :
                  this.props.wp_path.split("-")[0] === "developers" ? langLink(this.state.language, "purple", "purple", "header") :
                    langLink(this.state.language, "white", "white", "header")
            }
          </div>
          {/* <div className="nav" >{langLink(this.state.language).map((item, index) => {
            return <>{item}</>
          })}</div> */}
          <div className="lang">
            {/* <p onClick={this.clickLang.bind(this,"en")}>EN aaa</p>
          <p onClick={this.clickLang.bind(this,"ja")}>日本語 aaa</p>
          <p onClick={this.clickLang.bind(this,"ko")}>한국어 aaa</p> */}
            {
              this.clickLang(this.state.language)
            }
            {/* <Link to="homepage-en" onClick={this.storeSession.bind(this, "en")}>EN</Link>
            <Link to="homepage-ja" onClick={this.storeSession.bind(this, "ja")}>日本語</Link>
            <Link to="homepage-ko" onClick={this.storeSession.bind(this, "ko")}>한국어</Link> */}
            {
              // <img src={this.headerImg(this.props.wp_path.split("-")[0])}/>
              // this.headerImg.bind(this,this.props.wp_path.split("-")[0])
            }
          </div>
        </div>
        {
          // this.props.language==="ja"?<>{this.clickLang("ja")}</>:this.props.language==="ko"?<>{this.clickLang("ko")}</>:<>{this.clickLang("en")}</>
          <>
            {/* <a aria-current="page" href={this.changeLang("ko")} onClick={this.changeSession("ko")}>한국어</a>
          <a aria-current="page" href={this.changeLang("en")} onClick={this.changeSession("en")}>EN</a>
          <a aria-current="page" href={this.changeLang("ja")} onClick={this.changeSession("ja")}>日本語</a> */}
          </>
        }
      </header >
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       slug
//     }
//   }
// `

// export const image = useStaticQuery(graphql`
//   query {
//     file(relativePath: { eq: "images/default.jpg" }) {
//       childImageSharp {
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `)