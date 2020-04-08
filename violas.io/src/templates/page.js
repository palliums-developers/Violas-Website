import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.min.css";

import "../style/headContent.css"
import logoWhite_jpg from "../images/logo-white.png"
import logoPurple_jpg from "../images/logo-purple.png"
import homepage_jpg from "../images/homepage.jpg"
import vision_jpg from "../images/vision.jpg"
import association_jpg from "../images/association.jpg"
import partners_jpg from "../images/partners.jpg"
import media_jpg from "../images/media.jpg"
import cover_png from "../images/cover.png"

class Page extends Component {
  componentWillMount() {
    this.followLang()
  }
  componentDidMount() {
    var mySwiper = new Swiper(".swiper-container1", {
      slidesPerView: 3.3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  followLang() {
    let temp_lang = this.langLimit();
    let slug = this.props.data.wordpressPage.slug.toString();
    if (slug !== "violas-blog" && slug !== "blog" && temp_lang !== slug.split('-')[1]) {
      window.location = slug.split('-')[0] + '-' + temp_lang;
    }
  }
  langLimit() {
    let _temp = JSON.parse(sessionStorage.getItem("violas-lang"));
    switch (_temp) {
      case "ko":
        return "ko";
      case "ja":
        return "ja";
      default:
        return "en";
    }
  }
  selectBackgroundImg(_pageName) {
    switch (_pageName) {
      case "homepage":
        // return <img src="/static/9bb038b9ff4d9f1cede0b1232abd6e6c/14b42/homepage.jpg" />
        // return <img src={homepage_jpg} />
        return homepage_jpg
      case "vision":
        // return <img src="/static/3cad50fb229e266066a9bdf3996fd227/14b42/vision.jpg" />
        // return <img src={vision_jpg} />
        return vision_jpg
      case "association":
        // return <img src="/static/b9880b6f7ff04cd9bb3e35c078570490/14b42/association.jpg" />
        // return <img src={association_jpg} />
        return association_jpg
      case "partners":
        // return <img src="/static/82dd86db42801d541b03592db593786b/14b42/partners.jpg" />
        // return <img src={partners_jpg} />
        return partners_jpg
      case "media":
        // return <img src="/static/2937f6503b6e9bf3b89b6e28fabc842a/14b42/media.jpg" />
        // return <Img fluid={data.media.childImageSharp.fluid}/>
        // return <img src={media_jpg} />
        return media_jpg
      case "logo-purple":
        // return <img src="/static/c7a541a81abe46e6e59775bf7782f50d/75ec2/logo-purple.png" />
        // return <img src={logoPurple_jpg} />
        return logoPurple_jpg
      case "logo-white":
        return logoWhite_jpg
      default:
        return logoWhite_jpg;
    }
  }
  hasBackground(_temp) {
    let url = _temp.split("/")[1].split("-")[0]
    if (url === "blog") {
      return {
        height:"80px"
      }
    } if (url === "whitepaper") {
      return {
        height:"80px"
      }
    } else {
      return { background: 'url(' + this.selectBackgroundImg(url) + ')' + ', url(' + cover_png + ')',
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50%"
    }
    }
  }
  render() {
    const StaticPage = this.props.data.wordpressPage;
    // backgroundImage: 'url(' + this.headerImg(this.props.wp_path.split("-")[0] ? this.props.wp_path.split("-")[0] : '111') + ')',
    // console.log(this.props.path.split("/")[1].split("-")[0]);
    console.log(this.props.path);
    return (
      <>
        {/* {
        this.props.data.wordpressPage.slug.toString()==="violas-blog"?

      } */}
        <SEO title="violas pages" />
        {/* <div className="headContent" style={{
          backgroundImage: 'url(' + this.selectBackgroundImg(this.props.path.split("/")[1].split("-")[0]) + ')' + ', url(' + cover_png + ')',
        }}></div> */}
        <div className="headContent" style={
          this.hasBackground(this.props.path)
        }></div>
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: StaticPage.content }}></div>
        </Layout>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
