<script setup lang="ts">
import type {rameur, RameursResponse} from "~/models/rameur.model";
import type {club} from "~/models/club.model";

const filter = ref()
let name = ref()
let page = ref(1)
let pageSize = ref(6)


const {find} = useStrapi4()
const {data: rameurs, pending:RameurPending} =  useAsyncData('rameurs',  () => {
  return  find<RameursResponse>('rameurs', {
    populate: '*',
    pagination:{
      page: page.value,
      pageSize: pageSize.value
    },
    filters:{
      name:{
        $contains: name.value
      },
    club:{
      slug:{
        // si filter.value est vide, on ne filtre pas (on affiche tout)
    $eqi: filter.value || undefined
      }
    }
    }
  })
}, {
  watch: [filter, name]

})
//création de filtre
const {data:club,pending:clubpending}=useAsyncData('clubs', () => {
  return find<{data: club[]}>('clubs', {
    populate: '*'
  })
})
</script>
<template>
  <input type="text" v-model="name" placeholder="Rechercher un rameur">
  <template v-if="RameurPending">
    ça charge
  </template>
  <template v-else>
    <select v-model="filter">
      <option selected :value=undefined>Tous les rameurs</option>
      <option v-for="club in club?.data" :key="club.slug" :value="club.slug">{{ club.name }}</option>
    </select>
    <p>Bonjour</p>
    <div v-for="rameur in rameurs?.data" :key="rameur.slug">
      <a :href="`/rameurs/${rameur.slug}`">{{ rameur.name }}</a>
    </div>
    <button v-for="page in rameurs?.meta.pagination.pageCount" v-on:click="page=page">{{ page }}</button>
  </template>
</template>


<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    margin: 0 auto;
  }

  header {
    top: 0;
    width: 100%;
    background-color: #f0f0f0;
  }

  nav {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  nav a {
    text-decoration: none;
    color: #000;
  }

  footer {
    margin-top: 20px;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }

  select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }

  div {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #000;
  }

  button {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #000;
  }

  button:hover {
    background-color: #f0f0f0;
  }
</style>