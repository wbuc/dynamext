import Vue from 'vue';

export const eventBus = new Vue({
    methods: {
        expandContextPanel(data) {
            this.$emit('fileroom.click.expandContextPanel', data)
        }
    }
});