import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RouterView from '../router/routerView';
import './app.scss';

class App extends Component{
  render(){
    let { routes } = this.props;
    return (
      <div className="app">
        <Header></Header>
        <RouterView routes={routes}></RouterView>
        <Footer>底部</Footer>
      </div>
    );
  }
  
}

export default App;
