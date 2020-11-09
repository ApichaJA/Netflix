<template>
  <nav class="navbar navbar-expand-sm navbar-dark pl-5 pr-5">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img src="" width="250px" />
    </router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
        Home
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
.navbar-white {
  background-color: #fff;
  padding: 3vh 0 3vh 0;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0 2vh 0;
}
.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-nav {
  background: #000000;
  border-radius: 5px;
  color: #fff;
  width: 169px;
  height: 40px;
  font-size: 16px;
}

.btn-nav:hover {
  background-color: #ec1c24;
}
.btn-nav-active {
  background-color: #ec1c24;
}

.nav-item {
  margin-right: 1em;
}
.nav-link {
  color: #000 !important;
  font-size: 16px;
}
.nav-link:hover {
  color: #ec1c24 !important;
}
.nav-link-active {
  color: #ec1c24 !important;
}
</style>
