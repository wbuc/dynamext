
import store from '@/store/index'

function routeGaurd(to, from, next) {
    if (store.state.userProfile.idToken) {
        console.log('from: ', from, ' to: ', to);
        next();
    }
    else {
        next('/login');
    }
}


export default { routeGaurd }
