import React, { Component } from 'react';
import intl from 'react-intl-universal';
import "./style/association.scss";

class Association extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem('local');
  }
  render() {
    return (
      <div className='association'>
        <div className='headContent'>
          <div className='headContent1'></div>
          <div className='headTalk'>
            <h1>{intl.get('association.Violas Association')}</h1>
            <h2>{intl.get('association.Violas Association1')}</h2>
          </div>
        </div>
        <div className="section">
          <div className="title"><img src='./img/矩形 3@2x.png' />{intl.get('association.Bylaws of The Violas Association')}</div>
          <div className='title1'>{intl.get('association.Bylaws of The Violas Association1')}</div>
          <div className="title2">
            <div className="title3">
              <img src='./img/编组 7@2x.png' />
              <p><img src='./img/矩形 3@2x.png' />{intl.get('association.A Violas Validator')}</p>
              <p>{intl.get('association.A Violas Validator1')}</p>
            </div>
            <div className="title3">
              <img src='./img/编组 7@x.png' />
              <p><img src='./img/矩形 3@2x.png' />{intl.get('association.A Violas Representative')}</p>
              <p>{intl.get('association.A Violas Representative1')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Association;