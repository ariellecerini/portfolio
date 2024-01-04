<template>

<button class="btn" :alt="'${alt}'" label="testing">{{label}}</button>


</template>

<script>



export default {
  
  name: 'Buttons',
  props: {
       label: String,
       alt: String
   },
 
  }
</script>


<style lang="scss">



</style>