<template>



    <div id="container_slider-card" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div id="container_card-wrapper" class="card-wrapper">
            <div id="container_img-holder" class="img-holder">
                <img alt="proj-img" :src="`${post.attributes.image}`"/>
              </div>

            <div class="row padding-base">
                <div class="col-xs-6 col-sm-6 col-md-12 col-lg-12" style="padding-bottom: 0px; padding-top: 0px;">
                    <p id="p_project-name" class="project-name margin-none">{{ post.attributes.title }}</p>
                  </div>

                  <!--

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p id="p_project-name" class="project-name margin-none">{{ tag }}</p>
                  </div>
                  -->
            

                <div class="card-footer col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a :href = "`/portfolio/${post.attributes.category}/${post.slug}`">View Project
                    </a>
                  </div>
              </div> 
          </div> 
      </div>
  </template>

<script>



export default {
  
  name: 'SliderCard',
   props: {
       post: Object,
       prefix: String,
       ct: String
   },
 
  }
</script>


<style lang="scss">

.card-wrapper{
    border-radius: 8px;
    box-shadow: 0px 0px 7px 0px #00000029;
    border: solid 1px $color-neutral-tints-10;
    padding: 0;
    overflow: hide;
}

.img-holder > img{
    border-radius: $space-s $space-s 0 0;
    overflow: hide; 
}

img{
  width: 100%;
  bottom: 0;
}




</style>