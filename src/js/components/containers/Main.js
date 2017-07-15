import React, {Component} from 'react';
import {Header, Footer, SideNav} from '../modules/base';

export default class Main extends Component {
    static isLoggedIn (nextState, replaceState, callback) {
        const returnUrl = nextState.location.pathname + nextState.location.search;
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log('props', this.props);
        let headerComponent = <Header />;
        let footerComponent = <Footer />;
        let sideNav = (
            <div className="column is-2 no-padding">
                <SideNav />
            </div>
        );

        // hide the usual components in the following case
        //
        const hideUsualComponents = ['/login'];

        if (hideUsualComponents.indexOf(this.props.location.pathname) != -1) {
            headerComponent = null;
            footerComponent = null;
            sideNav = null;
        }

        return (
            <div className="app">
              <div className="columns">
                {sideNav}
                <div className="column no-padding">
                  {headerComponent}
                      {this.props.children}
                  </div>
                </div>
                {footerComponent}
            </div>
        );
    }
}
