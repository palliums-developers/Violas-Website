import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import intl from 'react-intl-universal';
class Footer extends Component {
  componentWillMount() {
    // intl.options.currentLocale = localStorage.getItem("local");
  }
  goEN() {
    return <span onClick={() => { localStorage.setItem('local', 'EN'); this.forceUpdate(); }}>{intl.get('header.en')}</span>
  }
  goKO() {
    return <span onClick={() => { localStorage.setItem('local', 'KO'); this.forceUpdate(); }}>{intl.get('header.ko')}</span>
  }
  goJA() {
    return <span onClick={() => { localStorage.setItem('local', 'JA'); this.forceUpdate(); }}>{intl.get('header.ja')}</span>
  }
  twoLanguages(lang) {
    switch (lang) {
      case 'EN':
        return <>{this.goJA()}{this.goKO()}</>
      case 'JA':
        return <>{this.goEN()}{this.goKO()}</>
      case 'KO':
        return <>{this.goEN()}{this.goJA()}</>
    }
  }
  render() {
    intl.options.currentLocale = localStorage.getItem('local');
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
          <p>{this.twoLanguages(localStorage.getItem("local"))}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
