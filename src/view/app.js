import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RouterView from '../router/routerView';
import './app.scss';
import intl from 'react-intl-universal';

class App extends Component{
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
  }
  render(){
    let { routes } = this.props;
    return (
      <div className="app">
        <Header></Header>
        <RouterView routes={routes}></RouterView>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
