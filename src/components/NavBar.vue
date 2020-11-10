<template>
  <nav class="navbar navbar-expand-sm navbar-dark pl-5 pr-5">
    <img src="@/assets/netflix-logo.png" width="100px" />
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
  z-index: 2;
  position: absolute;
  padding: 0.5em;
  background-color: transparent;
}

.nav-item{
  margin: .2vw;
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
}
</style>
