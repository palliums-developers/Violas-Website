import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <div class="head">
            <div class="logo">
              <a href="index.html"><img src="/img/编组 25@2x.png" /></a>
            </div>
            <ul class="navList">
              <li>Vision</li>
              <li>Association</li>
              <li>Partners</li>
              <li>Blockchain Explorer</li>
              <li>Media</li>
              <li>Developers</li>
            </ul>
            <div class="descr">
              <span id="whitePaper">White Paper</span>
              <a>日本語</a>
              <a>한국어</a>
            </div>

            </div>
        </header>
    );
  }
                
}
              
export default Header;
