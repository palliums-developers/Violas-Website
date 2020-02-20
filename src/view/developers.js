import React, { Component } from 'react';

import Footer from '../components/footer';
import intl from 'react-intl-universal';
import "./style/developers.scss";

class Developers extends Component {
   componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
   }
  render() {
    return (
      <div className="developers">
        <header className="header">
          <div className="head">
            <div className="logo">
              <a href="index.html"><img src="/img/编组 252@2x.png" /></a>
            </div>
            <ul className="navList">
              <li id="vision" onClick={()=>{this.props.history.push('/app/vision')}}>{intl.get('header.vision')}</li>
              <li id="association" onClick={()=>{this.props.history.push('/app/association')}}>{intl.get('header.association')}</li>
              <li id="partners" onClick={()=>{this.props.history.push('/app/partners')}}>{intl.get('header.partners')}</li>
              <li>{intl.get('header.blockchain explorer')}</li>
              <li id="media" onClick={()=>{this.props.history.push('/app/media')}}>{intl.get('header.media')}</li>
              <li id="developers" onClick={()=>{this.props.history.push('/developers')}}>{intl.get('header.developers')}</li>
            </ul>
            <div className="descr">
              <span id="whitePaper" onClick={()=>{
                this.props.history.push('/whiteParper')
              }}>White Paper</span>
              <a>日本語</a>
              <a>한국어</a>
            </div>
            </div>
        </header>
        <section>
               <div className="vision vision0">
                    <div className="head">
                        <div className="bg">
                            <p>{intl.get('developers.ViolasPay APP')}</p>
                            <i><img src="/img/下划线 3@2x.png" alt=""/></i>
                        </div>
                    </div>
                    <div className="visionContent">
                        <div className="violasPayDescr">
                            <p><img src="/img/预览图004 2@2x.png" /></p>
                            <p><img src="/img/预览图001 2@2x.png" /></p>
                            <p><img src="/img/预览图002 2@2x.png" /></p>
                            <p><img src="/img/预览图003 2@2x.png" /></p>
                        </div>
                        <div className="downloadPay">
                            <dl>
                                <dt><img src="/img/位图备份 3@2x.png" /></dt>
                                <dd><img src="/img/ai-app 2@2x.png" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <p className="wait">{intl.get('developers.Coming soon')}</p>
                                </dt>
                                <dd><img src="/img/ios 2@2x.png" /></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="vision vision1">
                    <div className="head">
                        <div className="bg">
                            <p>{intl.get('developers.ViolasSSO APP')}</p>
                            <i><img src="/img/下划线 3@2x.png" alt=""/></i>
                        </div>
                    </div>
                    <div className="visionContent">
                        <div className="violasPayDescr">
                            <p><img src="/img/预览图01 2@2x.png" /></p>
                            <p><img src="/img/预览图03 2@2x.png" /></p>
                            <p><img src="/img/预览图02 2@2x.png" /></p>
                            <p><img src="/img/预览图04 2@2x.png" /></p>
                        </div>
                        <div className="downloadPay">
                            <dl>
                                <dt><img src="/img/位图备份 3@2x.png" /></dt>
                                <dd><img src="/img/ai-app 2@2x.png" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <p className="wait">{intl.get('developers.Coming soon')}</p>
                                </dt>
                                <dd><img src="/img/ios 2@2x.png" /></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="vision vision2">
                    <div className="head">
                        <div className="bg">
                            <p>ViolasClient</p>
                            <i><img src="/img/下划线 3@2x.png" alt=""/></i>
                        </div>
                    </div>
                    <div className="vision2Content">
                        <div className="code"><img src="/img/code.png" /></div>
                        <a href="https://violas.io/client/violas-client.tar.gz"><i></i>{intl.get('developers.Violas Client')} &nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a download="../utils/ViolasClient.pdf" href="../ViolasClient.pdf"><i></i>{intl.get('developers.ViolasClient pdf')}</a>
                    </div>
                </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default Developers;
