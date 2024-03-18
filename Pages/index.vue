<script setup lang="ts">
import About from "~/composents/about.vue";
const {find} =useStrapi()

const {data, error} = await useAsyncData('rameur',async ()=> {
  return await find('rameur')
})
</script>

<template>
  <h1>hello word</h1>
  <about/>
</template>

<style scoped>

</style>