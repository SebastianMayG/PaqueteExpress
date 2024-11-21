<script setup>

import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="body">

    <NavBar></NavBar>
    <router-view></router-view>
    <FooterComp></FooterComp>

  </div>

</template>

<style scoped>

</style>
