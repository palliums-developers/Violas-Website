import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RouterView from '../router/routerView';
import './app.scss';
import intl from 'react-intl-universal';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import SideBar from '../components/sideBar';
import 'antd-mobile/dist/antd-mobile.css';
import 'animate.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clWidth: null,
      open: false,
    }
  }
  componentWillMount() {
    // let currentLocale = intl.options.currentLocale;
    let lang = localStorage.getItem('local');
    switch (lang) {
      case 'ja':
        lang = 'JA';
        break;
      case 'JA':
        lang = 'JA';
        break;
      case 'ko':
        lang = 'KO';
        break;
      case 'KO':
        lang = 'KO';
        break;
      default:
        lang = 'EN';
        break;
    }
    localStorage.setItem('local', lang);
    // this.setState({language:lang});
    intl.options.currentLocale = localStorage.getItem("local");
    this.setState({
      clWidth: document.body.clientWidth
    })
  }
  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.setState({
        clWidth: e.target.innerWidth
      })
    });
    // if(localStorage.getItem("local")!==this.state.language){
    //   this.setState({language:localStorage.getItem("local")});
    //   this.forceUpdate();
    // }
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  getChange = (open) => {
    this.setState({
      open: open
    })
  }
  getChange1 = (open) => {
    this.setState({
      open: false
    })
  }
  render() {
    intl.options.currentLocale = localStorage.getItem('local');
    let { routes } = this.props;
    const sidebar = (<List>
      <SideBar getChange={this.getChange}></SideBar>
    </List>);
    return (
      <div className="app">
        <Header getChange={this.getChange} ></Header>
        {
          this.state.clWidth > 1024 ? <RouterView routes={routes}></RouterView> : <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            enableDragHandle
            sidebar={sidebar}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
            position="right"
          >
            <RouterView routes={routes}></RouterView>
            {
              this.state.clWidth <= 1024 ? <Footer getChange={this.getChange1} ></Footer> : null
            }
          </Drawer>
        }
        {
          this.state.clWidth > 1024 ? <Footer getChange={this.getChange1} ></Footer> : null
        }
        
      </div>
    );
  }
}

export default App;
