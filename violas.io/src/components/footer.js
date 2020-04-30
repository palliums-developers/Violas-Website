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
    let type = this.props.wp_path ? this.props.wp_path.split("-")[0] : null
    let slug = "/media"
    if (type !== "media") {
      slug = "/" + type + "-" + _chosenLang
    }
    return slug
  }
  changeSession(_chosenLang) {
    // sessionStorage.setItem("violas-lang", JSON.stringify(_chosenLang))
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("violas-lang", JSON.stringify(_chosenLang))
    }
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
              // href="/vision-ja"
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
            <div className="lang">
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
