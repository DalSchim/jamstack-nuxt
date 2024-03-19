<script setup lang="ts">
import type { rameur } from '~/models/rameur.model'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: rameur, pending } = useAsyncData('rameur',
    () => findOne<{ data: rameur }>(`rameurs/${route.params.slug}`
))
</script>


<template>
  <h1>Oui</h1>
  <pre>{{ rameur }}</pre>
</template>

<style scoped></style>