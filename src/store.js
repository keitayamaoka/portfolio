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
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      return axios.get(functionsUrl)
        .then(response => {
          commit('setSkills', response.data)
        })
    }
  },
  getters: {
    skillName: (state) => {
      const skillNameArray = []
      if(state.skills[1]){
        state.skills[1].skill.forEach((Name) => {
          skillNameArray.push(Name.name)
        })
      }
      return skillNameArray
    },
    skillBackName: (state) => {
      const skillNameArray = []
      if(state.skills[0]){
        state.skills[0].skill.forEach((Name) => {
          skillNameArray.push(Name.name)
        })
      }
      return skillNameArray
    },
    skillDevName: (state) => {
      const skillNameArray = []
      if(state.skills[2]){
        state.skills[2].skill.forEach((Name) => {
          skillNameArray.push(Name.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => {
      const skillScoreArray = []
      if(state.skills[1]){
        state.skills[1].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    },
    skillBackScore: (state) => {
      const skillScoreArray = []
      if(state.skills[0]){
        state.skills[0].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    },
    skillDevScore: (state) => {
      const skillScoreArray = []
      if(state.skills[2]){
        state.skills[2].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    }
  }
})
