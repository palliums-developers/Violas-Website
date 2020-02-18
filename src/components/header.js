import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header className="header">
          <div className="head">
            <div className="logo">
              <a href="index.html"><img src="/img/编组 25@2x.png" /></a>
            </div>
            <ul className="navList">
              <li>Vision</li>
              <li>Association</li>
              <li>Partners</li>
              <li>Blockchain Explorer</li>
              <li>Media</li>
              <li>Developers</li>
            </ul>
            <div className="descr">
              <span id="whitePaper" onClick={()=>{
                this.props.history.push('/whiteParper-en')
              }}>White Paper</span>
              <a>日本語</a>
              <a>한국어</a>
            </div>

            </div>
        </header>
    );
  }
                
}
              
export default withRouter(Header);
