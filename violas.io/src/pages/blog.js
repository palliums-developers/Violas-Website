import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

class Blog extends Component {
  render() {
    const data = this.props.data
    console.log(data.allWordpressPost.edges)
    return (
      <>
        <SEO title="violas blog" />
        <Header></Header>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <p>{node.date}</p>
          </div>
        ))}
        <Footer></Footer>
      </>
    )
  }
}
export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        previous {
          title
        }
        next {
          title
        }
        node {
          slug
          content
          date(formatString: "YYY-MM-DD")
          title
          author {
            name
          }
        }
      }
      totalCount
    }
  }
`

// query MyQuery {
//   allImageSharp {
//     nodes {
//       sizes {
//         originalName
//         src
//       }
//     }
//   }
// }
