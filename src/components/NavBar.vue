<template>
  <nav class="navbar navbar-expand-sm">
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
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'TVShows' }"
        >
          TV Shows
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Movies' }"
        >
          Movies
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'New' }"
        >
          New & Popular
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'List' }"
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
            <button class="btn search-btn-hide" :class="{'search-btn-show':showSearch}">
            <i class="fas fa-search btn-search"></i>
          </button>
          <input @autofocus="showSearch" :class="{'input-search-box': showSearch}" class="input-search-box-hide" type="text" placeholder="Title, people, genres">
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
</template>

<script>
export default {
  data() {
    return {
      showSearch : false,
    }
  },

  methods: {
    searchInput(){
      this.showSearch = true
      document.querySelector(".input-search-box-hide").autofocus;
    }
  },

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
nav {
  font-family: HelveticaNeueLight;
  padding: 0 4%;
  height: 68px;
  z-index: 1;
  width: 100%;
  position: fixed;
  background-color: transparent;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
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

</style>
