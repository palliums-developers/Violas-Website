import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RouterView from '../router/routerView';
import './app.sass';

class App extends Component{
  render(){
    let { routes } = this.props;
    return (
      <div className="App">
        <Header></Header>
        <div>
          <RouterView routes={routes}></RouterView>
        </div>
        <Footer>底部</Footer>
      </div>
    );
  }
  
}

export default App;
