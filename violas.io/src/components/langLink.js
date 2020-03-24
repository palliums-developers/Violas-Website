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
    ["Media", "media-en"],
    ["Developers", "developers-en"],
    ["WhitePaper", "whitepaper-en"],
  ],
  ja: [
    ["homepage", "homepage-ja"],
    ["ビジョン", "vision-ja"],
    ["アソシエーション", "association-ja"],
    ["パートナー", "partners-ja"],
    ["ブロックチェーン エクスプローラ", explorerUrl],
    ["メディア", "media-ja"],
    ["開発者", "developers-ja"],
    ["ホワイトペーパー", "whitepaper-ja"],
  ],
  ko: [
    ["homepage", "homepage-ko"],
    ["비전", "vision-ko"],
    ["협회", "association-ko"],
    ["파트너들", "partners-ko"],
    ["블록체인 탐색기", explorerUrl],
    ["미디어", "media-ko"],
    ["개발자", "developers-ko"],
    ["백서", "whitepaper-ko"],
  ],
}
const langLink = _lang => {
  let result = ""
  let page_json =
    _lang == "ja" ? router.ja : _lang == "ko" ? router.ko : router.en
  for (let i = 0; i < page_json.length; i++) {
    if (i == 0) {
      result += "<a aria-current=\"page\" href='" + page_json[i][1] + "'><img src='/images/logo-white.png'/></a>"
    } else if (i == 4) {
      result += "<a href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
    } else {
      result +=
        "<a aria-current=\"page\" href='" + page_json[i][1] + "'>" + page_json[i][0] + "</a>"
    }
  }
  return result
}
export default langLink;