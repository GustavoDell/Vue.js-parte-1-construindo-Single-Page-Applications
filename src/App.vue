<template>
  <div class="corpo">
      <h1 class="centralizado">{{ msg }}</h1>
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.titulo">
          <Painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo"/>
          </Painel>
        </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/Painel.vue';


export default {
  name: 'App',
  props: {
    
  },
  components: {
    Painel,  
  },
  data () {
    return{
      fotos: [],
      msg: 'Alura'
    }
  },
  created() {
     
     this.axios.get('http://localhost:3000/v1/fotos')
      .then(res => this.fotos = res.data, err => console.log(err));
     
  }
  
}
</script>

<style>
.corpo{
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0px auto;
}
.centralizado{
  text-align: center;
}
.lista-fotos{
  list-style: none;
}
.lista-fotos .lista-fotos-item{
  display: inline-block;
}
.imagem-responsiva{
  width: 100%;
}
</style>
