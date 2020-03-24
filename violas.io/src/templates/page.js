import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class Page extends Component {
  componentWillMount(){
    this.followLang()
  }
  followLang() {
    let temp_lang = JSON.parse(sessionStorage.getItem("violas-lang"));
    let slug = this.props.data.wordpressPage.slug.toString();
    if(temp_lang!==slug.split('-')[1]){
      window.location = slug.split('-')[0]+'-'+temp_lang;
    }
  }
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <>
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
