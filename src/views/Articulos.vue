<template>
  <div id="Articulos">
    <h1>Articulos</h1>
    <router-link :to="'/Articulos/' + articulo.id" v-for="(articulo, index) in articulos" :key="index" > Enlace {{articulo.id}} <br></router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'Articulos',
  components: {
    
  },
  data() {
    return {
      articulos: []
    }
  },
  /*methods: {
    barras: async function getUserAsync() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      this.articulos = await response.json()
    }
  },*/
  created() {
    //this.barras()

    axios.get("https://jsonplaceholder.typicode.com/todos/").then((result) => {
      this.articulos = result.data;
    })
  },

  
}
</script>