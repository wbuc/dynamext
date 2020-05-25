
export const API_LOADING = (state) => {
    state.api.loading = true
    console.log('mutate: api loading...')
}

export const API_COMPLETE = (state) => {
    state.api.loading = false
    console.log('mutate: api complete.')
}

export const API_ERROR = (state, error) => {
    state.api = { loading: false, error: error }
    console.log('api error: ', error)
}

export const NOTIFY_SUCCESS = (state, data) => {
    state.notification.type = 'success'
    state.notification.message = data ? data : 'Success notification';
    setTimeout(() => {
        state.notification.show = true;
    }, 500)
    setTimeout(() => {
        state.notification = { show: false, type: null, message: null };
    }, 3500)

}

export const NOTIFY_INFO = (state, data) => {
    state.notification.type = 'primary'
    state.notification.message = data ? data : 'Important notification';
    setTimeout(() => {
        state.notification.show = true;
    }, 500)
    setTimeout(() => {
        state.notification = { show: false, type: null, message: null };
    }, 4500)
}

export const NOTIFY_ERROR = (state, data) => {
    state.notification.type = 'error'
    state.notification.message = data ? data : 'Error notification';
    setTimeout(() => {
        state.notification.show = true;
    }, 500)
    setTimeout(() => {
        state.notification = { show: false, type: null, message: null };
    }, 4500)
}

export const NOTIFY_CLOSE = (state) => {
    state.notification = { show: false, type: null, message: null };
}