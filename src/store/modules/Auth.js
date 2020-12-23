import AuthService from "../../services/AuthService"

const state = {
    user: {}
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
    login({commit}, payload) {
        AuthService.login(payload).then(res => {
            var result = JSON.parse(res.data);
            commit("setUser", result);
        }).catch(error => console.log(error))
    }

    
}

export default {
    state,
    getters,
    mutations,
    actions
}