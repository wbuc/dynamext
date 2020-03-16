
import store from '@/store/index'

function routeGaurd(to, from, next) {

    if (store.state.userProfile.idToken) {
        // console.log('from: ', from, ' to: ', to);
        // console.log('idToken: ', store.state.userProfile.idToken)
        next();
    }
    else {
        next('/login');
    }
}

// lazy load components - temp
function lazyLoad(view) {
    return () => import(`@/views/${view}.vue`)
}


export default { routeGaurd, lazyLoad }
