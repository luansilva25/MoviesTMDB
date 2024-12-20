<script setup>
import GlobalHeader from './components/global/GlobalHeader.vue';


</script>
<template>
  <v-app>
    <GlobalHeader/>
    <v-main>
      <router-view />
    </v-main>
    <VFooter class="d-flex justify-center align-center pa-10 border border-white">todos os direitos reservados &copy; - disneyVerse - 2024</VFooter>
  </v-app>
</template>
