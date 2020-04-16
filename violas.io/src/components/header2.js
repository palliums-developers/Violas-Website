import React, { Component } from "react"
import logoWhite_png from "../images/logo-white.png"
import logoWhite_png1 from '../images/logo-white-single.png'
import logoWhite_png11 from '../images/logo-purple-single.png'
import logoWhite_png2 from '../images/menu-button-white.png'
import logoWhite_png22 from '../images/menu-button-purple.png'
import logoWhite_png3 from '../images/home 2.png'
import logoWhite_png4 from '../images/X.png'
import "../style/header1.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "en",
            dis: 'none'
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
                            style={{ color: "white" }}
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>&nbsp;|&nbsp;
                        <a
                            aria-current="page"
                            style={{ color: "white" }}
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
                            style={{ color: "white" }}
                            href={this.changeLang("en")}
                            onClick={this.changeSession.bind(this, "en")}
                        >
                            EN
                        </a>&nbsp;|&nbsp;
                        <a
                            aria-current="page"
                            style={{ color: "white" }}
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
                            style={{ color: "white" }}
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>&nbsp;|&nbsp;
                        <a
                            aria-current="page"
                            style={{ color: "white" }}
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
    selectLink = (_lang) => {
        switch (_lang) {
            case "en":
                return <>
                    <a aria-current="page" className="link" href="vision-en">Vision</a>
                    <a aria-current="page" className="link" href="association-en">Association</a>
                    <a aria-current="page" className="link" href="partners-en">Partners</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank">Blockchain Explorer</a>
                    <a aria-current="page" className="link" href="developers-en">Developers</a>
                    <a aria-current="page" className="link" href="media-en">Media</a>
                    <a aria-current="page" className="link" href="blog">Blog</a>
                    <a className="link" href="" target="_blank">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="whitepaper-en">WhitePaper</a>
                </>
            case "ja":
                return <>
                    <a aria-current="page" className="link" href="vision-ja">ビジョン</a>
                    <a aria-current="page" className="link" href="association-ja">アソシエーション</a>
                    <a aria-current="page" className="link" href="partners-ja">パートナー</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank">ブロックチェーン エクスプローラ</a>
                    <a aria-current="page" className="link" href="developers-ja">開発者</a>
                    <a aria-current="page" className="link" href="media-ja">メディア</a>
                    <a aria-current="page" className="link" href="blog">Blog</a>
                    <a className="link" href="" target="_blank">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="whitepaper-ja">ホワイトペーパー</a>
                </>
            case "ko":
                return <>
                    <a aria-current="page" className="link" href="vision-ko">비전</a>
                    <a aria-current="page" className="link" href="association-ko">협회</a>
                    <a aria-current="page" className="link" href="partners-ja">파트너들</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank">블록체인 탐색기</a>
                    <a aria-current="page" className="link" href="developers-ko">개발자</a>
                    <a aria-current="page" className="link" href="media-ko">미디어</a>
                    <a aria-current="page" className="link" href="blog">Blog</a>
                    <a className="link" href="" target="_blank">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="whitepaper-ko">백서</a>
                </>
        }
    }
    getDis = () => {
        this.setState({
            dis: 'flex'
        }, () => {
            // console.log(this.state.dis)
        })
    }
    getDis2 = () => {
        // console.log('11111')
        this.setState({
            dis: 'none'
        }, () => {
            console.log(this.state.dis)
        })
    }
    whiteBg(_temp) {
        if (_temp === "logo") {
            switch (sessionStorage.getItem("wp_path")) {
                case "blog":
                    return logoWhite_png11
                case "whitepaper":
                    return logoWhite_png11
                case "developers":
                    return logoWhite_png11
                default:
                    return logoWhite_png1
            }
        } else {
            switch (sessionStorage.getItem("wp_path")) {
                case "blog":
                    return logoWhite_png22
                case "whitepaper":
                    return logoWhite_png22
                case "developers":
                    return logoWhite_png22
                default:
                    return logoWhite_png2
            }
        }
    }
    render() {
        return (
            <header className="header2">
                <div className="head">
                    <a aria-current="page" href={"homepage-" + this.state.language}><img src={this.whiteBg("logo")} /></a>
                    <a onClick={() => this.getDis()}><img src={this.whiteBg("menu")} /></a>
                </div>
                <div className="asideLayout" style={{ display: this.state.dis }}>
                    <div className="aside">
                        <div className="display">
                            <a aria-current="page" href={"homepage-" + this.state.language}><img src={logoWhite_png3} /></a>
                            <a onClick={() => this.getDis2()}><img src={logoWhite_png4} /></a>
                        </div>
                        <div className="linkPage">
                            {
                                this.selectLink("en")
                            }
                        </div>
                        <div className="langs">
                            {
                                this.clickLang(this.state.language)
                            }
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}
export default Header