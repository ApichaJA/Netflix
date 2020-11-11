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
},
}
</script>

<style>
body{
  background-color: #141414;
}

#app {
  font-family: 'Martel Sans', sans-serif;
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
