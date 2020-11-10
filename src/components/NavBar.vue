<template>
  <nav class="navbar navbar-expand-sm navbar-dark pl-5 pr-5">
      <img src="" width="250px" />
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{ 'nav-link-active': this.$route.name === 'Home' }"
        >
        New Releases
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
  font-size: 48px;
}
.nav-link:hover {
  color: #ec1c24 !important;
}
.nav-link-active {
  color: #ec1c24 !important;
}
</style>
