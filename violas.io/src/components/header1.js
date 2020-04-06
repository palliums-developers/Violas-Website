import React, { Component } from "react"
import logoWhite_png from "../images/logo-white.png"
import logoPurple_png from "../images/logo-purple.png"
import "../style/header1.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "en",
            purple:false
        }
    }
    componentDidMount() {
        this.setState({ language: this.props.language });
        this.isPurple();
    }
    isPurple(){
        let page_type=this.props.wp_path?this.props.wp_path.split("-")[0]:"blog"
        if(page_type==="blog"||page_type==="whitepaper"){
            this.setState({purple:true})
        }else{
            this.setState({purple:false})
        }
    }
    changeLang(_chosenLang) {
        if(this.props.wp_path==="blog"){
            return this.props.wp_path
        }
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
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
                            aria-current="page"
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>
                        <a
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
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
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
                            aria-current="page"
                            href={this.changeLang("en")}
                            onClick={this.changeSession.bind(this, "en")}
                        >
                            EN
                        </a>
                        <a
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
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
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
                            aria-current="page"
                            href={this.changeLang("ja")}
                            onClick={this.changeSession.bind(this, "ja")}
                        >
                            日本語
                        </a>
                        <a
                            style={this.state.purple?{color:"#501ba2"}:{color:"white"}}
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
    selectLink = (_lang) => {
        switch (_lang) {
            case "en":
                return <>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="logo" href="homepage-en"><img src={this.state.purple?logoPurple_png:logoWhite_png}></img></a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="vision-en">Vision</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="association-en">Association</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="partners-en">Partners</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} className="link" href="https://testnet.violas.io/app/Violas">Blockchain Explorer</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="developers-en">Developers</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="media-en">Media</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="blog">Blog</a>
                    <a style={this.state.purple?{color:"white",backgroundColor:"#501ba2"}:{color:"#501ba2",backgroundColor:"white"}} aria-current="page" className="whitepaper" href="whitepaper-en">WhitePaper</a>
                </>
            case "ja":
                return <>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="logo" href="homepage-ja"><img src={this.state.purple?logoPurple_png:logoWhite_png}></img></a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="vision-ja">ビジョン</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="association-ja">アソシエーション</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="partners-en">パートナー</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} className="link" href="https://testnet.violas.io/app/Violas">ブロックチェーン エクスプローラ</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="developers-ja">開発者</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="media-ja">メディア</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="blog">Blog</a>
                    <a style={this.state.purple?{color:"white",backgroundColor:"#501ba2"}:{color:"#501ba2",backgroundColor:"white"}} aria-current="page" className="whitepaper" href="whitepaper-ja">ホワイトペーパー</a>
                </>
            case "ko":
                return <>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="logo" href="homepage-ko"><img src={this.state.purple?logoPurple_png:logoWhite_png}></img></a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="vision-ko">비전</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="association-ko">협회</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="partners-en">파트너들</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} className="link" href="https://testnet.violas.io/app/Violas">블록체인 탐색기</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="developers-ko">개발자</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="media-ko">미디어</a>
                    <a style={this.state.purple?{color:"#501ba2"}:{color:"white"}} aria-current="page" className="link" href="blog">Blog</a>
                    <a style={this.state.purple?{color:"white",backgroundColor:"#501ba2"}:{color:"#501ba2",backgroundColor:"white"}} aria-current="page" className="whitepaper" href="whitepaper-ko">백서</a>
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
                    </div>
                </div>
            </header >
        )
    }
}
export default Header