<template>


    <div id="container_project-tag" class="project-tag">

        <p id="p_project-type" class="project-type">{{ text }}</p>

    </div>

</template>

<script>



export default {
  
  name: 'ProjectType',
   props: {
       text: String
   },
 
  }
</script>


<style lang="scss">

.project-tag{
    background: $color-primary-tints-10;
    border-radius: 4px;
    padding: 8px;
    color: $color-primary;
    width: fit-content;
    text-transform: uppercase;
}

.project-type{
    margin: 0; 
}





</style>