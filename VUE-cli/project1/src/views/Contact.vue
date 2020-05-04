<template>
  <div class="contact">
<h1>contact page</h1>
<contact-info></contact-info>
<h2>Users</h2>
<userList></userList>
  </div>
</template>

<script>
import contactInfo from '../components/contactInfo.vue'
import userList from '../components/userList.vue'
export default {
  name: 'contact',
  components: {
    contactInfo,
    userList
  }
}
</script>
