// import LogoPath from "./logo"
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import logoWhite_png from "../images/logo-white.png"
import logoPurple_png from "../images/logo-purple.png"
import logoWhiteS_png from "../images/logo-purple-single.png"
import logoPurpleS_png from "../images/logo-purple-single.png"

const explorerUrl = "https://testnet.violas.io/app/Violas"

const router = {
  en: [
    ["homepage", "homepage-en"],
    ["Vision", "vision-en"],
    ["Association", "association-en"],
    ["Partners", "partners-en"],
    ["Blockchain Explorer", explorerUrl],
    ["Developers", "developers-en"],
    ["Media", "media-en"],
    ["Blog", "blog"],
    ["WhitePaper", "whitepaper-en"],
  ],
  ja: [
    ["homepage", "homepage-ja"],
    ["ビジョン", "vision-ja"],
    ["アソシエーション", "association-ja"],
    ["パートナー", "partners-ja"],
    ["ブロックチェーン エクスプローラ", explorerUrl],
    ["開発者", "developers-ja"],
    ["メディア", "media-ja"],
    ["Blog", "blog"],
    ["ホワイトペーパー", "whitepaper-ja"],
  ],
  ko: [
    ["homepage", "homepage-ko"],
    ["비전", "vision-ko"],
    ["협회", "association-ko"],
    ["파트너들", "partners-ko"],
    ["블록체인 탐색기", explorerUrl],
    ["개발자", "developers-ko"],
    ["미디어", "media-ko"],
    ["Blog", "blog"],
    ["백서", "whitepaper-ko"],
  ],
}

const langLink = (_lang, logo_type, text_color) => {
  let link_color="white";
  let whitepaper_color="#501ba2";
  if(text_color==="purple"){
    link_color="#501ba2"
    whitepaper_color="white"
  }
  let page_json =
    _lang === "ja" ? router.ja : _lang === "ko" ? router.ko : router.en;

  // const data =useStaticQuery(graphql`
  // query  {
  //     logo_white:file(relativePath: {eq: "logo-white.png"}){
  //         childImageSharp{
  //             fixed{
  //                 ...GatsbyImageSharpFixed
  //             }
  //         }
  //     }
  // }
  // `)

  // let result = "";
  // for (let i = 0; i < page_json.length; i++) {
  //   if (i === 0) {
  //     // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src='/static/247851bb72483b4273995cf9041752c2/75ec2/logo-white.png'/></a>"
  //     // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src={this.logoPath()}/></a>"
  //     result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><img src={"+logoWhite_png+"}/></a>"
  //   } else if (i === 4) {
  //     result += "<a href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
  //   } else if (i === 8) {
  //     result += "<a aria-current=\"page\" className=\"whitepaper\" href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
  //   }
  //   else {
  //     result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
  //   }
  // }

  // let result = "";
  // for (let i = 0; i < page_json.length; i++) {
  //   if (i === 0) {
  //     // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src='/static/247851bb72483b4273995cf9041752c2/75ec2/logo-white.png'/></a>"
  //     // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src={this.logoPath()}/></a>"
  //     result += <a aria-current="page" href={page_json[i][1]}><img src={logoWhite_png}/></a>
  //   } else if (i === 4) {
  //     result += <a href={page_json[i][1]}>{page_json[i][0]}</a>
  //   } else if (i === 8) {
  //     result += <a aria-current="page" className="whitepaper" href={page_json[i][1]}>{page_json[i][0]}</a>
  //   }
  //   else {
  //     result += <a aria-current="page" href={page_json[i][1]}>{page_json[i][0]}</a>
  //   }
  // }

  let result = [];
  for (let i = 0; i < page_json.length; i++) {
    if (i === 0) {
      // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src='/static/247851bb72483b4273995cf9041752c2/75ec2/logo-white.png'/></a>"
      // result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><Img src={this.logoPath()}/></a>"
      // if(logo_type==="white"){
      //   result.push(<a aria-current="page" href={page_json[i][1]} className="logo"><img src={logoWhite_png} /></a>)
      // }else if(logo_type==="purple"){
      //   result.push(<a aria-current="page" href={page_json[i][1]} className="logo"><img src={logoPurple_png} /></a>)
      // }
      switch (logo_type) {
        case "white":
          // result.push(<div className="logo"><a aria-current="page" href={page_json[i][1]}><img src={logoWhite_png} /></a></div>)
          result.push(<a aria-current="page" className="logo" href={page_json[i][1]}><img src={logoWhite_png} /></a>)
          break;
        case "purple":
          // result.push(<div className="logo"><a aria-current="page" href={page_json[i][1]}><img src={logoPurple_png} /></a></div>)
          result.push(<a aria-current="page" className="logo" href={page_json[i][1]}><img src={logoPurple_png} /></a>)
          break;
        case "white-single":
          // result.push(<div className="logo"><a aria-current="page" href={page_json[i][1]}><img src={logoWhiteS_png} /></a></div>)
          result.push(<a aria-current="page" className="logo" href={page_json[i][1]}><img src={logoWhiteS_png} /></a>)
          break;
        case "purple-single":
          // result.push(<div className="logo"><a aria-current="page" href={page_json[i][1]}><img src={logoPurpleS_png} /></a></div>)
          result.push(<a aria-current="page" className="logo" href={page_json[i][1]}><img src={logoPurpleS_png} /></a>)
          break;
      }
    } else if (i === 4) {
      result.push(<a style={{color:link_color}} href={page_json[i][1]}>{page_json[i][0]}</a>)
    } else if (i === 8) {
      result.push(<a style={{color:whitepaper_color,backgroundColor:link_color}} aria-current="page" className="whitepaper" href={page_json[i][1]}>{page_json[i][0]}</a>)
    }
    else {
      result.push(<a style={{color:link_color}} aria-current="page" href={page_json[i][1]}>{page_json[i][0]}</a>)
    }
  }

  // console.log(result)
  return result
}

// langLink("en");

export default langLink;