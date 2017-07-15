import {Main} from './components/containers';
import {RulesPage} from './components/containers/governance';
import {Login} from './components/modules/base';
import { isLoggedIn } from './reducers/auth';

export default (store) => {
    const onEnter = (nextState, replace, callback) => {
        const returnUrl = nextState.location.pathname + nextState.location.search;
        if (isLoggedIn(store)) {
            callback();
        } else {
            console.log('hey replacing');
             replace('/login');
        }
    };

    return (
        {
            path: '/',
            component: Main,
            childRoutes: [
                {
                    path: 'login',
                    component: Login
                },
                {
                    path: '/governance',
                    onEnter: onEnter,
                    indexRoute: {
                        component: RulesPage
                    },
                    childRoutes: [
                        {
                            path: 'rulesPage',
                            component: RulesPage
                        }
                    ]
                }
            ]
        }
    )
};
