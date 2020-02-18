import React,{Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../style/scss-en/whitePaper.scss';

class WhitePaperEN extends Component{
  render(){
    return (
        <div className="whitePaper">
          <header className="header">
          <div className="head">
            <div className="logo">
              <a href="index.html"><img src="/img/编组 252@2x.png" /></a>
            </div>
            <ul className="navList">
              <li>Vision</li>
              <li>Association</li>
              <li>Partners</li>
              <li>Blockchain Explorer</li>
              <li>Media</li>
              <li>Developers</li>
            </ul>
            <div className="descr">
              <span id="whitePaper" onClick={()=>{
                this.props.history.push('/whiteParper-en')
              }}>White Paper</span>
              <a>日本語</a>
              <a>한국어</a>
            </div>
            </div>
        </header>
        <section>
          <div className="headTalk">
            <div className="bg1"><img src="/img/矩形 3@2x.png"/></div>
            <div className="content">
               <h3>Violas White Paper</h3>
               <p>Violas' mission is to build a global financial ecosystem that allows governments and organizations to create their own stablecoins backed by their local fiat currency. This ecosystem will exist on top of Libra technology, allowing it to reach billions of people for use in daily transactions as well as supporting exchange among all digital currencies.
Our goal is to enable a world where there is not merely one global digital currency, but one where each fiat currency can have its own digital version pegged to it at a 1:1 ratio. We believe that the future will be a world of digitized fiat currencies and that blockchain technology and Libra’s codebase are the most efficient enablers to solve the many financial inadequacies the world faces in regards to payments and banking.</p>
<span>滚动阅读</span>
            </div>
            <div className="bg2"><img src="/img/矩形复制 44@2x.png"/></div>
          </div>
        </section>
          {/* <Footer></Footer> */}
        </div>
    );
  }
  
}

export default WhitePaperEN;
