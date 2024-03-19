<script setup lang="ts">
import type {rameur, RameursResponse} from "~/models/rameur.model";
import type {Meta} from "~/models/strapi.model";
import type {club} from "~/models/club.model";

const filter = ref("")

const {find} = useStrapi4()
const {data: rameurs, pending:rameurPending} =  useAsyncData('rameurs',  () => {
  return  find<{ data: rameur[], meta:Meta  }>('rameurs', {
    populate: '*',
    filters:{
    club:{
      slug:{
        $eq:filter.value
      }
    }

    }

  })
}, {
  watch: [filter]
})

//création de filtre
const {data:club,pending:clubpending}=useAsyncData('club', () => {
  return find<{ data: club[] }>('clubs')
})
</script>
<template>


  <template v-if="rameurPending">
    ça charge
  </template>
  <template v-else>
    <pre>{{ rameurs }}</pre>
    <select v-model="filter">
      <option value="club">Tous les rameurs</option>
      <option v-for="club in club?.data" :key="club.slug" :value="club.slug">{{ club.name }}</option>
    </select>
    <p>Bonjour</p>
    <div v-for="rameur in rameurs?.data" :key="rameur.slug">
      <a :href="`/rameurs/${rameur.slug}`" :key="rameur.id">{{ rameur.name }}</a>
    </div>

  </template>
</template>


<style scoped></style>