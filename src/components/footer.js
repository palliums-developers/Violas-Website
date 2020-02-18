import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
        <footer>
           <div className="footerNav">
             <div className="logo"><img src="/img/编组 74复制 3@2x.png"/></div>
             <div className="nav">
                <div>
                  <NavLink to="/app">Vision</NavLink>
                  <NavLink to="/app">Association</NavLink>
                  <NavLink to="/app">Partners</NavLink>
                </div>
                <div>
                  <NavLink to="/app">Blockchain Explorer</NavLink>
                  <NavLink to="/app">Media</NavLink>
                  <NavLink to="/app">Developers</NavLink>
                </div>
                <div>
                  <NavLink to="/app">White Paper</NavLink>
                </div>
             </div>
           </div>
           <div className="email">
             <p>violas_blockchain@violas.io</p>
             <p><img src="/img/形状 2@2x.png"/>violas_blockchain@violas.io</p>
             <p>
               <span>日本語</span>
               <span>한국어</span>
             </p>
           </div>
        </footer>
    );
  }
}

export default Footer;
