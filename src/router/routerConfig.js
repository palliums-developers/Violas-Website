import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import RouterView from './routerView'
import Routes from './routes'

class RouterConfig extends Component {
    render() {
        return (
            <HashRouter>
                <RouterView routes={Routes}></RouterView>
            </HashRouter>
        );
    }
}

export default RouterConfig;