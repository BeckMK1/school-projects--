<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <contactInfo></contactInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import contactInfo from '../components/contactInfo.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    contactInfo
  }
}
</script>
