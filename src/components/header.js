import React, { Component } from 'react';
import intl from 'react-intl-universal';
class Header extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
    console.log(intl.options)
  }
  twoLanguages(lang) {
    switch (lang) {
      case 'EN':
        return <><a>{intl.get('header.ja')}</a><a>{intl.get('header.ko')}</a></>
      case 'JA':
        return <><a>{intl.get('header.en')}</a><a>{intl.get('header.ko')}</a></>
      case 'KO':
        return <><a>{intl.get('header.ja')}</a><a>{intl.get('header.en')}</a></>
    }
  }
  render() {
    return (
      <header className="header">
        <div className="head">
          <div className="logo">
            <a href="index.html"><img src="/img/编组 25@2x.png" /></a>
          </div>
          <ul className="navList">
            <li>{intl.get('header.vision')}</li>
            <li>{intl.get('header.association')}</li>
            <li>{intl.get('header.partners')}</li>
            <li>{intl.get('header.blockchain explorer')}</li>
            <li>{intl.get('header.media')}</li>
            <li>{intl.get('header.developers')}</li>
          </ul>
          <div className="descr">
            <span id="whitePaper">{intl.get('header.white paper')}</span>
            {this.twoLanguages(intl.options.currentLocale)}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
