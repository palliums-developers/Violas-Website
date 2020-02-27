import React, { Component } from "react";
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.min.css";
import "./style/home.scss";
import intl from 'react-intl-universal';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      display:'flex',
      display1:'none',
      display2:'flex',
      display21:'none',
      display3:'flex',
      display31:'none',
      display4:'flex',
      display41:'none',
      display5:'flex',
      display51:'none',
      display6:'flex',
      display61:'none',
      display7:'flex',
      display71:'none',
      display8:'flex',
      display81:'none',
      display9:'flex',
      display91:'none',
      downloadButton1:true,
      downloadButton2:true,
      downloadButton3:true
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  componentWillMount() {
    // localStorage.setItem('whiteBg', 'header');
    intl.options.currentLocale = localStorage.getItem("local");
  }
  componentDidMount() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3.3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    window.addEventListener('scroll',(e)=>{
    //  console.log(window.scrollY)
    })
  }
  onMouseEnter() {
    this.setState({ detail: true });
  }
  onMouseLeave() {
    this.setState({ detail: false });
  }
  handleMouseOver = () => {
    this.setState({
      display:'none',
      display1:'flex',
    })
  }
  handleMouseOut = () =>{
    this.setState({
      display:'flex',
      display1:'none',
    })
  }
  handleMouseOver2 = () => {
    this.setState({
      display2:'none',
      display21:'flex'
    })
  }
  handleMouseOut2 = () =>{
    this.setState({
      display2:'flex',
      display21:'none'
    })
  }
  handleMouseOver3 = () => {
    this.setState({
      display3:'none',
      display31:'flex'
    })
  }
  handleMouseOut3 = () =>{
    this.setState({
      display3:'flex',
      display31:'none'
    })
  }
  handleMouseOver4 = () => {
    this.setState({
      display4:'none',
      display41:'flex'
    })
  }
  handleMouseOut4 = () =>{
    this.setState({
      display4:'flex',
      display41:'none'
    })
  }
  handleMouseOver5 = () => {
    this.setState({
      display5:'none',
      display51:'flex'
    })
  }
  handleMouseOut5 = () =>{
    this.setState({
      display5:'flex',
      display51:'none'
    })
  }
  handleMouseOver6 = () => {
    this.setState({
      display6:'none',
      display61:'flex'
    })
  }
  handleMouseOut6 = () =>{
    this.setState({
      display6:'flex',
      display61:'none'
    })
  }
  handleMouseOver7 = () => {
    this.setState({
      display7:'none',
      display71:'flex'
    })
  }
  handleMouseOut7 = () =>{
    this.setState({
      display7:'flex',
      display71:'none'
    })
  }
  handleMouseOver8 = () => {
    this.setState({
      display8:'none',
      display81:'flex'
    })
  }
  handleMouseOut8 = () =>{
    this.setState({
      display8:'flex',
      display81:'none'
    })
  }
  handleMouseOver9 = () => {
    this.setState({
      display9:'none',
      display91:'flex'
    })
  }
  handleMouseOut9 = () =>{
    this.setState({
      display9:'flex',
      display91:'none'
    })
  }
  handleMouseOverDownloadButton1=()=>{this.setState({downloadButton1:false})}
  handleMouseOverDownloadButton2=()=>{this.setState({downloadButton2:false})}
  handleMouseOverDownloadButton3=()=>{this.setState({downloadButton3:false})}
  handleMouseOutDownloadButton1=()=>{this.setState({downloadButton1:true})}
  handleMouseOutDownloadButton2=()=>{this.setState({downloadButton2:true})}
  handleMouseOutDownloadButton3=()=>{this.setState({downloadButton3:true})}
  render() {
    return (
      <div className="home">
        <div className="headContent">
          <div className="inset">
            <img src="/img/矩形 6@2x.png" />
          </div>
          <div className="headTalk animated fadeInUp">
            <p>{intl.get('home.Welcome to Violas')}</p>
            <p>
              {this.state.downloadButton1?
              <>
                <label 
                onClick={() => {this.props.history.push('/whiteParper')}} 
                onMouseOver={()=>{this.handleMouseOverDownloadButton1()}}>
                  {intl.get('home.whitePaper')}
                </label>
                <img onClick={() => {this.props.history.push('/whiteParper')}} 
                onMouseOver={()=>{this.handleMouseOverDownloadButton1()}}src="/img/编组 8@2x.png" />
              </>
                :
                <>
                <label onClick={() => {this.props.history.push('/whiteParper')}} 
            onMouseOut={()=>{this.handleMouseOutDownloadButton1()}}style={{color:"#590BA9"}}>{intl.get('home.whitePaper')}</label>
                <img onClick={() => {this.props.history.push('/whiteParper')}} 
            onMouseOut={()=>{this.handleMouseOutDownloadButton1()}}src="/img/编组 8@2x(1).png" />
                </>
              }
            </p>
          </div>
        </div>
        <section>
          <div className="mission">
            <h4>{intl.get('home.Violas')}</h4>
            <p>{intl.get('home.Violas1')}</p>
          </div>
          <div className="mission">
            <h4>{intl.get('home.The Violas Mission')}</h4>
            <p>{intl.get('home.The Violas Mission1')}</p>
          </div>
          <div className="missionImg">
            <div className="leftImg">
              <img src="/img/IMG_7788.jpg" />
            </div>
            <div className="rightImg">
              <img src="/img/IMG_77601.jpg" />
            </div>
          </div>
          <div className="forReal">
            <h2>{intl.get('home.Violas Is Enables Real World Payments')}</h2>
            <h4>{intl.get('home.Violas Is Enables Real World Payments1')}</h4>
            <div className="forRealContent">
              <dl>
                <dt>
                  <img src="/img/编组 11@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Mobile')} </h3>
                  <p>{intl.get('home.Mobile1')}</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/编组 9复制 3@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Stable')}</h3>
                  <p>{intl.get('home.Stable1')}</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/编组 26@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Fast')}</h3>
                  <p>{intl.get('home.Fast1')}</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/编组 14@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Real World Utility')}</h3>
                  <p>{intl.get('home.Real World Utility1')}</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/编组 27@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Scalable')}</h3>
                  <p>{intl.get('home.Scalable1')}</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/编组 11@2x.png" />
                </dt>
                <dd>
                  <h3><s></s>{intl.get('home.Secure')}</h3>
                  <p>{intl.get('home.Secure1')}</p>
                </dd>
              </dl>
            </div>
          </div>
          <div className="goWhitepaper">
            <div className="img">
              <img src="/img/矩形复制 58@2x.png" />
              <img src="/img/矩形复制 57@2x.png" />
              <img src="/img/编组 13@2x.png" />
            </div>
            <div className="title">
              <h3>{intl.get('home.The Violas White Paper')}</h3>
              <p>
                {
                  this.state.downloadButton2?
                  <>
                    <span onClick={()=>{this.props.history.push('/whitePaper')}}
                    onMouseOver={()=>{this.handleMouseOverDownloadButton2()}} >
                      {intl.get('home.Read the White Paper')}
                    </span>
                    <div className="sq"onClick={()=>{this.props.history.push('/whitePaper')}}
                    onMouseOver={()=>{this.handleMouseOverDownloadButton2()}} >
                      <img src="/img/编组 18@2x.png" />
                      <img src="/img/编组 20@2x.png" />
                    </div>
                  </>:
                  <>
                    <span onClick={()=>{this.props.history.push('/whitePaper')}}
                    onMouseOut={()=>{this.handleMouseOutDownloadButton2()}} style={{color:"#451294"}}>
                      {intl.get('home.Read the White Paper')}
                    </span>
                    <div className="sq"onClick={()=>{this.props.history.push('/whitePaper')}}
                    onMouseOut={()=>{this.handleMouseOutDownloadButton2()}} >
                      <img src="/img/编组 18@2x1.png" />
                      <img src="/img/编组 20@2x.png" />
                    </div>
                  </>
                }
              </p>
            </div>
          </div>

          <div className="banner">
            <h2>{intl.get('home.Get To Know Violas')}</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver()} onMouseOut={()=>this.handleMouseOut()}>
                  <h3>{intl.get('home.Violas’ Manifesto')}</h3>
                  <div className="img" style={{display:this.state.display}}>
                    <img src="/img/编组 32@2x.png" />
                  </div>
                  <p style={{display:this.state.display1}}>{intl.get('home.Violas’ Manifesto1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver2()} onMouseOut={()=>this.handleMouseOut2()}>
                  <h3>{intl.get('home.Violas’ Influences')}</h3>
                  <div className="img" style={{display:this.state.display2}}>
                    <img src="/img/编组 44@2x.png" />
                  </div>
                  <p style={{display:this.state.display21}}>{intl.get('home.Violas’ Influences1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver3()} onMouseOut={()=>this.handleMouseOut3()}>
                  <h3>{intl.get('home.The Violas Reserve')}</h3>
                  <div className="img" style={{display:this.state.display3}}>
                    <img src="/img/编组 30@2x.png" />
                  </div>
                  <p style={{display:this.state.display31}}>{intl.get('home.The Violas Reserve1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver4()} onMouseOut={()=>this.handleMouseOut4()}>
                  <h3>{intl.get('home.The Violas blockchain')}</h3>
                  <div className="img" style={{display:this.state.display4}}>
                    <img src="/img/编组 21@2x.png" />
                  </div>
                  <p style={{display:this.state.display41}}>{intl.get('home.The Violas blockchain1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver5()} onMouseOut={()=>this.handleMouseOut5()}>
                  <h3>{intl.get('home.The Violas Association')}</h3>
                  <div className="img" style={{display:this.state.display5}}>
                    <img src="/img/编组 132@2x.png" />
                  </div>
                  <p style={{display:this.state.display51}}>{intl.get('home.The Violas Association1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver6()} onMouseOut={()=>this.handleMouseOut6()}>
                  <h3>{intl.get('home.Security & Privacy on the Violas Network')}</h3>
                  <div className="img" style={{display:this.state.display6}}>
                    <img src="/img/编组 15@2x.png" />
                  </div>
                  <p style={{display:this.state.display61}}>{intl.get('home.Security & Privacy on the Violas Network1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver7()} onMouseOut={()=>this.handleMouseOut7()}>
                  <h3>{intl.get('home.Commitment to Compliance & Consumer Protection')}</h3>
                  <div className="img" style={{display:this.state.display7}}>
                    <img src="/img/编组 10@2x.png" />
                  </div>
                  <p style={{display:this.state.display71}}>{intl.get('home.Commitment to Compliance & Consumer Protection1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver8()} onMouseOut={()=>this.handleMouseOut8()}>
                  <h3>{intl.get('home.Move Programming Language')}</h3>
                  <div className="img" style={{display:this.state.display8}}>
                    <img src="/img/编组 11@x.png" />
                  </div>
                  <p style={{display:this.state.display81}}>{intl.get('home.Move Programming Language1')}</p>
                </div>
                <div className="swiper-slide" onMouseOver={()=>this.handleMouseOver9()} onMouseOut={()=>this.handleMouseOut9()}>
                  <h3>{intl.get('home.How to Become a Founding Member')}</h3>
                  <div className="img" style={{display:this.state.display9}}>
                    <img src="/img/编组 12@2x.png" />
                  </div>
                  <p style={{display:this.state.display91}}>{intl.get('home.How to Become a Founding Member1')}</p>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div className="goAssociation">
            <div className="content">
              <div className="img">
                <img src="/img/IMG_77951.jpg" />
                <img src="/img/IMG_7769.jpg" />
              </div>
              <div className="title">
                <h3>{intl.get('home.The Violas Association0')}</h3>
                <h4>{intl.get('home.An independent')}</h4>
                <p>
                  {/* <span>{intl.get('home.Learn More')}</span>
                  <div className="sq">
                    <img src="/img/编组 18@2x.png" />
                    <img src="/img/编组 20@2x.png" />
                  </div> */}
                  {
                    this.state.downloadButton3?
                    <>
                      <span onClick={() => { this.props.history.push('/app/association')}}
                      onMouseOver={()=>{this.handleMouseOverDownloadButton3()}}
                      >
                        {intl.get('home.Learn More')}
                      </span>
                      <div className="sq" onClick={() => { this.props.history.push('/app/association')}}
                      onMouseOver={()=>{this.handleMouseOverDownloadButton3()}}>
                        <img src="/img/编组 18@2x.png" />
                        <img src="/img/编组 20@2x.png" />
                      </div>
                    </>:
                    <>
                      <span onClick={() => { this.props.history.push('/app/association')}}
                      onMouseOut={()=>{this.handleMouseOutDownloadButton3()}} style={{color:"#451294"}}
                      >
                        {intl.get('home.Learn More')}
                      </span>
                      <div className="sq" onClick={() => { this.props.history.push('/app/association')}}
                      onMouseOut={()=>{this.handleMouseOutDownloadButton3()}}>
                        <img src="/img/编组 18@2x1.png" />
                        <img src="/img/编组 20@2x.png" />
                      </div>
                    </>
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="personDescr">
            <div className="person">
              <dl>
                <h2>Academic Institution</h2>
                <dt><img src="/img/编组 52@2x.png" /></dt>
                <dd>Hans-Arno Jacobsen</dd>
              </dl>
              <dl>
                <h2>Product</h2>
                <dt><img src="/img/编组 55@2x.png" /></dt>
                <dd>Mr. Riccardo Conti</dd>
              </dl>
              <dl>
                <h2>Business Partner</h2>
                <dt><img src="/img/编组 56@2x.png" /></dt>
                <dd>Dr. Mark Hale</dd>
              </dl>
            </div>
            <div className="icon">
              <dl>
                <dt><img src="/img/编组 45@2x.png" /></dt>
                <dd><a href="https://www.ece.utoronto.ca/people/jacobsen-h-a/">https://www.ece.utoronto.ca/people/jacobsen-h-a/</a></dd>
              </dl>
              <dl>
                <dt><img src="/img/编组 47@2x.png" /></dt>
                <dd><a href="https://facepay.io/">https://facepay.io/</a></dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
