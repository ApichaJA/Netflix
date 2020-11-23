import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      genres: '',
  },

  getters:{
    getGenres(state){
      return state.genres
    },
  },

  mutations: {
    excicute(state, order){
      state.genres = order
    },
  },
  actions: {
    selectGenres(genresSelect, genres){
      genresSelect.commit('excicute', this.state.genres = genres)
    },
  },
  modules: {
  }
})
