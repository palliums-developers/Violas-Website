import React, { Component } from "react"
import { graphql } from "gatsby"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <>
        <h1>{StaticPage.title}</h1>
        {/* {StaticPage.content} */}
        <div dangerouslySetInnerHTML={{ __html: StaticPage.content }}></div>
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
