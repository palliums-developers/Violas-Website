import React, { Component } from 'react';
import intl from 'react-intl-universal';
import "./style/developers.scss";
class Developers extends Component {
  componentWillMount(){
    localStorage.setItem('whiteBg', 'header1');
    intl.options.currentLocale = localStorage.getItem('local');
  }
  render() {
    return (
      <div className="developers">
        <div className="title"><p>{intl.get('developers.ViolasPay APP')}</p></div>
      </div>
    );
  }
}

export default Developers;
