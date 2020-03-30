// import { Link } from "gatsby"
// import React from "react"
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
const langLink = _lang => {
  let result = ""
  let page_json =
    _lang === "ja" ? router.ja : _lang === "ko" ? router.ko : router.en
  for (let i = 0; i < page_json.length; i++) {
    if (i === 0) {
      result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><img src='/static/247851bb72483b4273995cf9041752c2/75ec2/logo-white.png'/></a>"
    } else if (i === 4) {
      result += "<a href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
    } else if (i === 8) {
      result += "<a aria-current=\"page\" className=\"whitepaper\" href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
    }
    else {
      result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
    }
  }
  // console.log(result)
  return result
}
export default langLink;