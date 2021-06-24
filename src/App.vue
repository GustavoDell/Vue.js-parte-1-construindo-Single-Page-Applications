<template>
  <div class="corpo">
      <h1 class="centralizado">{{ msg }}</h1>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título">
      
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo">
          <Painel :titulo="foto.titulo">
            <ImagemResponsiva class="imagem-responsiva" :src="foto.url" :alt="foto.titulo"/>
          </Painel>
        </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/Painel.vue';
import ImagemResponsiva from "./components/imagemResponsiva.vue";


export default {
  name: 'App',
  props: {
    
  },
  components: {
    Painel,
    ImagemResponsiva,  
  },
  data () {
    return{
      fotos: [],
      msg: 'Alura',
      filtro: ''
    }
  },
  computed: {

    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }

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

.filtro{
  display: block;
  width: 100%;
}
</style>
