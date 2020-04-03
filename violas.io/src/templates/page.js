import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.min.css";
class Page extends Component {
  componentWillMount() {
    this.followLang()
  }
  componentDidMount(){
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
  langLimit(){
    let _temp=JSON.parse(sessionStorage.getItem("violas-lang"));
    switch (_temp){
      case "ko":
        return "ko";
      case "ja":
        return "ja";
      default:
        return "en";
    }
  }
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <>
      {/* {
        this.props.data.wordpressPage.slug.toString()==="violas-blog"?

      } */}
          <SEO title="violas pages" />
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
