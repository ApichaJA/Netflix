<template>
  <nav class="navbar navbar-expand-sm">
    <img src="@/assets/netflix-logo.png" width="98px" />
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
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
          TV Shows
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
          Movies
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
          Latest
        </router-link>
      </li>

            <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
          My List
        </router-link>
      </li>
      
      
      <div class="nav-right">
        <div class="search-box">
          <button class="btn-box">
            <i class=" fas fa-search btn-search"></i>
          </button>
          <input class="input-search-box" type="text" placeholder="Title,people,genres">
        </div>
      
        <div class="gift-box">
          <button class="btn-box">
            <i class="fas fa-gift btn-gift"></i>
          </button>
        </div>
      
        <div class="noti-box">
          <button class="btn-box">
            <i class="fas fa-bell btn-noti"></i>
          </button>
        </div>
      
        <div class="acc-box">
          <button class="btn-box">
            <i class="fas fa-user-circle btn-account"></i>
            <i class="fas fa-caret-down btn-caret-account"></i>
          </button>
        </div>

      </div>

    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
nav {
  padding: 1.1vh 3vw;
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: transparent;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
}

.nav-item{
  margin: .25vw;
}

.nav-link {
  color: #e5e5e5 !important;
  font-size: 16px;
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
  justify-content: flex-end;
  position: absolute;
  flex-grow: 1;
  right: 4%;
  height: 100%;
}

.btn-search{
  color: #fff;
  font-size: 1.3vw;
  margin: 7px;
  padding: 0px;
}

.btn-gift{
  color:#fff;
  font-size: 1.6vw;
  margin-right: 1em;
}

.btn-noti{
  color: #fff;
  font-size: 1.6vw;
  margin-right: 1em;
}

.btn-account{
  color:#fff;
  font-size:25px;
  margin-right: 0.5em;
}

.btn-caret-account{
  position: relative;
  top: -5px;
  color: #fff;
  font-size: 11px;
}

.btn-box{
  background-color: transparent;
  text-align: center;

}

div.search-box{
  position: relative;
}

.search-box{
  padding: 2px;
  border: 1px solid #e5e5e5;
  background-color: #000;
  margin: 1em;
}

.gift-box{
  position: relative;
  text-align: center;
  margin: 10px;
}

.noti-box{
  position: relative;
  text-align: center;
  margin: 10px;
}


.input-search-box{
  /* display: none; */
  text-align: left;
  margin: auto;
  width: 200px;
  height: 30px;
  background-color: #000;
  color:#fff;
  font-size: 12px;
}

.input-search-box:focus, button:focus{
  outline: none;
}

button, input{
  border: none;
  margin: 0px;
  padding: 0px;
}

</style>
