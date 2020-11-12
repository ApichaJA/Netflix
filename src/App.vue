<template>
<div id="app">
    <NavBar />
    <router-view />
    <Footer />
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
    components: {
        NavBar,
        Footer,
    },
}
</script>

<style>
body {
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
