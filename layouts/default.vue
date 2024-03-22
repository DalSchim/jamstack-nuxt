<script setup lang="ts">
</script>

<template>
  <main role="main">
    <header>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
      </nav>
    </header>
    <slot />
    <footer>
      <p>&copy; 2021</p>
    </footer>
  </main>
</template>

<style scoped>
*{
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

</style>