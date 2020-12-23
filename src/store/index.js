import { createStore } from "vuex" 
import i18n from './modules/i18n'
import Auth from './modules/Auth'


const store = createStore({
    modules: {
        i18n,
        Auth,
    }
});

export default store;