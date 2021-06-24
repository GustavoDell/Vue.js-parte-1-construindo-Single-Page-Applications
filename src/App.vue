<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from "./routes";
import Menu from "./components/Menu.vue";

export default {
  name: 'App',
  data() {
    return{
      routes,
    }
  },
  components: {
    'meu-menu': Menu,
  }
}
</script>

<style>
.corpo{
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0px auto;
}
.pagina-enter, .pagina-leave-active{
  opacity: 0;
}
.pagina-enter-active, .pagina-leave-active{
  transition: opacity 10s;
}
</style>
