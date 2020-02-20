import React, { Component } from 'react';
import intl from 'react-intl-universal';
import "./style/media.scss";
class Media extends Component {
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem('local');
  }
  render() {
    return (
      <div className='media'>
        <div className='headContent'>
          <div className='headContent1'></div>
          <div className='headTalk'>
            <h1>{intl.get('media.Violas Platform Core Roadmap #2 Full Version')}</h1>
            <h2>{intl.get('media.Violas Platform Development Team January 15, 2019')}</h2>
          </div>
        </div>
        <div className="section">
          <div className="black"><img src='/img/矩形 3@2x.png' />{intl.get('media.Summary')}</div>
          <p>{intl.get('media.Summary1')}</p>
          <p>{intl.get('media.The Vision2')}</p>
          <div className="title">{intl.get('media.Violas Platform Roadmap #1 Retrospective')}</div>
          <div className="black"><img src='/img/矩形 3@2x.png' />{intl.get('media.Overview')}</div>
          <p>{intl.get('media.Overview0')}</p>
          <li>{intl.get('media.Overview1')}</li>
          <li>{intl.get('media.Overview2')}</li>
          <li>{intl.get('media.Overview3')}</li>
          <li>{intl.get('media.Overview4')}</li>
          <li>{intl.get('media.Overview5')}</li>
          <li>{intl.get('media.Overview6')}</li>
          <li>{intl.get('media.Overview7')}</li>
          <li>{intl.get('media.Overview8')}</li>
          <li>{intl.get('media.Overview9')}</li>
          <li>{intl.get('media.Overview10')}</li>
          <li>{intl.get('media.Overview11')}</li>
          <li>{intl.get('media.Overview12')}</li>
          <p>{intl.get('media.Overview13')}</p>
          <div className="black"><img src='/img/矩形 3@2x.png' />{intl.get('media.Highlights')}</div>
          <div className="black black1">{intl.get('media.Violas mainnet features')}</div>
          <p>{intl.get('media.Violas mainnet features1')}</p>
          <div className="black black1">{intl.get('media.Violaspay')}</div>
          <li>{intl.get('media.Violaspay1')}</li>
          <li>{intl.get('media.Violaspay2')}</li>
          <li>{intl.get('media.Violaspay3')}</li>
          <li>{intl.get('media.Violaspay4')}</li>
          <li>{intl.get('media.Violaspay5')}</li>
          <li>{intl.get('media.Violaspay6')}</li>
          <li>{intl.get('media.Violaspay7')}</li>
          <li>{intl.get('media.Violaspay8')}</li>
          <li>{intl.get('media.Violaspay9')}</li>
          <li>{intl.get('media.Violaspay10')}</li>
          <li>{intl.get('media.Violaspay11')}</li>
          <div className=" black1">{intl.get('media.Violassso')}</div>
          <li>{intl.get('media.Violassso1')}</li>
          <li>{intl.get('media.Violassso2')}</li>
          <li>{intl.get('media.Violassso3')}</li>
          <li>{intl.get('media.Violassso4')}</li>
          <li>{intl.get('media.Violassso5')}</li>
          <li>{intl.get('media.Violassso6')}</li>
          <li>{intl.get('media.Violassso7')}</li>
          <li>{intl.get('media.Violassso8')}</li>
          <div className="black black1">{intl.get('media.Violasgov')}</div>
          <li>{intl.get('media.Violasgov1')}</li>
          <li>{intl.get('media.Violasgov2')}</li>
          <li>{intl.get('media.Violasgov3')}</li>
          <li>{intl.get('media.Violasgov4')}</li>
          <li>{intl.get('media.Violasgov5')}</li>
          <li>{intl.get('media.Violasgov6')}</li>
          <li>{intl.get('media.Violasgov7')}</li>
          <li>{intl.get('media.Violasgov8')}</li>
          <li>{intl.get('media.Violasgov9')}</li>
          <li>{intl.get('media.Violasgov10')}</li>
          <li>{intl.get('media.Violasgov11')}</li>
          <li>{intl.get('media.Violasgov12')}</li>
          <li>{intl.get('media.Violasgov13')}</li>
          <div className="black black1">{intl.get('media.Violas Client')}</div>
          <li>{intl.get('media.Violas Client1')}</li>
          <li>{intl.get('media.Violas Client2')}</li>
          <li>{intl.get('media.Violas Client3')}</li>
          <li>{intl.get('media.Violas Client4')}</li>
          <li>{intl.get('media.Violas Client5')}</li>
          <li>{intl.get('media.Violas Client6')}</li>
          <li>{intl.get('media.Violas Client7')}</li>
          <div className="title">{intl.get('media.Violas Platform Roadmap #2')}</div>
          <p>{intl.get('media.Violas Platform Roadmap #20')}</p>
          <li>{intl.get('media.Violas Platform Roadmap #21')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #22')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #23')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #24')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #25')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #26')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #27')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #28')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #29')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #210')}</li>
          <p>{intl.get('media.Violas Platform Roadmap #220')}</p>
          <li>{intl.get('media.Violas Platform Roadmap #221')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #222')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #223')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #224')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #225')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #226')}</li>
          <p>{intl.get('media.Violas Platform Roadmap #230')}</p>
          <li>{intl.get('media.Violas Platform Roadmap #231')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #232')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #233')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #234')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #235')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #236')}</li>
          <p>{intl.get('media.Violas Platform Roadmap #240')}</p>
          <li>{intl.get('media.Violas Platform Roadmap #241')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #242')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #243')}</li>
          <li>{intl.get('media.Violas Platform Roadmap #244')}</li>
        </div>
      </div>
    );
  }
}

export default Media;
