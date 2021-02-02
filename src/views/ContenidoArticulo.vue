<template>
  <div id="ContenidoArticulo">
    <h1>Articulo {{this.articulos.id}}</h1>
    <p> {{this.articulos.body}}</p>
    <!--<router-link v-for="(articulo, index) in articulos" :key="index" > Enlace {{articulo.body}} <br></router-link>-->
  </div>
</template>

<script>
export default {
  name: "ContenidoArticulo",
  components: {},
  data() {
    return {
      articulos: {},
    };
  },
  created() {
        this.barras
    },
  methods: {
    barras: async function getUserAsync() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/` + this.$route.params.id);
      this.articulos = await response.json();
    },
  },
  created() {
    this.barras();
  },
};
</script>