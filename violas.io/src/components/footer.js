import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import langLink from "./langLink"
import Mail from '../images/mail.png'
import "../style/footer.css"

class Footer extends Component {
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
    let slug = this.props.wp_path ? this.props.wp_path.split("-")[0] + "-" + _chosenLang : "blog"
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
            |
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
            |
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
            |
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
  render() {
    return (
      // <footer>
      //   <div className="footerNav">
      //     <div className="logo" onClick={() => { this.props.history.push('/app/home') }}><img src={logoPurple_jpg} /></div>
      //     <div className="nav">
      //       <div>
      //         <Link>vision</Link>
      //         <Link>association</Link>
      //         <Link to="/app/partners">partners</Link>
      //       </div>
      //       <div>
      //         <a href="https://testnet.violas.io/app/Violas" target="_blank">blockchain explorer</a>
      //         <Link>media</Link>
      //         <Link>developers</Link>
      //       </div>
      //       <div>
      //         <Link>white paper</Link>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="email">
      //     <p>Copyright©2019Violas</p>
      //     {/* <p>{intl.get('footer.Connect Us')}</p> */}
      //     <p><img src={Mail} />violas.team@violas.io</p>
      //     <p>
      //       <span>日本语</span>
      //       <span>日本语</span>
      //     </p>
      //   </div>
      // </footer>
      <footer>
        <div className="foot">
          <div className="linkPage">
            {
              langLink(this.state.language, "purple-single", "purple", "footer")
            }
          </div>
          <div className="info">
            <div className="copyright">
              <p>©2020Violas</p>
            </div>
            <div className="email">
              <p><img src={Mail} />violas.team@violas.io</p>
            </div>
            <div className="langs">
              {
                this.clickLang(this.state.language)
              }
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
