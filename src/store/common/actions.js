/# NOTIFCATION STATE #/;
/#####################/;
export const notifySuccess = ({ commit }, data) => {
    commit('NOTIFY_SUCCESS', data)
}
export const notifyInfo = ({ commit }, data) => {
    commit('NOTIFY_INFO', data)
}
export const notifyError = ({ commit }, data) => {
    commit('NOTIFY_ERROR', data)
}
export const closeNotify = ({ commit }) => {
    commit('NOTIFY_CLOSE');
}

/# LOADING STATE #/;
/#################/;
export const apiLoading = ({ commit }) => {
    commit('API_LOADING');
}
export const apiComplete = ({ commit }) => {
    commit('API_COMPLETE');
}
