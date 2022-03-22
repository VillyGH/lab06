<template>
  <div id="app">
    <WelcomeMessageVue initialMessage="J'aime bien Vue.js :-)" />
    <AdminDashboard v-bind:isAdmin="false"></AdminDashboard>
  </div>
</template>

<script>
import WelcomeMessageVue from './components/WelcomeMessage.vue'
import AdminDashboard from './components/AdminDashboard.vue'

export default {
  name: 'App',
  components: {
    WelcomeMessageVue,
    AdminDashboard
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
