<template>
  <div class="about">
    <h1>This is an about page</h1>
    <userList></userList>
    <div id="vm">
            <input v-model="newUser.name" placeholder="name">
            <input v-model="newUser.mail" placeholder="mail">
            <input v-model="newUser.postion" placeholder="postion">
            <input v-model="newUser.img" placeholder="image Url">
            <button type="button" v-on:click="addNewUser">add</button>
            </div>
  </div>
</template>

<script>
import userList from '../components/userList.vue'
export default {
  components: {
    userList
  }
}
</script>
