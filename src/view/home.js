import React,{Component} from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
import './style/home.scss';
class Home extends Component{
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView:3.3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  render(){
    return (
        <div className="home">
           <div className="headContent">
             <div className="inset"><img src="/img/矩形 6@2x.png"/></div>
             <div className="headTalk">
                <p>Welcome to Violas</p>
                <p><label for="">WhitePaper</label><img src="/img/编组 45复制 3@2x.png" /></p>
             </div>
           </div>
           <section>
              <div className="mission">
                <h4>The Violas Mission</h4>
                <p>A global financial infrastructure built on top of Libra technology to enable payments using local digital currencies within their existing internet applications.</p>
                <p>This global ecosystem will serve billions of people in their daily transactions and at the same time support free exchange among all digital currencies.</p>
              </div>
              <div className="missionImg">
                <div className="leftImg"><img src="/img/IMG_7788.jpg"/></div>
                <div className="rightImg"><img src="/img/IMG_7760.jpg"/></div>
              </div>
              <div className="forReal">
                <h2>Violas Is For Real World Use</h2>
                <h4>In the real world, no matter where you go you pay with the local currency. Violas enables third parties to provide local digital currencies to pay for real goods and services wherever you go.</h4>
                <div className="forRealContent">
                   <dl>
                     <dt><img src="/img/编组 11@2x.png"/></dt>
                     <dd>
                       <h3><s></s>Mobile</h3>
                       <p>Violas will be accessible to anyone with a smartphone by downloading the Violas Wallet. This includes Android phones, iPhones, or any internet accessible phone.</p>
                     </dd>
                   </dl>
                   <dl>
                     <dt><img src="/img/编组 9复制 3@2x.png"/></dt>
                     <dd>
                       <h3><s></s>Stable</h3>
                       <p>Each local digital currency issued by the Violas blockchain is backed by a reserve of an equal amount of its local fiat currency.</p>
                     </dd>
                   </dl>
                   <dl>
                     <dt><img src="/img/编组 26@2x.png"/></dt>
                     <dd>
                       <h3><s></s>Fast</h3>
                       <p>A Violas transaction will take between 1 and 10 seconds to complete, depending on the load. Regardless of where you are in the world.</p>
                     </dd>
                   </dl>
                   <dl>
                     <dt><img src="/img/编组 14@2x.png"/></dt>
                     <dd>
                       <h3><s></s>For The Real World</h3>
                       <p>Violas is a global platform that enables local qualified third parties to legally issue local digital currency that can be used at both brick and mortar stores and online.</p>
                     </dd>
                   </dl>
                   <dl>
                     <dt><img src="/img/编组 27@2x.png"/></dt>
                     <dd>
                       <h3><s></s>Scalable</h3>
                       <p>By design, Violas enables local digital currencies to function in the payment processes of existing third party apps.</p>
                     </dd>
                   </dl>
                   <dl>
                     <dt><img src="/img/编组 11@2x.png"/></dt>
                     <dd>
                       <h3><s></s>Secure</h3>
                       <p>All local digital currencies issued by the Violas blockchain are cryptocurrencies secured with high strength encryption algorithms that cannot be broken.</p>
                     </dd>
                   </dl>
                </div>
              </div>
              <div className="goWhitepaper">
                 <div className="img">
                   <img src="/img/矩形复制 58@2x.png"/>
                   <img src="/img/矩形复制 57@2x.png"/>
                   <img src="/img/编组 13@2x.png"/>

                 </div>
                 <div className="title">
                    <h3>The Violas White Paper</h3>
                    <p>
                      <span>Read the White Pape</span>
                      <div className="sq">
                        <img src="/img/编组 18@2x.png"/>
                        <img src="/img/编组 20@2x.png"/>
                      </div>
                    </p>
                 </div>
              </div>
              
              <div className='banner'>
                <h2>A closer look at</h2>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      <div class="swiper-slide">
                        <h3>Violas’ Manifesto</h3>
                        <div className="img">
                           <img src="/img/编组 32@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>Violas’ Influences</h3>
                        <div className="img">
                           <img src="/img/编组 44@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>The Violas Reserve</h3>
                        <div className="img">
                           <img src="/img/编组 30@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>The Violas blockchain</h3>
                        <div className="img">
                           <img src="/img/编组 21@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>The Violas Association</h3>
                        <div className="img">
                           <img src="/img/编组 132@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>Security & Privacy on the Violas Network</h3>
                        <div className="img">
                           <img src="/img/编组 15@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>Commitment to Compliance & Consumer Protection</h3>
                        <div className="img">
                           <img src="/img/编组 10@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>Move Programming Language</h3>
                        <div className="img">
                           <img src="/img/编组 11@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                      <div class="swiper-slide">
                        <h3>How to Become a Founding Member</h3>
                        <div className="img">
                           <img src="/img/编组 12@2x.png"/>
                        </div>
                        {/* <div className="sec">
                           <p></p>
                        </div> */}
                        <p>Learn more</p>
                      </div>
                    </div>
                    
               </div>
               <div className="swiper-button-next"></div>
               <div className="swiper-button-prev"></div>
            </div>
            <div className="goAssociation">
                <div className="content">
                  <div className="img">
                    <img src="/img/IMG_7795.jpg"/>
                    <img src="/img/IMG_7769.jpg"/>
                  </div>
                  <div className="title">
                      <h3>The Violas Association</h3>
                      <h4>An independent, not-for-profit organization.</h4>
                      <p>
                        <span>Learn more</span>
                        <div className="sq">
                          <img src="/img/编组 18@2x.png"/>
                          <img src="/img/编组 20@2x.png"/>
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
