<template>
    <div class="section section-plain-cards">
        
            <!--     *********    PLAIN BLOG CARDS      *********      -->
            <client-only>
              <div class="card-grid row">
                    <featured-slider-card v-for="post in posts" v-bind:key="post.slug" :prefix="prefix" :post="post" :ct="post.attributes.category"/>

                    
                   
                </div>
            </client-only>
                
            </div>
        </div>
        <!--     *********    END PLAIN BLOG CARDS      *********      -->
       
   
</template>
<script>
    import FeaturedSliderCard from './FeaturedSliderCard'; 
  export default {
    components: {
      FeaturedSliderCard
    },
     props: {
    prefix: String,
    slug: String,
    posts: Array, 
    featured: Boolean
  }
  }
</script>
<style>

.card-grid{

}
</style>
