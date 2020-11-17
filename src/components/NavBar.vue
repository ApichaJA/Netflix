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
      
      <div>
            <button class="btn">
        <i class=" fas fa-search nav-icon"></i>
      </button>
      </div>
      
      <div>
            <button class="btn">
        <i class="fas fa-gift nav-icon"></i>
      </button>
      </div>
      
      <div>
            <button class="btn">
        <i class="fas fa-bell nav-icon"></i>
      </button>
      </div>
      
      <div>
            <button class="btn">
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
  z-index: 1;
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

.nav-icon {
  color: #e5e5e5 !important;
  font-size: 1.6vw;
}

.btn-account{
  color:#e5e5e5 !important;
  font-size:25px; 
  margin-right:5px;
}

.btn-caret-account{
  color:#e5e5e5 !important;
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
</style>
