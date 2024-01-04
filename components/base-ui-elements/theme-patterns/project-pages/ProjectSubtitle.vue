<template>
<div id="container_project-subtitle" class="project-subtitle">

        <h2 id="h2_project-subtitle-text" class="project-subtitle-text"> 
            {{subtitle}}
        </h2>
</div>

</template>

<script>


export default {
  name: 'ProjectSubTitle',
   props: {
       subtitle: String
   },
}
</script>
<style lang="scss">
h2.project-subtitle-text{
    font-size: 1.75rem; 
    color: $color-tertiary-shades-80;
    font-weight: 600; 
    margin: 0; 

}


</style>