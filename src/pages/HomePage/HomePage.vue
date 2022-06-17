<template>
   <div class="homepage">
      <h1>{{ msg }}</h1>
      <h2>Hello World из homepages</h2>
      <wsHeader/>
   </div>
</template>


<script>
   import wsHeader from '@/components/ws-header/ws-header.vue';
   export default {
   name: 'HomePage',
       components: {
        wsHeader
  },
   data () {
      return {
         msg: 'Welcome to Your HomePage'
      }
   }
   }
</script>

<style scoped>
   h1, h2 {
   font-weight: normal;
   }
   ul {
   list-style-type: none;
   padding: 0;
   }
   li {
   display: inline-block;
   margin: 0 10px;
   }
   a {
   color: #b94813;
   }
</style>