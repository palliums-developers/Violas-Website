import React, { Component } from "react"
import logoWhite_png from "../images/logo-white.png"
import logoPurple_png from "../images/logo-purple.png"
import lang1 from '../images/lang1.png'
import lang2 from '../images/lang2.png'
import "../style/header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "en",
            purple: false,
            langClick: false
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({ language: this.props.language });
        this.isPurple();
    }
    isPurple() {
        let page_type = this.props.wp_path ? this.props.wp_path.split("-")[0] : "media";
        if (page_type === "media" || page_type === "whitepaper" || page_type === "developers" || page_type === "blog") {
            this.setState({ purple: true })
            return
        } else {
            this.setState({ purple: false })
            return
        }
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
        if (typeof window !== 'undefined') {
            sessionStorage.setItem("violas-lang", JSON.stringify(_chosenLang))
        }
    }
    langListBorder(_temp) {
        if (_temp === "clickLang") {
            return this.state.purple ? { color: "#501ba2", border: "#501ba2 1px solid" } : { color: "white" }
        }
        return this.state.purple ? { border: "#501ba2 1.5px solid" } : {}
    }
    clickLangList(_lang) {
        switch (_lang) {
            case "en":
                return (
                    <div className="aaa" style={this.langListBorder()}>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("ja")}
                                onClick={this.changeSession.bind(this, "ja")}
                            >
                                日本語
                        </a>
                        </div>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("ko")}
                                onClick={this.changeSession.bind(this, "ko")}
                            >
                                한국어
                        </a>
                        </div>
                    </div>
                )
            case "ja":
                return (
                    <div className="aaa" style={this.langListBorder()}>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("ko")}
                                onClick={this.changeSession.bind(this, "ko")}
                            >
                                한국어
                        </a>
                        </div>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("en")}
                                onClick={this.changeSession.bind(this, "en")}
                            >
                                EN
                        </a>
                        </div>
                    </div>
                )
            case "ko":
                return (
                    <div className="aaa" style={this.langListBorder()}>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("ja")}
                                onClick={this.changeSession.bind(this, "ja")}
                            >
                                日本語
                        </a>
                        </div>
                        <div className="aaa1">
                            <a
                                aria-current="page"
                                href={this.changeLang("en")}
                                onClick={this.changeSession.bind(this, "en")}
                            >
                                EN
                        </a>
                        </div>
                    </div>
                )
        }
    }
    clickLangButton() {
        this.setState({ langClick: !this.state.langClick })
    }
    clickLang(_lang) {
        let temp = _lang === "en" ? "EN" : _lang === "ja" ? "日本語" : _lang === "ko" ? "한국어" : "";
        return (<a className="aa" href="javascript:void(0);" style={this.langListBorder("clickLang")} onClick={this.clickLangButton.bind(this)}>{temp}<img src={this.state.purple ? lang2 : lang1}></img></a>)
    }
    // storeSession = (_lang) => {
    //     sessionStorage.setItem("violas-lang", JSON.stringify(_lang))
    // }
    selectLink = (_lang) => {
        switch (_lang) {
            case "en":
                return <>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="logo" href="/homepage-en"><img src={this.state.purple ? logoPurple_png : logoWhite_png}></img></a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/vision-en">Vision</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/association-en">Association</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/partners-en">Partners</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://testnet.violas.io/app/Violas" target="_blank">Blockchain Explorer</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/developers-en">Developers</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/media">Media</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://wallet.violas.io/" target="_blank">Wallet</a>
                    <a aria-current="page" className={this.state.purple ? "whitepaper1" : "whitepaper"} href="/whitepaper-en">WhitePaper</a>
                </>
            case "ja":
                return <>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="logo" href="/homepage-ja"><img src={this.state.purple ? logoPurple_png : logoWhite_png}></img></a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/vision-ja">ビジョン</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/association-ja">アソシエーション</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/partners-ja">パートナー</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://testnet.violas.io/app/Violas" target="_blank">ブロックチェーン エクスプローラ</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/developers-ja">開発者</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/media">メディア</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://wallet.violas.io/" target="_blank">Wallet</a>
                    <a aria-current="page" className={this.state.purple ? "whitepaper1" : "whitepaper"} href="/whitepaper-ja">ホワイトペーパー</a>
                </>
            case "ko":
                return <>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="logo" href="/homepage-ko"><img src={this.state.purple ? logoPurple_png : logoWhite_png}></img></a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/vision-ko">비전</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/association-ko">협회</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/partners-ko">파트너들</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://testnet.violas.io/app/Violas" target="_blank">블록체인 탐색기</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/developers-ko">개발자</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} aria-current="page" className="link" href="/media">미디어</a>
                    <a style={this.state.purple ? { color: "#501ba2" } : { color: "white" }} className="link" href="https://wallet.violas.io/" target="_blank">Wallet</a>
                    <a aria-current="page" className={this.state.purple ? "whitepaper1" : "whitepaper"} href="/whitepaper-ko">백서</a>
                </>
        }
    }
    render() {
        return (
            <header
                className="header1"
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
                            this.selectLink(this.state.language)
                        }
                    </div>
                    <div className="lang">
                        {
                            this.clickLang(this.state.language)
                        }
                        {
                            this.state.langClick ? this.clickLangList(this.state.language) : <></>
                        }
                    </div>
                </div>
            </header >
        )
    }
}
export default Header