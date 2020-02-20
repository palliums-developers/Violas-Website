import React, { Component } from 'react';
import intl from 'react-intl-universal';
import "./style/partners.scss";

class Partners extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem('local');
  }
  render() {
    return (
      <div className='partners'>
        <div className='headContent'>
          <div className='headContent1'></div>
          <div className='headTalk'>
            <img src='/img/编组 6复制@2x.png' />
            <div className='headTalk2'>
              <h1>{intl.get('partners.Join the Violas Association')}</h1>
              <h2>{intl.get('partners.Network of Partners')}</h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section1">
            <div className="section11">
              <img src='/img/编组 33@2x.png' />
              <p><img src='/img/矩形 3@2x.png' />{intl.get('partners.100 Members of the “Violas States”')}</p>
              <p>{intl.get('partners.100 Members of the “Violas States”1')}</p>
            </div>
            <div className="section11">
              <img src='/img/编组 34@2x.png' />
              <p><img src='/img/矩形 3@2x.png' />{intl.get('partners.500 Representatives of Stablecoin Issuers')}</p>
              <p>{intl.get('partners.500 Representatives of Stablecoin Issuers1')}</p>
            </div>
          </div>
          <div className="section2">
            <div className="section22"><img src='/img/编组 35@2x.png' /></div>
            <div className="section21">
              <p>{intl.get('partners.Custodial Services for Compliant Assets')}</p>
              <p>{intl.get('partners.Custodial Services for Compliant Assets1')}</p>
            </div>
          </div>
          <div className="section3">
            <div className="section31">
              <p><img src='/img/矩形 3@2x.png' />{intl.get('partners.Stablecoin issuers')}</p>
            </div>
            <div className="section32">
              <div className="section321"><img src='/img/编组 37@2x.png' /><p>{intl.get('partners.Stablecoin issuers1')}</p></div>
              <div className="section322"></div>
              <div className="section321"><img src='/img/编组 38@2x.png' /><p>{intl.get('partners.Stablecoin issuers2')}</p></div>
              <div className="section322"></div>
              <div className="section321"><img src='/img/编组 39@2x.png' /><p>{intl.get('partners.Stablecoin issuers3')}</p></div>
              <div className="section322"></div>
              <div className="section321"><img src='/img/编组 40@2x.png' /><p>{intl.get('partners.Stablecoin issuers4')}</p></div>
            </div>
          </div>
          <div className="section4">
            <div className="section41">
              <img src='/img/编组 42@2x.png' />
            </div>
            <div className="section42">
              <p>{intl.get('partners.Application Developer')}</p>
              <p>{intl.get('partners.Application Developer1')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
