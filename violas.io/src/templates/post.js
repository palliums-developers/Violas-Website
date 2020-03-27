import React, { Component } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
class Post extends Component {
  render() {
    // const post = this.props.data.wordpressPost
    const StaticPost = this.props.data.wordpressPost;
    return (
      <>
        <Header></Header>
        <h1>{StaticPost.title}</h1>
        <h4>{StaticPost.author.name}</h4>
        <div dangerouslySetInnerHTML={{ __html: StaticPost.content }}></div>
        <h5>{StaticPost.date}</h5>
        <Footer></Footer>
      </>
    )
  }
}

export default Post

export const MyQuery = graphql `
  query  {
    wordpressPost(content: {}) {
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
