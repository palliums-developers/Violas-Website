import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../style/blogs.css"

class Media extends Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("wp_path", "media")
    }
  }
  render() {
    const data = this.props.data
    return (
      <>
        <SEO title="violas blog" />
        <div style={{ backgroundColor: " #F9F9F9 " }}>
          <Layout>
            <div className="blog_list">
              {data.allWordpressPost.edges.map(({ node }) => (
                <div key={node.slug}>
                  <Link to={node.slug}>
                    <h2>{node.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                    {/* <p>{node.date}</p> */}
                  </Link>
                </div>
              ))}
            </div>
          </Layout>
        </div>
      </>
    )
  }
}
export default Media

// export const pageQuery = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         previous {
//           title
//         }
//         next {
//           title
//         }
//         node {
//           slug
//           content
//           date(formatString: "YYY-MM-DD")
//           title
//           author {
//             name
//           }
//         }
//       }
//       totalCount
//     }
//   }
// `

export const pageQuery = graphql`
query{
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
        categories {
          name
        }
        excerpt
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