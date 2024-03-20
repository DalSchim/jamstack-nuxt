<script setup lang="ts">
import type {rameur} from '~/models/rameur.model'

const {findOne} = useStrapi4()
const route = useRoute()

const {data: rameur, pending} = useAsyncData('rameur',
    () => findOne<{ data: rameur }>(`rameurs/${route.params.slug}`
    ))
</script>


<template>
  <h1> Bienvenu {{rameur?.data.name}}</h1>

  <template v-if="pending">
    <p>Chargement...</p>
  </template>
  <template v-else>
    <div>
      <h1>{{ rameur?.data.name }}</h1>
      <p>{{ rameur?.data.bateau }}</p>
    </div>
  </template>

</template>


<style scoped>
  div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  }
</style>