<template>
    <div id="container_circle-container" class="circle-container" :class="`${borderclass}`">

    <slot/>
    </div> 
    


</template>


<script>
export default {
props: {
    borderclass: String
     
  }

}
</script>


<style lang="scss">
.circle-container{
    border: solid;
    border-radius: 100%;
    width: 44px;
    height: 44px;
    display: flex;

}

</style>