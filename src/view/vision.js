import React, { Component } from 'react';
import intl from 'react-intl-universal';
import "./style/vision.scss";

class Vision extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem('local');
  }
  render() {
    return (
      <div className='vision'>
        <div className='headContent'>
          <div className='headContent1'></div>
          <div className='headTalk'>
            <h1>{intl.get('vision.The Vision')}</h1>
            <h2>{intl.get('vision.The Vision1')}</h2>
          </div>
        </div>
        <div className="section">
          <p>{intl.get('vision.The Vision2')}</p>
        </div>
      </div>
    );
  }
}

export default Vision;
