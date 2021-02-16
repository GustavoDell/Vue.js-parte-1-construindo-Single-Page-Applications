<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="foto in fotos" :key="foto.titulo">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return{
      fotos: [
        {
          url:'https://sportbuzz.uol.com.br/media/_versions/corinthians_p000Pmj_widexl.jpeg',
          titulo: 'logo-corinthians'
        },
        {
          url:'https://www.focus.jor.br/wp-content/uploads/2020/05/Corinthians.jpg',
          titulo: 'sena-corinthians'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
