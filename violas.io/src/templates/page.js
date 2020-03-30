import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends Component {
  componentWillMount() {
    this.followLang()
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
