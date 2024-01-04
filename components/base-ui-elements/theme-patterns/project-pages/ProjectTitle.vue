<template>
<div id="container_project-title" class="project-title">

        <h1 id="h1_project-title-text" class="project-title-text"> 
            {{title}}
        </h1>
</div>

</template>

<script>


export default {
  name: 'ProjectTitle',
   props: {
       title: String
   },
}
</script>
<style lang="scss">
h1.project-title-text{
    font-size: 3.0rem; 
    color: $color-primary;
    font-weight: 700; 
    margin: 0 0 1.0rem 0; 

}



</style>