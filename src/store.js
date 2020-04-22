import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [],
    loaded: false
  },
  mutations: {
    setSkills : function(state,skillsArray) {
      skillsArray[0].Skills.forEach((skillInfo) => {
        state.skills.push(skillInfo.name)
      })
      state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}) {
      return axios.get('https://us-central1-portfolio-a92e4.cloudfunctions.net/skills')
        .then(response => {
          commit('setSkills', response.data)
        })
    }
  },
})
