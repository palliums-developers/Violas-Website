import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import intl from 'react-intl-universal';
class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
    console.log(intl.options.currentLocale)
  }
  goEN() {
    return <a onClick={()=>{localStorage.setItem('local','EN')}}>{intl.get('header.en')}</a>
  }
  goKO() {
    return <a onClick={()=>{localStorage.setItem('local','KO')}}>{intl.get('header.ko')}</a>
  }
  goJA() {
    return <a onClick={()=>{localStorage.setItem('local','JA')}}>{intl.get('header.ja')}</a>
  }
  twoLanguages(lang) {
    switch (lang) {
      case 'EN':
        return <>{this.goJA()}{this.goKO()}</>
      case 'JA':
        return <>{this.goEN()}{this.goKO()}</>
      case 'KO':
        return <>{this.goJA()}{this.goEN()}</>
    }
  }
  render() {
    return (
      <header className={localStorage.getItem('whiteBg')}>
        <div className="head">
          <div className="logo">
            <a href="home">{localStorage.getItem('whiteBg') === "header" ? <img src="/img/编组 25@2x.png" /> : <img src="/img/编组 252@2x.png" />}</a>
          </div>
          <ul className="navList">
            <li id="vision" onClick={() => { this.props.history.push('./vision') }}>{intl.get('header.vision')}</li>
            <li id="association" onClick={() => { this.props.history.push('./association') }}>{intl.get('header.association')}</li>
            <li id="partners" onClick={() => { this.props.history.push('./partners') }}>{intl.get('header.partners')}</li>
            <li>{intl.get('header.blockchain explorer')}</li>
            <li id="media" onClick={() => { this.props.history.push('./media') }}>{intl.get('header.media')}</li>
            <li id="developers" onClick={() => { this.props.history.push('./developers') }}>{intl.get('header.developers')}</li>
          </ul>
          <div className="descr">
            <span id="whitePaper" onClick={() => {
              this.props.history.push('/whiteParper')
            }}>{intl.get('header.white paper')}</span>
            {this.twoLanguages(localStorage.getItem("local"))}
          </div>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
