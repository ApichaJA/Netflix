<template>
<div>
  <nav class="navbar navbar-expand-sm" :class="{'setPosition' : this.$route.name === 'TVshow' || this.$route.name === 'Movies'}">
    <img src="@/assets/netflix-logo.png" width="98px" />
    <div class="navbar-container">
      <div class="nav-left">
        <ul class="navbar-nav ml-4">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Home' }"
              :class="{ 'nav-link-active': this.$route.name === 'Home' }"
            >
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'TVshow' }"
              :class="{ 'nav-link-active': this.$route.name === 'TVshow' }"
            >
              TV Shows
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Movies' }"
              :class="{ 'nav-link-active': this.$route.name === 'Movies' }"
            >
              Movies
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Latest' }"
              :class="{ 'nav-link-active': this.$route.name === 'Latest' }"
            >
              Latest
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'myList' }"
              :class="{ 'nav-link-active': this.$route.name === 'myList' }"
            >
              My List
            </router-link>
          </li>
        </ul>
      </div>

      <div class="nav-right">
        <div class="search-box">
          <button v-if="!showSearch" class="btn" v-on:click="searchInput()">
            <i class="fas fa-search btn-search"></i>
          </button>
        </div>
        <div class="input-search-group">
          <button
            class="btn search-btn-hide"
            :class="{ 'search-btn-show': showSearch }"
          >
            <i class="fas fa-search btn-search"></i>
          </button>
          <input
            @autofocus="showSearch"
            :class="{ 'input-search-box': showSearch }"
            class="input-search-box-hide"
            type="text"
            placeholder="Title, people, genres"
          />
        </div>

        <div class="gift-box">
          <button class="btn">
            <i class="fas fa-gift btn-gift"></i>
          </button>
        </div>

        <div class="noti-box">
          <button class="btn">
            <i class="fas fa-bell btn-noti"></i>
          </button>
        </div>

        <div class="acc-box">
          <button class="btn">
            <i class="fas fa-user-circle btn-account"></i>
            <i class="fas fa-caret-down btn-caret-account"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
            <div class="showTitlepage" v-if="this.$route.name === 'TVshow' || this.$route.name === 'Movies'">
            <span v-if="this.$route.name === 'TVshow'">TV Shows</span>
            <span v-if="this.$route.name === 'Movies'">Movies</span>
            <div class="genrespage">
              <button class="genresbox" v-on:click="showSelectgenresBox = !showSelectgenresBox">
                Genres
                <i
                  class="fas fa-caret-down"
                  style="position: absolute; left:22vw"
                ></i>
              </button>
              <div v-if="showSelectgenresBox" class="selectgenresBox" v-on:click="showSelectgenresBox = !showSelectgenresBox">
                  <div class="selectgenresBox-col">

                <button class="btn genres-item mr-5" v-on:click="selectGenres('Action')">Action</button>
                <button class="btn genres-item mr-5" v-on:click="selectGenres('Crime')">Crime</button>
                <button class="btn genres-item mr-5" v-on:click="selectGenres('Drama')">Drama</button>
                <button class="btn genres-item mr-5" v-on:click="selectGenres('Biography')">Biography</button>
                  </div>
                  <div class="selectgenresBox-col">
                <button class="btn genres-item mr-5" v-on:click="selectGenres('History')">History</button>
                <button class="btn genres-item mr-5" v-on:click="selectGenres('Adventure')">Adventure</button>
                <button class="btn genres-item mr-5" v-on:click="selectGenres('Fantasy')">Fantasy</button>
                </div>
                 <div class="selectgenresBox-col">
                <button class="btn genres-item" v-on:click="selectGenres('Comedy')">Comedy</button>
                <button class="btn genres-item" v-on:click="selectGenres('Romance')">Romance</button>
                <button class="btn genres-item" v-on:click="selectGenres('SciFi')">SciFi</button>
                </div>
              </div>
            </div>
          </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch : false,

      showSelectgenresBox: false,
    }
  },

  methods: {
    searchInput(){
      this.showSearch = true
      document.querySelector(".input-search-box-hide").autofocus;
    },
    selectGenres(genres){
      this.$store.dispatch("selectGenres", genres);
    }
  },

mounted(){
  function navBarPosition () {
    if( this.scrollY > 10){
    document.querySelector(".navbar").classList.add('nav-black')
  }
      if( this.scrollY > 80){
    document.querySelector(".showTitlepage").classList.add('nav-showTitlepage')
  }
  else{
    document.querySelector(".navbar").classList.remove('nav-black')
    document.querySelector(".showTitlepage").classList.remove('nav-showTitlepage')
  }
}
window.addEventListener("scroll", navBarPosition , false);
}

};
</script>

<style scoped>
nav {
  font-family: HelveticaNeueLight;
  padding: 0 4%;
  height: 68px;
  z-index: 5;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  transition: background-color .2s;
}

.setPosition{
  position: absolute!important;
}

.nav-black{
  background-color: black!important;
  transition:background-color .6s;
}

.navbar-container{
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nav-item{
  margin: .25vw;
}

.nav-link {
  color: #e5e5e5 !important;
  font-size: 14px;
}
.nav-link:hover {
  opacity: 0.5;
  transition:opacity 0.5s;
}
.nav-link-active {
  color: #fff !important;
  font-weight: 700;
  align-items: center;
}
.nav-right{
  display: flex;
  align-items: center;
}

.nav-showTitlepage{
  top: 0!important;
  background-color: #000;
  width: 100%;
  position: fixed!important;
  transition:background-color .3s;
  margin: 0!important;
}

.btn-search{
  color: #fff;
  margin: 7px;
  padding: 0px;
}

.btn-gift{
  color:#fff;
}

.btn-noti{
  color: #fff;
}

.btn-account{
  color:#fff;
  font-size: 1.5vw;
  margin-right: 1vw;
}

.btn-caret-account{
  position: relative;
  top: -5px;
  color: #fff;
  font-size: 11px;
}

.btn-box, .btn{
  background-color: transparent;
  padding: 0;
  font-size: 1vw;
  margin-left: 1.2vw;
}

.input-search-box-hide{
  width: 0;
  opacity: 0;
}

.search-btn-hide{
  display: none;
}
.input-search-group{
  position: relative;
}
.search-btn-show{
  display: block;
  position: absolute;
  left: 0;
  opacity: 1;
  margin: 0;
}

.input-search-box{
  width: 14vw;
  padding: .3vw 2vw;
  background-color: #000;
  border: 1px solid #fff;
  color:#fff;
  font-size: .8vw;
  outline: none;
  opacity: 1;
  transition:width .3s;
}

.showTitlepage {
  padding: 0 3.1vw;
  position:absolute;
  display: flex;
  align-items: center;
  font-size: 2.5vw;
  color: #fff;
  z-index: 5;
  top: 3.9vw;
  margin-left: 0.7vw;
}

.selectgenresBox {
  background-color: #000;
  position: absolute;
    text-align: left;
    padding:0 15px 5px 15px;
    line-height: .8em;
    background: rgba(0, 0, 0, 0.95);
}

.selectgenresBox-col{
    display: table-cell;
    width: 1vw;
}

.genres-item{
    display: inline-block;
    color: #fff;
    font-size: .8vw;
    padding: 0;
}

.genres-item:hover{
    text-decoration: underline;
}

.genresbox {
  border: 1px solid #fff;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1vw;
  width: fit-content;
  padding: 0.2em 3vw 0.2em 10px;
}

.genresbox:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.genrespage {
  margin-left: 1em;
}


</style>
