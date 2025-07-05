<template>
<div id="container_project-details" class="project-details">

        <p id="p_project-details-title-text" class="project-details-title-text col-xs-6 col-s-6 col-md-4 col-lg-4 col-no-gutter"> 
            {{title}}
        </p>

        <p id="p_project-details-text" class="project-details-text col-xs-6 col-s-6 col-md-8 col-lg-8 col-no-gutter"> 
            {{details}}
        </p>

</div>

</template>

<script>


export default {
  layout: 'arielle-cerini',
  name: 'ProjectDetails',
   props: {
       title: String,
       details: String
   },
}
</script>
<style lang="scss" scoped>
.project-details-title-text{
    font-size: 1.125rem; 
    color: $color-neutral-tints-60;
    height: fit-content;
}

.project-details-text{
    font-size: 1.125rem; 
    color: $color-primary;
    height: fit-content;
}

.project-details{
    display: flex; 
    flex-direction: row; 
    gap: 8px; 
}


</style>