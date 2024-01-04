<template>
<div id="container_project-timeframe" class="project-timeframe">

        <h3 id="h3_project-timeframe-text" class="project-timeframe-text"> 
            {{timeframeStart}} - {{timeframeEnd}}
        </h3>
</div>

</template>

<script>


export default {
  name: 'ProjectTimeframe',
   props: {
       timeframeStart: String,
       timeframeEnd: String,

   },
}
</script>
<style lang="scss">
h3.project-timeframe-text{
    font-size: 1.25rem; 
    color: $color-primary;
    font-weight: 600; 
    margin: 0; 
    line-height: 2.0rem; 

}


</style>