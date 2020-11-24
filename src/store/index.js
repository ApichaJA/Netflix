import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      genres: '',
      myList: []
  },

  getters:{
    getGenres(state){
      return state.genres
    },
    getMylist(state){
      return state.myList
    },
  },

  mutations: {
    excicute(state, order){
      state.genres = order
    },
    addToMylist(state, movie){
      state.myList.push(movie)
    },
  },
  actions: {
    selectGenres(genresSelect, genres){
      genresSelect.commit('excicute', this.state.genres = genres)
    },
    selectMylist(movieSelect, movie){
      movieSelect.commit('addToMylist', this.state.movie = movie)
    },
  },
  modules: {
  }
})
