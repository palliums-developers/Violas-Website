import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import intl from 'react-intl-universal';
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clWidth: null,
      open: false,
    }
  }
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
    this.setState({
      clWidth: document.body.clientWidth
    })
  }
  onOpenChange = (...args) => {
    this.setState({ open: true }, () => {
      this.props.getChange(this.state.open)
    });
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
  componentDidMount() {
    // this.setState({
    //   open:this.props.opens
    // })
    window.addEventListener('resize', (e) => {
      this.setState({
        clWidth: e.target.innerWidth
      })
    });
    console.log('header')
  }
  render() {
    return (
      this.state.clWidth > 1024 ?
        <header className="header">
          <div className="head">
            <div className="logo">
              {/* <a href="home">{localStorage.getItem('whiteBg') === "header" ? <img src="/img/编组 25@2x.png" /> : <img src="/img/编组 252@2x.png" />}</a> */}
              <img onClick={() => { this.props.history.push('/app/home') }} src="/img/编组 25@2x.png" />
            </div>
            <ul className="navList">
              <li id="vision" onClick={() => { this.props.history.push('./vision') }}>{intl.get('header.vision')}</li>
              <li id="association" onClick={() => { this.props.history.push('./association') }}>{intl.get('header.association')}</li>
              <li id="partners" onClick={() => { this.props.history.push('./partners') }}>{intl.get('header.partners')}</li>
              <li>{intl.get('header.blockchain explorer')}</li>
              <li id="media" onClick={() => { this.props.history.push('./media') }}>{intl.get('header.media')}</li>
              <li id="developers" onClick={() => { this.props.history.push('/developers') }}>{intl.get('header.developers')}</li>
            </ul>
            <div className="descr">
              <span id="whitePaper" onClick={() => {
                this.props.history.push('/whiteParper')
              }}>{intl.get('header.white paper')}</span>
              {this.twoLanguages(localStorage.getItem("local"))}
            </div>
          </div>
        </header> : <NavBar leftContent={<img onClick={() => { this.props.history.push('/app/home') }} src="/img/编组 74复制 4@2x.png" />} rightContent={<img src="/img/编组 212@2x.png" onClick={this.onOpenChange} />}>
        </NavBar>
    );
  }
}
export default withRouter(Header);
