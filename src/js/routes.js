import {Main} from './components/containers';
import Search from './components/containers/Search';
import {Login} from './components/modules/base';
import { isLoggedIn } from './reducers/auth';

export default (store) => {
    const onEnter = (nextState, replace, callback) => {
        const returnUrl = nextState.location.pathname + nextState.location.search;
        if (isLoggedIn(store)) {
            callback();
        } else {
             replace('/login');
        }
    };

    return (
        {
            path: '/',
            component: Main,
            childRoutes: [
                {
                    path: '/search',
                    indexRoute: {
                        component: Search
                    }
                }
            ]
        }
    )
};
