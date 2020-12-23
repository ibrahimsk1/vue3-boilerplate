import app from '../../main'

const mutations = {
    changeLang(state, payload) {
        app.$i18n.locale = payload
        localStorage.setItem('currentLanguage', payload)
    }
}

const actions = {
    setLang({ commit }, payload) {
        commit('changeLang', payload)
    }
}

export default {
    mutations,
    actions
}