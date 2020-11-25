import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      genres: '',
      myList: [],
      searchOrder: '',
  },

  getters:{
    getGenres(state){
      return state.genres
    },
    getMylist(state){
      return state.myList
    },
    getOrder(state){
      return state.searchOrder
    },
  },

  mutations: {
    excicute(state, order){
      state.genres = order
    },
    addToMylist(state, movie){
      state.myList.push(movie)
    },
    removeToMylist(state, movie){
        for (let index = 0; index < state.myList.length; index++) {
            if (movie.title === this.getters.getMylist[index].title) {
              this.state.myList[index] = '';
            }
      }
    },
    findOrder(state, order){
      state.searchOrder = order
    },
  },
  actions: {
    selectGenres(genresSelect, genres){
      genresSelect.commit('excicute', this.state.genres = genres)
    },
    selectMylist(movieSelect, movie){
      movieSelect.commit('addToMylist', this.state.movie = movie)
    },
    removeMylist(movieSelect, movie){
      movieSelect.commit('removeToMylist', this.state.movie = movie)
    },
    searching(searchInput, text){
      searchInput.commit('findOrder', this.state.searchOrder = text)
    },
  },
  modules: {
  }
})
