import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import intl from 'react-intl-universal';
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clWidth: null,
      open: false,
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
      console.log(this.state.open)
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
    // this.setState({
    //   open:this.props.opens
    // })
    window.addEventListener('resize', (e) => {
      this.setState({
        clWidth: e.target.innerWidth
      })
    });
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (e) => {
    if (window.scrollY == this.state.preScroll || window.scrollY <= 80) {
      this.setState({ scrollDirection: 'stop' });
    } else if (window.scrollY > this.state.preScroll) {
      this.setState({ scrollDirection: 'down', preScroll: window.scrollY })
    } else if (window.scrollY < this.state.preScroll) {
      this.setState({ scrollDirection: 'up', preScroll: window.scrollY })
    }
  }
  fixedHeader = () => {
    let temp = {};
    this.state.scrollDirection == 'up' ? temp = { position: "fixed", background: "white", zIndex: "999" } : temp = {};
    //{position:"fixed", background:"white", zIndex:"999"}
    // console.log(temp)
    return temp;
  }
  render() {
    intl.options.currentLocale = localStorage.getItem('local');
    return (
      this.state.clWidth > 1024 ? <header className="header" style={this.fixedHeader()} >
        <div className="head">
          <div className="logo">
            <a href="index.html"><img src="/img/编组 252@2x.png" /></a>
          </div>
          <ul className="navList">
            <li id="vision" onClick={() => { this.props.history.push('/app/vision') }}>{intl.get('header.vision')}</li>
            <li id="association" onClick={() => { this.props.history.push('/app/association') }}>{intl.get('header.association')}</li>
            <li id="partners" onClick={() => { this.props.history.push('/app/partners') }}>{intl.get('header.partners')}</li>
            <li>{intl.get('header.blockchain explorer')}</li>
            <li id="media" onClick={() => { this.props.history.push('/app/media') }}>{intl.get('header.media')}</li>
            <li id="developers" onClick={() => { this.props.history.push('/developers') }}>{intl.get('header.developers')}</li>
          </ul>
          <div className="descr">
            <span id="whitePaper" onClick={() => {
              this.props.history.push('/whiteParper')
            }}>{intl.get('header.white paper')}</span>
            {this.twoLanguages(localStorage.getItem("local"))}
          </div>
        </div>
      </header> : <NavBar leftContent={<img onClick={() => { this.props.history.push('/app') }} src="/img/编组 74复制 3@2x.png" />} rightContent={<img src="/img/phone_nav.png" onClick={this.onOpenChange} />}>
        </NavBar>
    );
  }
}
export default withRouter(Header1);
