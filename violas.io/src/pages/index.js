import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO title="Home" />
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query{
    allWordpressPage {
      edges {
        node {
          title
          content
          slug
          id
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          content
          slug
          id
          author {
            name
          }
          date
        }
      }
    }
  }
`
