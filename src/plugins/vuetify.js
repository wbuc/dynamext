import Vue from 'vue';
import Vuetify from 'vuetify/lib';


// Note: Specific config for vuetify error message when using 'all' on the treeview selection type.
Vue.config.warnHandler = function (msg, vm, trace) {
    if (msg !== 'Invalid prop: custom validator check failed for prop "selectionType".') {
        const hasConsole = typeof console !== 'undefined';
        if (hasConsole && !Vue.config.silent) {
            console.error(`[Vue warn]: ${msg}${trace}`);
        }
    }
}


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#21CFF3',
                accent: '#FF4081',
                secondary: '#02BAA9',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            },
            light: {
                primary: '#1976D2',
                accent: '#e91e63',
                secondary: '#30b1dc',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        }
    }
});
