import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import intl from 'react-intl-universal';
class Footer extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
  }
  twoLanguages(lang) {
    switch (lang) {
      case 'EN':
        return <><span>{intl.get('header.ja')}</span><span>{intl.get('header.ko')}</span></>
      case 'JA':
        return <><span>{intl.get('header.en')}</span><span>{intl.get('header.ko')}</span></>
      case 'KO':
        return <><span>{intl.get('header.ja')}</span><span>{intl.get('header.en')}</span></>
    }
  }
  render() {
    return (
      <footer>
        <div className="footerNav">
          <div className="logo"><img src="/img/编组 74复制 3@2x.png" /></div>
          <div className="nav">
            <div>
              <NavLink to="/app">{intl.get('header.vision')}</NavLink>
              <NavLink to="/app">{intl.get('header.association')}</NavLink>
              <NavLink to="/app">{intl.get('header.partners')}</NavLink>
            </div>
            <div>
              <NavLink to="/app">{intl.get('header.blockchain explorer')}</NavLink>
              <NavLink to="/app">{intl.get('header.media')}</NavLink>
              <NavLink to="/app">{intl.get('header.developers')}</NavLink>
            </div>
            <div>
              <NavLink to="/app">{intl.get('header.white paper')}</NavLink>
            </div>
          </div>
        </div>
        <div className="email">
          <p>{intl.get('footer.Copyright')}</p>
          {/* <p>{intl.get('footer.Connect Us')}</p> */}
          <p><img src="/img/形状 2@2x.png" />{intl.get('footer.email')}</p>
          <p>{this.twoLanguages(intl.options.currentLocale)}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
