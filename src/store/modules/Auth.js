import AuthService from "../../services/AuthService"

const state = {
    user: {},
    error:""
}

const getters = {
    getUser(state) {
        return state.user;
    }
}

const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

const actions = {
    async loginUser({commit}, payload) {
        const result = await AuthService.login(payload).catch(error => console.log(error))
        commit("setUser", result);
    }


}

export default {
    state,
    getters,
    mutations,
    actions
}