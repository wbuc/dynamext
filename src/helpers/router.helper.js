
import store from '@/store/index'

function routeGaurd(to, from, next) {

    if (store.state.userProfile.userId) {
        next();
    }
    else {
        console.log('invalid client permissions')

        next('/login');
    }
}

// lazy load components - temp
function lazyLoad(view) {
    return () => import(`@/views/${view}.vue`)
}


export default { routeGaurd, lazyLoad }
