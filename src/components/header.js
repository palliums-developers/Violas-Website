import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import intl from 'react-intl-universal';
class Header extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
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
            <li id="vision" onClick={()=>{this.props.history.push('./vision')}}>{intl.get('header.vision')}</li>
            <li id="association" onClick={()=>{this.props.history.push('./association')}}>{intl.get('header.association')}</li>
            <li id="partners" onClick={()=>{this.props.history.push('./partners')}}>{intl.get('header.partners')}</li>
            <li>{intl.get('header.blockchain explorer')}</li>
            <li id="media" onClick={()=>{this.props.history.push('./media')}}>{intl.get('header.media')}</li>
            <li id="developers" onClick={()=>{this.props.history.push('/developers')}}>{intl.get('header.developers')}</li>
          </ul>
          <div className="descr">
            <span id="whitePaper" onClick={()=>{
                this.props.history.push('/whiteParper')
              }}>{intl.get('header.white paper')}</span>
            {this.twoLanguages(intl.options.currentLocale)}
          </div>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
