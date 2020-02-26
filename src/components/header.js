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
      getChange: false,
      scrollDirection: 'stop',
      preScroll: 0
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
    return <a onClick={() => { localStorage.setItem('local', 'EN'); this.onOpenChange(); }}>{intl.get('header.en')}</a>
  }
  goKO() {
    return <a onClick={() => { localStorage.setItem('local', 'KO'); this.onOpenChange(); }}>{intl.get('header.ko')}</a>
  }
  goJA() {
    return <a onClick={() => { localStorage.setItem('local', 'JA'); this.onOpenChange(); }}>{intl.get('header.ja')}</a>
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
    window.addEventListener('resize', (e) => {
      this.setState({
        clWidth: e.target.innerWidth
      })
    });
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (e) => {
    if (window.scrollY == this.state.preScroll||window.scrollY<=80) {
      this.setState({ scrollDirection: 'stop' });
    } else if (window.scrollY > this.state.preScroll) {
      this.setState({ scrollDirection: 'down', preScroll: window.scrollY })
    } else if (window.scrollY < this.state.preScroll) {
      this.setState({ scrollDirection: 'up', preScroll: window.scrollY })
    }
  }
  scrollHeader=(temp)=>{
    let className_temp="";
    let style_temp={};
    if(this.state.scrollDirection=='up'&&window.scrollY>608){
    // return {position:"fixed",background:"white",color:"black"}
      // return 'className="header1" style={position:"fixed"}'
      className_temp='header1';
      style_temp={position:"fixed", background:"white", zIndex:"999"};
    }else{
      // return {position:"absolute"}
      // return 'className="header"'
      className_temp= 'header';
      style_temp={};
    }
    // this.state.scrollDirection=='up'&&window.scrollY>608?'className="header1" style={position:"fixed"}':'className="header"'
    if(temp=='className'){
      return className_temp;
    }else if(temp=='style'){
      return style_temp;
    }
  }
  render() {
    intl.options.currentLocale = localStorage.getItem('local');
    return (
      this.state.clWidth > 1024 ?
        // <header className="header">
        <header className={this.scrollHeader('className')} style={this.scrollHeader('style')}>
          <div className="head">
            <div className="logo">
              {/* <a href="home">{localStorage.getItem('whiteBg') === "header" ? <img src="/img/编组 25@2x.png" /> : <img src="/img/编组 252@2x.png" />}</a> */}
              <img onClick={() => { this.props.history.push('/app/home') }} src={this.state.scrollDirection=='stop'?"/img/编组 25@2x.png":"/img/编组 252@2x.png"} />
              {/* <img onClick={() => { this.props.history.push('/app/home') }} src="/img/编组 25@2x.png" /> */}
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
        </header> : <NavBar style={this.scrollHeader('style')} leftContent={<img onClick={() => { this.props.history.push('/home') }} src="/img/编组 74复制 4@2x.png" />} rightContent={<img src="/img/编组 212@2x.png" onClick={this.onOpenChange} />}>
        </NavBar>
    );
  }
}
export default withRouter(Header);
