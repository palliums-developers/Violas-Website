import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import intl from 'react-intl-universal';
import { List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
  }
  goEN() {
    return <a onClick={() => { localStorage.setItem('local', 'EN'); this.forceUpdate(); }}>{intl.get('header.en')}</a>
  }
  goKO() {
    return <a onClick={() => { localStorage.setItem('local', 'KO'); this.forceUpdate(); }}>{intl.get('header.ko')}</a>
  }
  goJA() {
    return <a onClick={() => { localStorage.setItem('local', 'JA'); this.forceUpdate(); }}>{intl.get('header.ja')}</a>
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
  onOpenChange = (...args) => {
    this.setState({ open: false }, () => {
      this.props.getChange(this.state.open)
    });
  }
  render() {
    intl.options.currentLocale = localStorage.getItem('local');
    return (
      <div id="dw-p1" class="bmd-layout-drawer bg-faded">
        <a class="home" href="index.html"><img src="../img/home 2.png" /></a>
        <span class="close" onClick={() => this.onOpenChange()}><img src="../img/guanbi-2备份 2.png" /></span>
        <ul class="list-group phone_list">
          <a onClick={() => { this.props.history.push('/app/vision') }}>{intl.get('header.vision')}</a>
          <a onClick={() => { this.props.history.push('/app/association') }}>{intl.get('header.association')}</a>
          <a onClick={() => { this.props.history.push('/app/partners') }}>{intl.get('header.partners')}</a>
          <a>{intl.get('header.blockchain explorer')}</a>
          <a onClick={() => { this.props.history.push('/app/media') }}>{intl.get('header.media')}</a>
          <a onClick={() => { this.props.history.push('/developers') }}>{intl.get('header.developers')}</a>
          <span id="whitePaper1" onClick={() => {
            this.props.history.push('/whiteParper')
          }}>{intl.get('header.white paper')}</span>
          <div class="change">
          {this.twoLanguages(localStorage.getItem("local"))}
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(SideBar);
