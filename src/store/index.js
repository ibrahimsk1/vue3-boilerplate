import Vue from 'vue'
import Vuex from 'vuex'


import i18nModule from './modules/i18nModule'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        i18nModule,
    }
});