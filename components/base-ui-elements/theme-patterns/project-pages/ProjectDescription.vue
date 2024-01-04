<template>
<div id="container_project-description" class="project-description">

    <p id="p_project-description-text" class="project-description-text"> 
    {{description}}
</p>

</div>

</template>

<script>


export default {
  layout: 'arielle-cerini',
  name: 'ProjectDescription',
   props: {
       description: String
   },
}
</script>
<style lang="scss">


</style>