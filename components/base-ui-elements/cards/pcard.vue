
<template>

       <div class="cards-container col-xs-12 col-sm-6 col-md-4 col-lg-4 reveal">

            <div class="card-body">
                <div class="card-figure">
                    <img
                        style="display: inline-block;"
                        :src="`${post.attributes.image}`"
                        class="img"
                    />
                </div>

                <div class="card-text" >

                   <h5 class="card-title" :class="`text-${ct} display-4 text-uppercase`">
                               {{ post.attributes.title }}
                   </h5>
                   <div class="tags">
                        <h6 class="category text-warning" v-for="tag in tags" v-if="tags.length > 0">
                            
                                    {{ tag }}
        
                        </h6>
                    </div>
               
                </div>

               <div class="card-footer">
                    <a :href = "`/portfolio/${post.attributes.category}/${post.slug}`">
                    </a>
                </div>

            </div>

        </div>
</template>


<script>
 export default {
    props: {
       post: Object,
       prefix: String,
       ct: String
   },
   computed: {
       tags () {
          return this.post.attributes.tags ? this.post.attributes.tags.split(',') : []
       }
   }

 }
</script>
<style scoped>
.tags{
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    margin-top: 16px;  
}
.card-title{
   margin-bottom: 0;
}
.card-footer{
   margin-top: 0;
}

.card-text{
    padding: 2% 0; 
}
</style>
