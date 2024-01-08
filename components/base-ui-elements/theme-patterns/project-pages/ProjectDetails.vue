<template>
<div id="container_project-details" class="project-details">
    <div id="container_project-details-title" class="project-details-title padding-bottom-base">

        <p id="p_project-details-title-text" class="project-details-title-text"> 
            {{title}}
        </p>
    </div>

    <div id="container_project-details" class="project-details">

        <p id="p_project-details-text" class="project-details-text"> 
            {{details}}
        </p>
    </div>

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

}

.project-details-text{
    font-size: 1.25rem; 
    color: $color-primary;

}

.project-details{
    z-index: -1px; 
    position: relative;
}


</style>