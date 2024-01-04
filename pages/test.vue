<template>
    <section class="wrapper">

        <div class="row">
        <menu-icon-button/>
          
         
        </div>
     
    </section>
  </template>
  
  <script>
  import MenuIconButton from "../components/layout/navigation/menu-icon-button.vue";


  export default {
    name: 'Test',
    components: {
        MenuIconButton
      },
    data () {
        return {
            isVisible: false
        }
      }
  }
  </script>
  
  
  <style lang="scss" scoped>
  
 
  </style>