<template>
  <div id="nav">
    <div id="header">
      <h1>THE WORLD</h1> 
    </div>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/articulos">Artículos</router-link> | 
    <router-link to="/acerca">Acerca de</router-link>
    <router-view/>
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
