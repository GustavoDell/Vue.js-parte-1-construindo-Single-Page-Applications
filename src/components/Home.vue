<template>
  <div>
      <h1 class="centralizado">{{ msg }}</h1>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título">
      
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo">
          <Painel :titulo="foto.titulo">
            <ImagemResponsiva  :src="foto.url" :alt="foto.titulo"/>
            <meu-botao tipo="button" rotulo="REMOVER" @click="remove(foto)"/>
          </Painel>
        </li>
      </ul>
  </div>
</template>

<script>
import Painel from './Painel.vue';
import ImagemResponsiva from "./imagemResponsiva.vue";
import Botao from "./Botao.vue";

export default {
  name: 'App',
  props: {
    
  },
  components: {
    Painel,
    ImagemResponsiva,
    'meu-botao': Botao
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
  methods: {
    remove(foto){
      if(confirm('Confirma operação?')){
        alert('remover a foto ' + foto.titulo);
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
