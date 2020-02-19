import React, { Component } from "react";
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.min.css";
import "./style/home.scss";
import intl from 'react-intl-universal';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  componentWillMount() {
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
  }
  onMouseEnter() {
    this.setState({ detail: true });
  }
  onMouseLeave() {
    this.setState({ detail: false });
  }
  render() {
    return (
      <div className="home">
        <div className="headContent">
          <div className="inset">
            <img src="/img/矩形 6@2x.png" />
          </div>
          <div className="headTalk">
            <p>{intl.get('home.Welcome to Violas')}</p>
            <p>
              <label for="">{intl.get('home.whitePaper')}</label>
              <img src="/img/编组 45复制 3@2x.png" />
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
              <img src="/img/IMG_7760.jpg" />
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
                <span>{intl.get('home.Read the White Paper')}</span>
                <div className="sq">
                  <img src="/img/编组 18@2x.png" />
                  <img src="/img/编组 20@2x.png" />
                </div>
              </p>
            </div>
          </div>

          <div className="banner">
            <h2>{intl.get('home.Get To Know Violas')}</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div class="swiper-slide">
                  <h3>{intl.get('home.Violas’ Manifesto')}</h3>
                  {
                    this.state.detail ?
                      <p>{intl.get('home.Violas’ Manifesto1')}</p> :
                      <div className="img">
                        <img src="/img/编组 32@2x.png" />
                      </div>
                  }
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.Violas’ Influences')}</h3>
                  <div className="img">
                    <img src="/img/编组 44@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.The Violas Reserve')}</h3>
                  <div className="img">
                    <img src="/img/编组 30@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.The Violas blockchain')}</h3>
                  <div className="img">
                    <img src="/img/编组 21@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.The Violas Association')}</h3>
                  <div className="img">
                    <img src="/img/编组 132@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.Security & Privacy on the Violas Network')}</h3>
                  <div className="img">
                    <img src="/img/编组 15@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.Commitment to Compliance & Consumer Protection')}</h3>
                  <div className="img">
                    <img src="/img/编组 10@2x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.Move Programming Language')}</h3>
                  <div className="img">
                    <img src="/img/编组 11@x.png" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <h3>{intl.get('home.How to Become a Founding Member')}</h3>
                  <div className="img">
                    <img src="/img/编组 12@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div className="goAssociation">
            <div className="content">
              <div className="img">
                <img src="/img/IMG_7795.jpg" />
                <img src="/img/IMG_7769.jpg" />
              </div>
              <div className="title">
                <h3>{intl.get('home.The Violas Association0')}</h3>
                <h4>{intl.get('home.An independent')}</h4>
                <p>
                  <span>{intl.get('home.Learn more')}</span>
                  <div className="sq">
                    <img src="/img/编组 18@2x.png" />
                    <img src="/img/编组 20@2x.png" />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
