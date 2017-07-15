import React, {Component} from 'react';
import Logo from '../../../../img/logo.png'
import { GoogleLogin } from 'react-google-login-component';
import appSettings from '../../../settings';
import {AuthActions} from '../../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }

        this.auth2 = null;

        this.clickHandler = this.clickHandler.bind(this);
    }


    responseGoogle (googleUser) {
        const id_token = googleUser.getAuthResponse().id_token;
    }

    /**
    * Load the google sign in api and assign the login callback to a window function,
    * which in turn refers to a class function
    * @return {[type]} [description]
    */
    componentDidMount () {
        ( function (d, s, id){
            let js, gs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement(s); js.id = id;
            js.src = 'https://apis.google.com/js/platform.js';
            gs.parentNode.insertBefore(js, gs);

        }(document, 'script', 'google-platform'));
    }

    onLoginClickActions() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: appSettings.appKey,
                fetch_basic_profile: false,
                scope: 'profile'
            });

            this.auth2.grantOfflineAccess({'redirect_uri': 'postmessage', 'approval_prompt' : 'force'})
                .then(res => {
                    console.log('hey jai', res)

                    this.props.actions.login({
                         properties: JSON.stringify(res),
                         authType: 'Google'
                    });
                })
        });
    }

    clickHandler () {
        this.setState({
            loading: true
        }, () => {
            this.onLoginClickActions();
        });
    }

    render() {

        console.log('hey', this.props);

        const loginButtonClassNames = ['button', 'is-primary'];

        if (this.state.loading) {
            loginButtonClassNames.push('is-loading');
        }

        return (
            <div className="page-login">
                <section className="section">
                    <div className="container">
                        <div className="box login__ctn">
                        <img
                            className="login__logo"
                            src={Logo}
                        />
                        <button
                            className={loginButtonClassNames.join(' ')}
                            onClick={this.clickHandler}
                        >
                            Login with google
                        </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    (state, props) => {
        return {
            user: state.auth.user,
            authApiStatus: state.auth.authApiStatus
        };
    },
    (dispatch => ({
        actions: bindActionCreators(AuthActions, dispatch)
    }))
)(Login);
