<script setup lang="ts">
</script>

<template>
  <main role="main">
    <header>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link>
    </header>
    <slot/>
    <footer>
      <p>&copy; 2021</p>
    </footer>
  </main>
</template>

<style scoped>

</style>