<template>
    <section>
        <article v-for="user in users" :key="user.name">
            <h3>{{user.name}}</h3>
            <a :href="`mailTo:${user.mail}`">{{user.mail}}</a>
        </article>
    </section>
</template>
<script>
const vm = new Vue ({
  el: '#vm',
  methods: {
    addNewUser () {
      this.users.push(this.newUser)
      this.newUser = {
        name: '',
        mail: '',
        position: '',
        img: ''
      }
    }
  }
})
export default {
  data () {
    return {
      users: [
        { name: 'bruger1', mail: 'bruger1@mail.com', position: 1, img: '' },
        { name: 'bruger2', mail: 'bruger2@mail.com', position: 1, img: '' },
        { name: 'bruger3', mail: 'bruger3@mail.com', position: 1, img: '' }
      ]
    }
  }
}
</script>

<style scoped>
 section{
     display: grid;
     grid-template-columns: 33.33% 33.33% 33.33%;
 }
</style>
