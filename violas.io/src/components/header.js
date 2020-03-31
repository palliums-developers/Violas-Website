// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { Component } from "react"
import langLink from "./langLink"
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
    this.setState({ language: this.props.language })
  }
  // changeLang(_chosenLang) {
  //   let slug = this.props.wp_path.split("-")[0] + "-" + _chosenLang
  //   return slug
  // }
  // changeSession(_chosenLang) {
  //   sessionStorage.setItem("violas-lang", JSON.stringify(_chosenLang))
  // }
  // clickLang(_lang) {
  //   switch (_lang) {
  //     case "en":
  //       return (
  //         <>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("ja")}
  //             onClick={this.changeSession("ja")}
  //           >
  //             日本語
  //           </a>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("ko")}
  //             onClick={this.changeSession("ko")}
  //           >
  //             한국어
  //           </a>
  //         </>
  //       )
  //     case "ja":
  //       return (
  //         <>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("en")}
  //             onClick={this.changeSession("en")}
  //           >
  //             EN
  //           </a>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("ko")}
  //             onClick={this.changeSession("ko")}
  //           >
  //             한국어
  //           </a>
  //         </>
  //       )
  //     case "ko":
  //       return (
  //         <>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("ja")}
  //             onClick={this.changeSession("ja")}
  //           >
  //             日本語
  //           </a>
  //           <a
  //             aria-current="page"
  //             href={this.changeLang("ko")}
  //             onClick={this.changeSession("ko")}
  //           >
  //             EN
  //           </a>
  //         </>
  //       )
  //   }
  // }

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
    switch (_pages) {
      case "homepage":
        return <img src="/static/9bb038b9ff4d9f1cede0b1232abd6e6c/14b42/homepage.jpg" />
      case "vision":
        return <img src="/static/3cad50fb229e266066a9bdf3996fd227/14b42/vision.jpg" />
      case "association":
        return <img src="/static/b9880b6f7ff04cd9bb3e35c078570490/14b42/association.jpg" />
      case "partners":
        return <img src="/static/82dd86db42801d541b03592db593786b/14b42/partners.jpg" />
      case "media":
        return <img src="/static/2937f6503b6e9bf3b89b6e28fabc842a/14b42/media.jpg" />
      case "logo":
        return <img src="/static/c7a541a81abe46e6e59775bf7782f50d/75ec2/logo-purple.png" />
    }
  }
  render() {
    return (
      <header
        style={{
          // background: `rebeccapurple`,
          background: `black`,
          height:100
          // marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            
            // padding: `1.45rem 1.0875rem`,
          }}
          className="head"
        >
          <div
            className="nav"
            dangerouslySetInnerHTML={{ __html: langLink(this.state.language) }}
          ></div>
          <div className="lang">
          {/* <p onClick={this.clickLang.bind(this,"en")}>EN aaa</p>
          <p onClick={this.clickLang.bind(this,"ja")}>日本語 aaa</p>
          <p onClick={this.clickLang.bind(this,"ko")}>한국어 aaa</p> */}
          {/* <p onClick={console.log('111')}>test</p> */}
          <Link to="homepage-en" onClick={this.storeSession.bind(this, "en")}>EN</Link>
          <Link to="homepage-ja" onClick={this.storeSession.bind(this, "ja")}>日本語</Link>
          <Link to="homepage-ko" onClick={this.storeSession.bind(this, "ko")}>한국어</Link>
          {
            // switch(this.props.wp_path.split("-")[0]){
            //   case "version":

            // }
            // console.log(this.props.wp_path.split("-")[0])
            this.headerImg(this.props.wp_path.split("-")[0])
            // this.headerImg.bind(this,this.props.wp_path.split("-")[0])
          }
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
        
      </header>
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

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      slug
    }
  }
`
