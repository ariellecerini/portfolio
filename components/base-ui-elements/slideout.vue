<template> 
    <div v-if="`${ isOpen }`" id="container_slideout" class="slideout row" >
        <p id="p_slideout-header" class="slideout-header col-xs-12 col-sm-12 col-md-12 col-lg-12">{{title}}</p>
       <slot></slot>
    </div>
</template> 

<script> 

export default {
    name: 'slideout',
    props: {
      isOpen: Boolean,
      title: String
    }
  }


</script>

<style>

.slideout{
  width: 100%; 
  
}



</style>