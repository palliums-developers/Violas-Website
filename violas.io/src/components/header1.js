import React, { Component } from "react"
import logoWhite_png from "../images/logo-white.png"
import "../style/header1.css"

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
    storeSession = (_lang) => {
        sessionStorage.setItem("violas-lang", JSON.stringify(_lang))
    }
    selectLink=(_lang)=>{
        switch(_lang){
            case "en":
                return<>
                <a aria-current="page" className="logo" href="homepage-en"><img href={logoWhite_png}></img></a>
                <a aria-current="page" className="link" href="vision-en">Vision</a>
                <a aria-current="page" className="link" href="association-en">Association</a>
                <a className="link" href="">Blockchain Explorer</a>
                <a aria-current="page" className="link" href="developers-en">Developers</a>
                <a aria-current="page" className="link" href="media-en">Media</a>
                <a aria-current="page" className="link" href="blog">Blog</a>
                <a aria-current="page" className="whitepaper" href="whitepaper-en">WhitePaper</a>
                </>
            case "ja":
                return<>
                
                </>
            case "ko":
                return<>
                
                </>
        }
    }
    render() {
        return (
            <header
                style={{
                    background: `transparent`,
                    position: 'absolute',
                    top: '0px'
                }
                }
            >
                <div className="head" >
                    <div className="linkPage">
                        {
                            this.selectLink("en")
                        }
                    </div>
                    <div className="lang">
                        {
                            this.clickLang(this.state.language)
                        }
                    </div>
                </div>
            </header >
        )
    }
}
export default Header