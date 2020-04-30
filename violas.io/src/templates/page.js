import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "swiper/css/swiper.min.css";
import "../style/swiper.css";
// import Swiper from "swiper/js/swiper.min.js"
import "../style/headContent.css"
import logoWhite_jpg from "../images/logo-white.png"
import logoPurple_jpg from "../images/logo-purple.png"
// import homepage_jpg from "../images/homepage.jpg"
import vision_jpg from "../images/vision.jpg"
import association_jpg from "../images/association.jpg"
import partners_jpg from "../images/partners.jpg"
import media_jpg from "../images/media.jpg"
import homepage_jpg1 from "../images/homepage1.jpg"
// import vision_jpg1 from "../images/vision1.jpg"
// import association_jpg1 from "../images/association1.jpg"
// import partners_jpg1 from "../images/partners1.jpg"
// import media_jpg1 from "../images/media1.jpg"
// import cover_png from "../images/cover.png"
import presentationLogo from "../images/presentationLogo.png"
import presentationBg from "../images/presentationBg.png"
import presentationSucceed from "../images/presentationSucceed.png"
import "../style/IEEE.css"
import { createStore } from "redux"

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: '',
      first_name: '',
      company_name: '',
      contact: '',
      job_title: '',
      business: '',
      specify: '',
      warning: '',
      postSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("violas-lang", this.props.path.split("/")[1].split("-")[1])
    }
    this.followLang()
    // if((typeof window !== 'undefined')){
    //   console.log(window.location.href,"window.location.href")
    // }
    // console.log(this.props.wp_path,'wp')
    // console.log(this.props.path, 'path')
    // console.log(this.props.url, 'url')
    // console.log(this.props.location.href, 'href')
    // console.log(this.props.location.pathname, 'pathname')
    // this.setState({
    //   last_name: '',
    //   first_name: '',
    //   company_name: '',
    //   contact: '',
    //   job_title: '',
    //   business: '',
    //   specify: '',
    //   warning: '',
    //   postSuccess: false,
    // })
  }
  componentDidMount() {
    this.wp_path(this.props.path.split("/")[1].split("-")[0])
    // console.log(this.props.path.split("/")[1].split("-")[1])
    // this.storePar(this.props.path.split("/")[1].split("-")[0]);
    // console.log(mySwiper1)
    // console.log(this.props.path, 333)
  }
  storePar(_temp) {
    const counterReducer = (state = { path: _temp }, action) => {
      return state;
    }
    const store = createStore(counterReducer)
    // console.log(store)
    console.log(store.getState(), " store")
  }
  mySwiper() {
    // var mySwiper1 = new Swiper(".swiper-container", {
    //   slidesPerView: 3.3,
    //   spaceBetween: 20,
    //   freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   }
    // });
    // var mySwiper2 = new Swiper(".swiper-container2", {
    //   slidesPerView: 1.3,
    //   spaceBetween: 10,
    //   freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   }
    // });
  }
  followLang() {
    let temp_lang = this.langLimit();
    // let temp_lang = this.getSession('violas-lang').split('"')[1];
    let slug = this.props.data.wordpressPage.slug.toString();
    if (slug !== "violas-media" && slug !== "media" && temp_lang !== slug.split('-')[1]) {
      if (typeof window !== 'undefined') {
        window.location = '/' + slug.split('-')[0] + '-' + temp_lang;
      }
    }
  }
  wp_path(_path) {
    // sessionStorage.setItem("wp_path", _path)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("wp_path", _path)
    }
  }
  getSession(_temp) {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(_temp)
    }
  }
  langLimit() {
    // console.log(this.getSession('violas-lang').split('"')[1])
    // let _temp = JSON.parse(this.getSession("violas-lang"));
    switch (this.getSession('violas-lang') ? this.getSession('violas-lang').split('"')[0] : "") {
      case "ko":
        return "ko";
      case "ja":
        return "ja";
      default:
        return "en";
    }
  }
  selectBackgroundImg(_pageName) {
    switch (_pageName) {
      case "homepage":
        // return <img src="/static/9bb038b9ff4d9f1cede0b1232abd6e6c/14b42/homepage.jpg" />
        // return <img src={homepage_jpg} />
        // return homepage_jpg
        return homepage_jpg1
      case "vision":
        // return <img src="/static/3cad50fb229e266066a9bdf3996fd227/14b42/vision.jpg" />
        // return <img src={vision_jpg} />
        return vision_jpg
      case "association":
        // return <img src="/static/b9880b6f7ff04cd9bb3e35c078570490/14b42/association.jpg" />
        // return <img src={association_jpg} />
        return association_jpg
      case "partners":
        // return <img src="/static/82dd86db42801d541b03592db593786b/14b42/partners.jpg" />
        // return <img src={partners_jpg} />
        return partners_jpg
      case "media":
        // return <img src="/static/2937f6503b6e9bf3b89b6e28fabc842a/14b42/media.jpg" />
        // return <Img fluid={data.media.childImageSharp.fluid}/>
        // return <img src={media_jpg} />
        return media_jpg
      case "logo-purple":
        // return <img src="/static/c7a541a81abe46e6e59775bf7782f50d/75ec2/logo-purple.png" />
        // return <img src={logoPurple_jpg} />
        return logoPurple_jpg
      case "logo-white":
        return logoWhite_jpg
      default:
        return logoWhite_jpg;
    }
  }
  hasBackground(_temp) {
    // let url = _temp.split("/")[1] ? _temp.split("/")[1].split("-")[0] : "media"
    // console.log(url, 222)
    let url = _temp
    if (url === "media") {
      return {
        height: "80px",
      }
    } else if (url === "whitepaper") {
      return {
        height: "80px",
      }
    } else if (url === "developers") {
      return {
        height: "80px",
      }
    } else {
      return {
        // background: 'url(' + this.selectBackgroundImg(url) + ')' + ', url(' + cover_png + ')',
        // background: 'url(' + cover_png + ')',
        // background: 'url(' + this.selectBackgroundImg(url) + ')',
        // background: 'url(' + cover_png + ')' + ',url(' + this.selectBackgroundImg(url) + ')',
        background: 'url(' + this.selectBackgroundImg(url) + ')',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%"
      }
    }
  }
  turnS2C(_temp) {
    switch (_temp) {
      case 'first_name':
        return 'First Name';
      case 'last_name':
        return 'Last Name';
      case 'company_name':
        return 'Company Name';
      case 'contact':
        return 'Contact';
      case 'job_title':
        return 'Job Title';
      case 'business':
        return 'Business Sector';
      case 'specify':
        return 'Business Sector';
    }
  }
  handleChange(_temp, event) {
    switch (_temp) {
      case "fname":
        this.setState({ first_name: event.target.value });
        break;
      case "lname":
        this.setState({ last_name: event.target.value });
        break;
      case "cname":
        this.setState({ company_name: event.target.value });
        break;
      case "contact":
        this.setState({ contact: event.target.value });
        break;
      case "JobTitle":
        this.setState({ job_title: event.target.value });
        break;
      case "business":
        this.setState({ business: event.target.value });
        break;
      case "specify":
        this.setState({ specify: event.target.value });
        break;
      case "pSelect":
        this.setState({ specify: '', business: '' })
        break;
    }
  }
  inputLimit(type, data, _business) {
    if (type !== 'warning' && type !== 'postSuccess' && type !== 'business' && type !== 'specify' && data.length === 0) {
      this.setState({ warning: `Please enter your ${this.turnS2C(type)}` })
      return false
    } else if (_business) {
      this.setState({ warning: "Please enter your Business Sector" })
      return false
    }
    if (type === 'first_name' || type === 'last_name' || type === 'job_title' || type === 'specify') {
      if (data.length > 30) {
        this.setState({ warning: `Your ${this.turnS2C(type)} are limited 30 characters` })
        return false
      }
    } else if (type === 'company_name' || type === 'contact') {
      if (data.length > 50) {
        this.setState({ warning: `Your ${this.turnS2C(type)} are limited 50 characters` })
        return false
      }
    }
    this.setState({ warning: `` })
    return true;
  }
  handleSubmit(event) {
    let _business = (this.state.business + this.state.specify) === '' || (this.state.business + this.state.specify) === 'other' || (this.state.business === '');
    let shouldPost = true
    for (let key in this.state) {
      let _notStop = this.inputLimit(key, this.state[key], _business)
      if (!_notStop) {
        shouldPost = false
        break;
      }
    }
    if (shouldPost) {
      this.postFun();
    }
    event.preventDefault();
  }
  postFun() {
    let ip = '47.52.66.26'
    // let ip = 'localhost'
    let url = 'http://' + ip + ':9002/postUserData';
    let temp = this.state.business;
    if (temp === "other") {
      temp = this.state.specify;
    }
    let data = JSON.stringify({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      company_name: this.state.company_name,
      job_title: this.state.job_title,
      contact: this.state.contact,
      business_sector: temp
    })
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(res => res.json())
      .then((res => {
        console.log(res);
        this.setState({ postSuccess: true })
      }))
      .catch(err => { console.log(err.state) })
  }
  closeSubmit() {
    this.setState({ postSuccess: false })
  }
  render() {
    const StaticPage = this.props.data.wordpressPage;
    // backgroundImage: 'url(' + this.headerImg(this.props.wp_path.split("-")[0] ? this.props.wp_path.split("-")[0] : '111') + ')',
    // console.log(this.props.path.split("/")[1].split("-")[0]);
    // console.log(this.props.path);
    // console.log(this.props.path,111)
    // console.log(this.props.location.pathname.split("/")[1].split("-")[0])
    let path_temp = this.props.location.pathname.split("/")[1].split("-")[0]
    return (
      <>
        <SEO title="violas pages" />
        {/* <div className="headContent" style={{
          backgroundImage: 'url(' + this.selectBackgroundImg(this.props.path.split("/")[1].split("-")[0]) + ')' + ', url(' + cover_png + ')',
        }}></div> */}
        <div className="headContent" style={
          this.hasBackground(path_temp)
        }></div>
        {
          path_temp === 'developers' ?
            <div className="IEEE">
              <div className="containerIEEE">
                <div className="titleIEEE">
                  <p>Request Access of Violas Apps and SDK for IEEE Presentation</p>
                  <img src={presentationLogo} />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <p>Last Name:&nbsp;&nbsp;
            <input type="text" value={this.state.last_name} onChange={this.handleChange.bind(this, 'lname')} />
                  </p>
                  <p>First Name:&nbsp;&nbsp;
            <input type="text" value={this.state.first_name} onChange={this.handleChange.bind(this, 'fname')} />
                  </p>
                  <p>Company Name:&nbsp;&nbsp;
            <input type="text" value={this.state.company_name} onChange={this.handleChange.bind(this, 'cname')} />
                  </p>
                  <p>
                    Contact:&nbsp;&nbsp;
            <input type="text" value={this.state.contact} onChange={this.handleChange.bind(this, 'contact')} />
                  </p>
                  <p>Job title:&nbsp;&nbsp;
            <input type="text" value={this.state.job_title} onChange={this.handleChange.bind(this, 'JobTitle')} />
                  </p>
                  <p>Business Sector:&nbsp;&nbsp;
            <select value={this.state.business} onChange={this.handleChange.bind(this, 'business')}>
                      <option value="" className="pSelect">Please Select</option>
                      <option value="Academic">Academic</option>
                      <option value="Commercial Bank">Commercial Bank</option>
                      <option value="Central Bank">Central Bank</option>
                      <option value="Trading">Trading</option>
                      <option value="Payment">Payment</option>
                      <option value="Money Transfer">Money Transfer</option>
                      <option value="Stock Exchange">Stock Exchange</option>
                      <option value="eCommerce">eCommerce</option>
                      <option value="Financial Service">Financial Service</option>
                      <option value="other">Other</option>
                    </select>
                    {this.state.business === "other" ?
                      <input className="other" type="text" value={this.state.specify} onChange={this.handleChange.bind(this, 'specify')} /> :
                      <></>
                    }
                  </p>
                  {/* <br /> */}
                  <button className="submit">Submit</button>
                  {/* <input type="submit" value="Submit" className="submit" /> */}
                  <p className='warning'>{this.state.warning}</p>
                </form>
              </div>
              {
                this.state.postSuccess ?
                  <div className="postSuccess">
                    <div style={{ backgroundImage: 'url(' + presentationBg + ')', backgroundSize: '100% 100%' }} className='container'>
                      <div className='logo'>
                        <img src={presentationSucceed} />
                      </div>
                      <h1>Submitted Successfully</h1>
                      <p>We successfully received your application.</p>
                      <p>Your request will be reviewed within 24h.</p>
                      <p>Thanks for your interest.</p>
                      <div className='button'>
                        <button onClick={this.closeSubmit.bind(this)}>OK</button>
                      </div>
                    </div>
                  </div> :
                  <></>
              }
            </div> : <></>
        }
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
