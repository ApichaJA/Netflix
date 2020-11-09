<template>
  <div id="app">
       <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
components: {
    NavBar,
}
}
</script>

<style>
body{
  background: #141414;
}
#app {
font-family: "Netflix";
src: url('fonts/Netflix.ttf');
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
