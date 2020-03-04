import React, { Component } from 'react';
import Header1 from '../components/header1';
import Footer from '../components/footer';
import intl from 'react-intl-universal';
import "./style/developers.scss";
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import SideBar from '../components/sideBar'
import 'antd-mobile/dist/antd-mobile.css';

class Developers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    componentWillMount() {
        // localStorage.setItem('whiteBg', 'header1');
        intl.options.currentLocale = localStorage.getItem('local');
        this.setState({
            clWidth: document.body.clientWidth
        })
    }
    componentDidMount() {
        // this.setState({
        //   open:this.props.opens
        // })
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
    render() {
        const sidebar = (<List>
            <SideBar getChange={this.getChange}></SideBar>
        </List>);
        return (
            <div className="developers">
                <Header1 getChange={this.getChange} opens={this.state.open}></Header1>
                {
                    this.state.clWidth > 1024 ?
                        <section>
                            <div className="vision vision0">
                                <div className="head">
                                    <div className="bg">
                                        <p>{intl.get('developers.ViolasPay APP')}</p>
                                        <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                    </div>
                                </div>
                                <div className="visionContent">
                                    <div className="violasPayDescr">
                                        <p><img src="./img/预览图004 2@2x.png" /></p>
                                        <p><img src="./img/预览图001 2@2x.png" /></p>
                                        <p><img src="./img/预览图002 2@2x.png" /></p>
                                        <p><img src="./img/预览图003 2@2x.png" /></p>
                                    </div>
                                    <div className="downloadPay">
                                        <dl>
                                            <dt><p className="wait">{intl.get('developers.Coming soon')}</p></dt>
                                            <dd><img src="./img/ai-app 2@2x.png" />
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <p className="wait">{intl.get('developers.Coming soon')}</p>
                                            </dt>
                                            <dd><img src="./img/ios 2@2x.png" /></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="vision vision1">
                                <div className="head">
                                    <div className="bg">
                                        <p>{intl.get('developers.ViolasSSO APP')}</p>
                                        <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                    </div>
                                </div>
                                <div className="visionContent">
                                    <div className="violasPayDescr">
                                        <p><img src="./img/预览图01 2@2x.png" /></p>
                                        <p><img src="./img/预览图03 2@2x.png" /></p>
                                        <p><img src="./img/预览图02 2@2x.png" /></p>
                                        <p><img src="./img/预览图04 2@2x.png" /></p>
                                    </div>
                                    <div className="downloadPay">
                                        <dl>
                                            <dt>
                                            <p className="wait">{intl.get('developers.Coming soon')}</p>
                                            </dt>
                                            <dd><img src="./img/ai-app 2@2x.png" />
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <p className="wait">{intl.get('developers.Coming soon')}</p>
                                            </dt>
                                            <dd><img src="./img/ios 2@2x.png" /></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="vision vision2">
                                <div className="head">
                                    <div className="bg">
                                        <p>ViolasClient</p>
                                        <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                    </div>
                                </div>
                                <div className="vision2Content">
                                    <div className="code"><img src="./img/code.png" /></div>
                                    <a href="/documents/violas-client.tar.gz"><i></i>{intl.get('developers.Violas Client')} &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                    <a href="/documents/ViolasClient.pdf"><i></i>{intl.get('developers.ViolasClient pdf')}</a>
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
                                <div className="vision vision0">
                                    <div className="head">
                                        <div className="bg">
                                            <p>{intl.get('developers.ViolasPay APP')}</p>
                                            <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                        </div>
                                    </div>
                                    <div className="visionContent">
                                        <div className="violasPayDescr">
                                            <p><img src="./img/预览图004 2@2x.png" /></p>
                                            <p><img src="./img/预览图001 2@2x.png" /></p>
                                            <p><img src="./img/预览图002 2@2x.png" /></p>
                                            <p><img src="./img/预览图003 2@2x.png" /></p>
                                        </div>
                                        <div className="downloadPay">
                                            <dl>
                                                <dt><p className="wait">{intl.get('developers.Coming soon')}</p></dt>
                                                <dd><img src="./img/ai-app 2@2x.png" />
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p className="wait">{intl.get('developers.Coming soon')}</p>
                                                </dt>
                                                <dd><img src="./img/ios 2@2x.png" /></dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="vision vision1">
                                    <div className="head">
                                        <div className="bg">
                                            <p>{intl.get('developers.ViolasSSO APP')}</p>
                                            <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                        </div>
                                    </div>
                                    <div className="visionContent">
                                        <div className="violasPayDescr">
                                            <p><img src="./img/预览图01 2@2x.png" /></p>
                                            <p><img src="./img/预览图03 2@2x.png" /></p>
                                            <p><img src="./img/预览图02 2@2x.png" /></p>
                                            <p><img src="./img/预览图04 2@2x.png" /></p>
                                        </div>
                                        <div className="downloadPay">
                                            <dl>
                                                <dt><p className="wait">{intl.get('developers.Coming soon')}</p></dt>
                                                <dd><img src="./img/ai-app 2@2x.png" />
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p className="wait">{intl.get('developers.Coming soon')}</p>
                                                </dt>
                                                <dd><img src="./img/ios 2@2x.png" /></dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="vision vision2">
                                    <div className="head">
                                        <div className="bg">
                                            <p>ViolasClient</p>
                                            <i><img src="./img/下划线 3@2x.png" alt="" /></i>
                                        </div>
                                    </div>
                                    <div className="vision2Content">
                                        <div className="code"><img src="./img/code.png" /></div>
                                        <a href="https://violas.io/client/violas-client.tar.gz"><i></i>{intl.get('developers.Violas Client')} &nbsp;&nbsp;&nbsp;&nbsp;</a>
                                        <a download="../utils/ViolasClient.pdf" href="../ViolasClient.pdf"><i></i>{intl.get('developers.ViolasClient pdf')}</a>
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

export default Developers;
