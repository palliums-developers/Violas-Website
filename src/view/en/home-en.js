import React,{Component} from 'react';
import '../style/scss-en/home.scss';
class HomeEN extends Component{
  render(){
    return (
        <div className="home">
           <div className="headContent">
             <div className="inset"><img src="/img/矩形 6@2x.png"/></div>
             <div className="headTalk">
                <p>Welcome to Violas</p>
                <p><label for="">WhitePaper</label><img src="/img/编组 45复制 3@2x.png" /></p>
             </div>
           </div>
        </div>
    );
  }
  
}

export default HomeEN;
