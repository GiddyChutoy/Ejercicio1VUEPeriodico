<template>
  <router-view/>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/articulos">Artículos</router-link> | 
    <router-link to="/acerca">Acerca de</router-link>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
