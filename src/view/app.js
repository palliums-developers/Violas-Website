import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RouterView from '../router/routerView';
import './app.scss';
import intl from 'react-intl-universal';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import SideBar from '../components/sideBar'
import 'antd-mobile/dist/antd-mobile.css'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      clWidth:null,
      open: false,
    }
  }
  componentWillMount(){
    let lang = intl.options.currentLocale
    switch (lang) {
      case 'ja':
        lang = 'JA';
        break;
      case 'ko':
        lang = 'KO';
        break;
      default:
        lang='EN';
        break;
    }
    localStorage.setItem('local', lang);
    intl.options.currentLocale = localStorage.getItem("local");
    this.setState({
      clWidth:document.body.clientWidth
    })
  }
  componentDidMount(){
    // this.setState({
    //   open:this.props.opens
    // })
    window.addEventListener('resize', (e)=>{
      this.setState({
        clWidth:e.target.innerWidth
      })
    });
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  getChange=(open)=>{
    this.setState({
      open:open
    })
  }
  render(){
    let { routes } = this.props;
    const sidebar = (<List>
      <SideBar getChange={this.getChange}></SideBar>
    </List>);
    return (
      <div className="app">
        <Header getChange={this.getChange} opens={this.state.open}></Header>
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
          <Footer></Footer>
        </Drawer>
        }

      </div>
    );
  }
}

export default App;
