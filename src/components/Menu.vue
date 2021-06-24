<template>
    <nav>
      <ul>
        <li v-for="rota in rotas" :key="rota.name">
          <router-link :to="rota.path">
              {{ rota.name }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        rotas: {
            type: Array,
            required: true //Validação na props 
        }
    },
}
</script>
<style scoped>

</style>