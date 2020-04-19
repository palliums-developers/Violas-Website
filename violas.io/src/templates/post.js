import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Header1 from "../components/header1"
import Header2 from "../components/header2"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/blogs.css"
import Header from "../components/header1"

class Post extends Component {
  componentWillMount() {
    // sessionStorage.setItem("wp_path","blog")
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("wp_path", "media")
    }
  }
  render() {
    // const post = this.props.data.wordpressPost
    const StaticPost = this.props.data.wordpressPost;
    return (
      <div className="blog">
        <SEO title="violas posts" />
        <Layout>
          <div className="blog_detail">
            {/* <h1>{StaticPost.title}</h1>
            <h4>{StaticPost.author.name}</h4> */}
            <div dangerouslySetInnerHTML={{ __html: StaticPost.content }}></div>
            <h5>{StaticPost.date}</h5>
          </div>
          <div className="relative">
            <h2>Related Literature</h2>
            <p>{StaticQuery}</p>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Post

export const MyQuery = graphql`
  query  ($id: String!){
    wordpressPost(content: {}, id:{eq:$id} ) {
      title
      content
      date (formatString: "YYYY-MM-DD")
      author {
        name
      }
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         node {
//           title
//           content
//           slug
//           id
//           author {
//             name
//           }
//           date
//         }
//       }
//     }
//   }
// `
// export const postQuery = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//     }
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

// {
//   allWordpressPost {
//     edges {
//       previous {
//         title
//       }
//       next {
//         title
//       }
//       node {
//         slug
//         content
//         date(formatString: "YYY-MM-DD")
//         title
//         author {
//           name
//         }
//         categories {
//           link
//           name
//           path
//           slug
//         }
//         excerpt
//       }
//     }
//     totalCount
//   }
// }

// {
//   wordpressPost(categories: {elemMatch: {name: {eq: "blog"}}}) {
//     id
//     path
//     slug
//   }
// }
