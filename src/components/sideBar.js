import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import intl from 'react-intl-universal';
import { List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        }
      }  
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
  }
  twoLanguages(lang) {
    switch (lang) {
      case 'EN':
        return <><span>{intl.get('header.ja')}</span><span>{intl.get('header.ko')}</span></>
      case 'JA':
        return <><span>{intl.get('header.en')}</span><span>{intl.get('header.ko')}</span></>
      case 'KO':
        return <><span>{intl.get('header.ja')}</span><span>{intl.get('header.en')}</span></>
    }
  }
  onOpenChange = (...args) => {
    this.setState({ open: false },()=>{
        this.props.getChange(this.state.open)
    });
  }
  render() {
    return (
        <div id="dw-p1" class="bmd-layout-drawer bg-faded">
         <a class="home" href="index.html"><img src="../img/home 2.png" /></a>
         <span class="close" onClick={()=>this.onOpenChange()}><img src="../img/guanbi-2备份 2.png" /></span>
         <ul class="list-group phone_list">
           <a onClick={() => { this.props.history.push('/app/vision') }}>Vision</a>
           <a onClick={() => { this.props.history.push('/app/association') }}>Association</a>
           <a onClick={() => { this.props.history.push('/app/partners') }}>Partners</a>
           <a>Blockchain Explorer</a>
           <a onClick={()=>{this.props.history.push('/app/media')}}>Media</a>
           <a onClick={()=>{this.props.history.push('/developers')}}>Developers</a>
           <span id="whitePaper1" onClick={() => {
             this.props.history.push('/whiteParper')
           }}>White Paper</span>
           <div class="change">
             {/* <!-- <a>EN</a> --> */}
             <a href="../ja/index.html">日本語</a>
             <a href="../ko/index.html" class="ka">한국어</a>
           </div>
         </ul>
       </div>
    );
  }
}

export default withRouter(SideBar);
