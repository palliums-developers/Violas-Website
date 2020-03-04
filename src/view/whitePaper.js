import React, { Component } from 'react';
import Header1 from '../components/header1';

import Footer from '../components/footer';
import BScroll from 'better-scroll';
import intl from 'react-intl-universal';
import { Anchor } from 'antd';
import 'antd/dist/antd.css';
import './style/whitePaper.scss';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import SideBar from '../components/sideBar';
import 'antd-mobile/dist/antd-mobile.css';
const { Link } = Anchor;

class WhitePaper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      mobileOpen: false
    }
  }
  componentWillMount() {
    intl.options.currentLocale = localStorage.getItem("local");
    this.setState({
      clWidth: document.body.clientWidth
    })
  }
  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.setState({
        clWidth: e.target.innerWidth
      })
    });
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  getChange = (open) => {
    this.setState({
      open: open
    })
  }
  getChange1 = (open) => {
    this.setState({
      open: false
    })
  }
  clickMobileNav = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  clickMobileNavClose = () => {
    this.setState({ mobileOpen: false })
  }
  render() {
    const sidebar = (<List>
      <SideBar getChange={this.getChange}></SideBar>
    </List>);
    return (
      <div className="whitePaper">
        <Header1 getChange={this.getChange} ></Header1>
        {
          this.state.clWidth > 1024 ?
            <section>
              <div className="headTalk">
                <div className="content">
                  <h3>{intl.get('whitepaper.Violas White Paper')}</h3>
                  <p>{intl.get('whitepaper.Violas White Paper1')}</p>
                  <p>{intl.get('whitepaper.Violas White Paper2')}</p>
                  <div className="down">
                      <span>Start Reading</span>
                      <a href="/documents/Violas-WhitePaper-EN.pdf"><label>Download WhitePaper</label><i></i></a>
                    </div>
                </div>
                <div className="bg2"><img src="./img/矩形复制 44@2x.png" /></div>
              </div>
              <div className="wrapper">
                <div className="wrapHead">
                  {/* className={this.state.scrollY > 780 ? 'pos wrapHead' : 'wrapHead'} */}
                  <Anchor class="toHeadings" bounds="10px">
                    <Link href={'#' + intl.get('whitepaper.Part 1')} title={intl.get('whitepaper.1')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 2')} title={intl.get('whitepaper.2')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 3')} title={intl.get('whitepaper.3')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 4')} title={intl.get('whitepaper.4')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 5')} title={intl.get('whitepaper.5')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 6')} title={intl.get('whitepaper.6')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 7')} title={intl.get('whitepaper.7')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 8')} title={intl.get('whitepaper.8')}></Link>
                    <Link href={'#' + intl.get('whitepaper.Part 9')} title={intl.get('whitepaper.9')}></Link>
                  </Anchor>
                </div>
                <div className="local">
                  <div id={intl.get('whitepaper.Part 1')} className="introduction introduction1">
                    <h4>{intl.get('whitepaper.Part 1')}</h4>
                    <div class="state">
                      <h2>{intl.get('whitepaper.Part 10')}</h2>
                      <h3> {intl.get('whitepaper.Part 11')}</h3>
                      <p>{intl.get('whitepaper.Part 111')}</p>
                      <h3>{intl.get('whitepaper.Part 12')}</h3>
                      <p>{intl.get('whitepaper.Part 121')}</p>
                      <h3>{intl.get('whitepaper.Part 13')}</h3>
                      <p>{intl.get('whitepaper.Part 131')}</p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 2')} className="introduction introduction2">
                    <h4>{intl.get('whitepaper.Part 2')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 20')}</h2>
                      <p>{intl.get('whitepaper.Part 201')}</p>
                    </div>
                    <div class="state">
                      <h3> {intl.get('whitepaper.Part 21')}</h3>
                      <p>{intl.get('whitepaper.Part 211')}</p>
                      <h3> {intl.get('whitepaper.Part 22')}</h3>
                      <p>{intl.get('whitepaper.Part 221')}</p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 3')} className="introduction introduction3">
                    <h4>{intl.get('whitepaper.Part 3')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 30')}</h2>
                      <p>{intl.get('whitepaper.Part 301')}
                      </p>
                    </div>
                    <div class="state">
                      <h3>{intl.get('whitepaper.Part 31')}</h3>
                      <p>{intl.get('whitepaper.Part 311')}</p>
                      <h3>{intl.get('whitepaper.Part 32')}</h3>
                      <p>{intl.get('whitepaper.Part 320')}</p>
                      <p>{intl.get('whitepaper.Part 321')}</p>
                      <p>{intl.get('whitepaper.Part 322')}</p>
                      <p>{intl.get('whitepaper.Part 323')}</p>
                      <p>{intl.get('whitepaper.Part 324')}</p>
                      <p>{intl.get('whitepaper.Part 325')}</p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 4')} className="introduction introduction4">
                    <h4>{intl.get('whitepaper.Part 4')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 40')}</h2>
                      <p>{intl.get('whitepaper.Part 401')}
                      </p>
                    </div>
                    <div class="state">
                      <h3>{intl.get('whitepaper.Part 41')}</h3>
                      <p>{intl.get('whitepaper.Part 411')}</p>
                      <h3>{intl.get('whitepaper.Part 42')}</h3>
                      <p>{intl.get('whitepaper.Part 421')}</p>
                      <h3>{intl.get('whitepaper.Part 43')}</h3>
                      <p>{intl.get('whitepaper.Part 431')}
                      </p>
                      <h3>{intl.get('whitepaper.Part 44')}</h3>
                      <p>{intl.get('whitepaper.Part 441')}
                      </p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 5')} className="introduction introduction5">
                    <h4>{intl.get('whitepaper.Part 5')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 50')}</h2>
                      <p>{intl.get('whitepaper.Part 501')}</p>
                    </div>
                    <div class="state">
                      <h3>{intl.get('whitepaper.Part 51')}</h3>
                      <p>{intl.get('whitepaper.Part 511')} </p>
                      <h3>{intl.get('whitepaper.Part 52')}</h3>
                      <p>{intl.get('whitepaper.Part 521')}</p>
                      <h3>{intl.get('whitepaper.Part 53')}</h3>
                      <p>{intl.get('whitepaper.Part 531')}</p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 6')} className="introduction introduction6">
                    <h4>{intl.get('whitepaper.Part 6')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 60')}</h2>
                      <p>{intl.get('whitepaper.Part 61')}</p>
                    </div>
                    <div class="state">
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 7')} className="introduction introduction7">
                    <h4>{intl.get('whitepaper.Part 7')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 70')}</h2>
                      <p>{intl.get('whitepaper.Part 71')}
                      </p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 8')} className="introduction introduction8">
                    <h4>{intl.get('whitepaper.Part 8')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 80')}</h2>
                      <p>{intl.get('whitepaper.Part 81')}
                      </p>
                      <p>{intl.get('whitepaper.Part 82')}</p>
                    </div>
                  </div>
                  <div id={intl.get('whitepaper.Part 9')} className="introduction introduction9">
                    <h4>{intl.get('whitepaper.Part 9')}</h4>
                    <div class="intro">
                      <h2>{intl.get('whitepaper.Part 90')}</h2>
                      <p>{intl.get('whitepaper.Part 91')}</p>
                      <p>{intl.get('whitepaper.Part 92')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> :
            <Drawer
              className="my-drawer"
              style={{ minHeight: document.documentElement.clientHeight }}
              enableDragHandle
              sidebar={sidebar}
              open={this.state.open}
              onOpenChange={this.onOpenChange}
              position="right"
            >
              <section>
                <div className="mobileNav">
                  {
                    !this.state.mobileOpen ?
                      <div className="mobileNavPart"><p onClick={() => this.clickMobileNav()}>Part</p></div> :
                      <div className="mobileNavList" >
                        <a href={'#' + intl.get('whitepaper.Part 1')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.1')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 2')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.2')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 3')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.3')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 4')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.4')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 5')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.5')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 6')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.6')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 7')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.7')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 8')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.8')}</a>
                        <a href={'#' + intl.get('whitepaper.Part 9')} onClick={() => this.clickMobileNav()}>{intl.get('whitepaper.9')}</a>
                      </div>
                  }
                </div>
                <div className="headTalk" onClick={() => this.clickMobileNavClose()}>
                  <div className="content">
                    <h3>{intl.get('whitepaper.Violas White Paper')}</h3>
                    <p>{intl.get('whitepaper.Violas White Paper1')}</p>
                    <p>{intl.get('whitepaper.Violas White Paper2')}</p>
                    <div className="down">
                      <span>Start Reading</span>
                      <a href="/documents/Violas-WhitePaper-EN.docx"><label>Download WhitePaper</label><i></i></a>
                    </div>
                  </div>
                  <div className="bg2"><img src="./img/矩形复制 44@2x.png" /></div>
                </div>
                <div className="wrapper" onClick={() => this.clickMobileNavClose()}>
                  <div className="wrapHead">
                    {/* className={this.state.scrollY > 780 ? 'pos wrapHead' : 'wrapHead'} */}
                    <Anchor class="toHeadings">
                      <Link href={'#' + intl.get('whitepaper.Part 1')} title={intl.get('whitepaper.1 Sharing')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 2')} title={intl.get('whitepaper.2 Concerns')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 3')} title={intl.get('whitepaper.3 Introducing')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 4')} title={intl.get('whitepaper.4 Blockchain')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 5')} title={intl.get('whitepaper.5 Wallet')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 6')} title={intl.get('whitepaper.6 currencies')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 7')} title={intl.get('whitepaper.7 Association')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 8')} title={intl.get('whitepaper.8 Involved')}></Link>
                      <Link href={'#' + intl.get('whitepaper.Part 9')} title={intl.get('whitepaper.9 Conclusion')}></Link>
                    </Anchor>
                  </div>
                  <div className="local" onClick={() => this.clickMobileNavClose()}>
                    <div id={intl.get('whitepaper.Part 1')} className="introduction introduction1">
                      <h4>{intl.get('whitepaper.Part 1')}</h4>
                      <div class="state">
                        <h2>{intl.get('whitepaper.Part 10')}</h2>
                        <h3> {intl.get('whitepaper.Part 11')}</h3>
                        <p>{intl.get('whitepaper.Part 111')}</p>
                        <h3>{intl.get('whitepaper.Part 12')}</h3>
                        <p>{intl.get('whitepaper.Part 121')}</p>
                        <h3>{intl.get('whitepaper.Part 13')}</h3>
                        <p>{intl.get('whitepaper.Part 131')}</p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 2')} className="introduction introduction2">
                      <h4>{intl.get('whitepaper.Part 2')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 20')}</h2>
                        <p>{intl.get('whitepaper.Part 201')}</p>
                      </div>
                      <div class="state">
                        <h3> {intl.get('whitepaper.Part 21')}</h3>
                        <p>{intl.get('whitepaper.Part 211')}</p>
                        <h3> {intl.get('whitepaper.Part 22')}</h3>
                        <p>{intl.get('whitepaper.Part 221')}</p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 3')} className="introduction introduction3">
                      <h4>{intl.get('whitepaper.Part 3')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 30')}</h2>
                        <p>{intl.get('whitepaper.Part 301')}
                        </p>
                      </div>
                      <div class="state">
                        <h3>{intl.get('whitepaper.Part 31')}</h3>
                        <p>{intl.get('whitepaper.Part 311')}</p>
                        <h3>{intl.get('whitepaper.Part 32')}</h3>
                        <p>{intl.get('whitepaper.Part 320')}</p>
                        <p>{intl.get('whitepaper.Part 321')}</p>
                        <p>{intl.get('whitepaper.Part 322')}</p>
                        <p>{intl.get('whitepaper.Part 323')}</p>
                        <p>{intl.get('whitepaper.Part 324')}</p>
                        <p>{intl.get('whitepaper.Part 325')}</p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 4')} className="introduction introduction4">
                      <h4>{intl.get('whitepaper.Part 4')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 40')}</h2>
                        <p>{intl.get('whitepaper.Part 401')}
                        </p>
                      </div>
                      <div class="state">
                        <h3>{intl.get('whitepaper.Part 41')}</h3>
                        <p>{intl.get('whitepaper.Part 411')}</p>
                        <h3>{intl.get('whitepaper.Part 42')}</h3>
                        <p>{intl.get('whitepaper.Part 421')}</p>
                        <h3>{intl.get('whitepaper.Part 43')}</h3>
                        <p>{intl.get('whitepaper.Part 431')}
                        </p>
                        <h3>{intl.get('whitepaper.Part 44')}</h3>
                        <p>{intl.get('whitepaper.Part 441')}
                        </p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 5')} className="introduction introduction5">
                      <h4>{intl.get('whitepaper.Part 5')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 50')}</h2>
                        <p>{intl.get('whitepaper.Part 501')}</p>
                      </div>
                      <div class="state">
                        <h3>{intl.get('whitepaper.Part 51')}</h3>
                        <p>{intl.get('whitepaper.Part 511')} </p>
                        <h3>{intl.get('whitepaper.Part 52')}</h3>
                        <p>{intl.get('whitepaper.Part 521')}</p>
                        <h3>{intl.get('whitepaper.Part 53')}</h3>
                        <p>{intl.get('whitepaper.Part 531')}</p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 6')} className="introduction introduction6">
                      <h4>{intl.get('whitepaper.Part 6')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 60')}</h2>
                        <p>{intl.get('whitepaper.Part 61')}</p>
                      </div>
                      <div class="state">
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 7')} className="introduction introduction7">
                      <h4>{intl.get('whitepaper.Part 7')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 70')}</h2>
                        <p>{intl.get('whitepaper.Part 71')}
                        </p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 8')} className="introduction introduction8">
                      <h4>{intl.get('whitepaper.Part 8')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 80')}</h2>
                        <p>{intl.get('whitepaper.Part 81')}
                        </p>
                        <p>{intl.get('whitepaper.Part 82')}</p>
                      </div>
                    </div>
                    <div id={intl.get('whitepaper.Part 9')} className="introduction introduction9">
                      <h4>{intl.get('whitepaper.Part 9')}</h4>
                      <div class="intro">
                        <h2>{intl.get('whitepaper.Part 90')}</h2>
                        <p>{intl.get('whitepaper.Part 91')}</p>
                        <p>{intl.get('whitepaper.Part 92')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {
                this.state.clWidth <= 1024 ? <Footer getChange={this.getChange1}></Footer> : null
              }
            </Drawer>
        }
        {
          this.state.clWidth > 1024 ? <Footer getChange={this.getChange1}></Footer> : null
        }
      </div>
    );
  }
}

export default WhitePaper;
