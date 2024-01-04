<template>
<div id="container_project-details" class="project-details padding-top-base">
    <div id="container_project-details-title" class="project-details-title padding-bottom-base">

        <p id="p_project-details-title-text" class="project-details-title-text" > 
            {{buttonTitle}}
        </p>
    </div>

    <div id="container_project-details" class="project-details">

        <button-link id="button_main-project-link" :text="`${buttonText}`" :href="`${buttonHref}`"/> 
        </p>
    </div>

</div>

</template>

<script>
import ButtonLink from '~/components/base-ui-elements/core/button-link.vue'


export default {

  name: 'ProjectDetails',
  components: {
    ButtonLink
    },
   props: {
       buttonTitle: String,
       buttonText: String,
       buttonHref: String
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



</style>