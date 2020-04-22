import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers : function(state,users) {
      state.users = users
    }
  },
  actions: {
    getUsers: function({commit}){
      return axios.get('https://us-central1-portfolio-a92e4.cloudfunctions.net/skills')
        .then(response => {
        commit('setUsers', response.data)
      })
    }
  }
});
