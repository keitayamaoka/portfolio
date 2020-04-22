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
    setSkills : function(state,skills) {
    state.skills = skills
    state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}){
      return axios.get('https://us-central1-portfolio-a92e4.cloudfunctions.net/skills')
        .then(response => {
          commit('setSkills', response.data)
        })
    }
  },
  getters: {
    skillName: (state) => (index) => {
      const skillNameArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Name) => {
          skillNameArray.push(Name.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    }
  }
})
