import React, { Component } from "react"
import "../style/404.css"
import SEO from "../components/seo"

// const NotFoundPage = () => (
//   <>
//     <SEO title="404: Not found" />
//     <Layout>
//       {/* <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
//       {/* <h1>Sorry I can't found</h1> */}
//       <div className="p404">
//         <h1>404</h1>
//         <h2>Page Not Found</h2>
//       </div>
//     </Layout>
//   </>
// )

class NotFoundPage extends Component {
  constructor(props){
    super(props)
    this.state={
      _lang:"en"
    }
  }
  componentWillMount(){
    this.getLang()
  }
  initLang(){
    if(typeof window !== 'undefined'){
      sessionStorage.setItem("violas-lang","en")
    }
  }
  getLang(){
    let res="en";
    if(typeof window !== 'undefined'){
      res= sessionStorage.getItem("violas-lang")
    }
    // console.log(res)
    this.setState({_lang:res})
  }
  render() {
    return (
      <>
        <SEO title="404: Not found" />
        <div className="p404">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          {/* <Link src="/">Come to homepage</Link> */}
          <a aria-current="page" href={"/homepage-en"} onClick={this.initLang.bind(this)}>Come to homepage</a>
          {/* <a aria-current="page" href={"/homepage-"+this.state._lang} onClick={this.initLang.bind(this)}>Come to homepage</a> */}
        </div>
      </>
    )
  }
}
export default NotFoundPage
