import React, { Component } from "react"
// import logoWhite_png from "../images/logo-white.png"
import logoWhite_png1 from '../images/logo-white-single.png'
import logoPurpleS from '../images/logo-purple-single.png'
import logoWhite_png2 from '../images/menu-button-white.png'
import logoPurple_png22 from '../images/menu-button-purple.png'
import logoWhite_png3 from '../images/home 2.png'
import logoWhite_png4 from '../images/X.png'
import "../style/header1.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "en",
            purple: false,
            dis: 'none'
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({ language: this.props.language });
        this.isPurple();
        // this.setState({dis:this.props.closeNav})
        // document.addEventListener('click',()=>{
        //     this.getDis2()
        // })
    }
    isPurple() {
        let page_type = this.props.wp_path ? this.props.wp_path.split("-")[0] : "media";
        if (page_type === "media" || page_type === "whitepaper" || page_type === "developers" || page_type==="blog") {
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
                            style={{ color: "white" }}
                            aria-current="page"
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>&nbsp;|&nbsp;
                        <a
                            style={{ color: "white" }}
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
                            style={{ color: "white" }}
                            aria-current="page"
                            href={this.changeLang("en")}
                            onClick={this.changeSession.bind(this, "en")}
                        >
                            EN
                        </a>&nbsp;|&nbsp;
                        <a
                            style={{ color: "white" }}
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
                            style={{ color: "white" }}
                            aria-current="page"
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>&nbsp;|&nbsp;
                        <a
                            style={{ color: "white" }}
                            aria-current="page"
                            href={this.changeLang("en")}
                            onClick={this.changeSession.bind(this, "en")}
                        >
                            EN
                        </a>
                    </>
                )
            default:
                return;
        }
    }
    getSession = (_lang) => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(_lang)
        }
    }
    selectLinkList = (_lang) => {
        switch (_lang) {
            case "ja":
                return (<>
                    <a aria-current="page" className="link" href="/vision-ja">ビジョン</a>
                    <a aria-current="page" className="link" href="/association-ja">アソシエーション</a>
                    <a aria-current="page" className="link" href="/partners-ja">パートナー</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank" rel="noopener noreferrer">ブロックチェーン エクスプローラ</a>
                    <a aria-current="page" className="link" href="/developers-ja">開発者</a>
                    <a aria-current="page" className="link" href="/media">メディア</a>
                    <a className="link" href="https://wallet.violas.io/" target="_blank" rel="noopener noreferrer">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="/whitepaper-ja">ホワイトペーパー</a>
                </>)
            case "en":
                return (<>
                    <a aria-current="page" className="link" href="/vision-en">Vision</a>
                    <a aria-current="page" className="link" href="/association-en">Association</a>
                    <a aria-current="page" className="link" href="/partners-en">Partners</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank" rel="noopener noreferrer">Blockchain Explorer</a>
                    <a aria-current="page" className="link" href="/developers-en">Developers</a>
                    <a aria-current="page" className="link" href="/media">Media</a>
                    <a className="link" href="https://wallet.violas.io/" target="_blank" rel="noopener noreferrer">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="/whitepaper-en">WhitePaper</a>
                </>)
            case "ko":
                return (<>
                    <a aria-current="page" className="link" href="/vision-ko">비전</a>
                    <a aria-current="page" className="link" href="/association-ko">협회</a>
                    <a aria-current="page" className="link" href="/partners-ko">파트너들</a>
                    <a className="link" href="https://testnet.violas.io/app/Violas" target="_blank" rel="noopener noreferrer">블록체인 탐색기</a>
                    <a aria-current="page" className="link" href="/developers-ko">개발자</a>
                    <a aria-current="page" className="link" href="/media">미디어</a>
                    <a className="link" href="https://wallet.violas.io/" target="_blank" rel="noopener noreferrer">Wallet</a>
                    <a aria-current="page" className="whitepaper" href="/whitepaper-ko">백서</a>
                </>)
            default:
                return;
        }
    }
    getDis = () => {
        this.setState({
            dis: 'flex'
        })
    }
    getDis2 = () => {
        this.setState({
            dis: 'none'
        })
    }
    whiteBg(_temp) {
        if (_temp === "logo") {
            if (this.state.purple) {
                return logoPurpleS
            } else {
                return logoWhite_png1
            }
        } else {
            if (this.state.purple) {
                return logoPurple_png22
            } else {
                return logoWhite_png2
            }
        }
    }
    render() {
        return (
            <header className="header2">
                <div className="head" style={this.getSession("wp_path") === "media" ? { backgroundColor: "#F9F9F9 " } : null}>
                    <a aria-current="page" href={"/homepage-" + this.state.language}><img src={this.whiteBg("logo")} alt="logo" /></a>
                    <a onClick={() => this.getDis()}><img src={this.whiteBg("menu")} alt="menu" /></a>
                </div>
                <div className="asideLayout" style={{ display: this.state.dis }}>
                    <div className="aside">
                        <div className="display">
                            <a aria-current="page" href={"/homepage-" + this.state.language}><img src={logoWhite_png3} alt="logo" /></a>
                            <a onClick={() => this.getDis2()}><img src={logoWhite_png4} alt="logo" /></a>
                        </div>
                        <div className="linkPage">
                            {
                                this.selectLinkList(this.props.language)
                            }
                        </div>
                        <div className="langs">
                            {
                                this.clickLang(this.props.language)
                            }
                        </div>
                    </div>
                    {/* <div className="aside2">
                            aaa
                    </div> */}
                </div>
            </header >
        )
    }
}
export default Header