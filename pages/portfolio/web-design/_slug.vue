<template>
    <div style="width: 100%;">
            <section class="row not-full-width">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <project-title :title="`${post.attributes.title}`"/> 
                            <project-subtitle :subtitle="`${post.attributes.client}`"/>
                            <div class="row col-no-gutter margin-top-base">
                                  
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-no-gutter">
                                            <NuxtLink to="/portfolio/web-design"><project-type :text="`${post.attributes.category}`"/></NuxtLink>
                                        </div> 
                                </div>
                        </div>

                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-no-gutter">
                            <project-button :href="`${post.attributes.url}`" buttonText="View Website" />
                        </div>
                    <div class="row"> 
                            <div class="col-xs-12 col-s-12 col-md-8 col-lg-8  col-no-gutter">
                                    <div class="row">
                                            <div class="col-xs-12 col-s-12 col-md-4 col-lg-4">
                                                    <project-details  title="Position" :details="`${post.attributes.position}`"/>
                                                </div>
                                            <div class="col-xs-12 col-s-12 col-md-4 col-lg-4">
                                                    <project-details  title="Role" :details="`${post.attributes.role}`"/>
                                                </div> 

                                            <div class="col-xs-12 col-s-12 col-md-4 col-lg-4">
                                                    <project-details  title="Tools & Technology" :details="`${post.attributes.tools}`"/>

                                                </div>

                                        </div>
                                </div>

                           
                        </div>


                </section>

        <section class="section-primary-05 full-width-background" style="padding-top: 0;">

                <div class="not-full-width row" style="padding: 0;">
                        
                                <img :src="post.attributes.featuredImage" />
                          
                    </div>

            </section>              

    </div>

</template>

<script>
import ProjectType from '~/components/base-ui-elements/Information/Tags/ProjectType.vue'
import Buttons from '~/components/base-ui-elements/core/buttons.vue'
import ProjectDescription from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectDescription.vue'
import ProjectDetails from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectDetails.vue'
import ProjectTitle from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectTitle.vue'
import ProjectSubtitle from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectSubtitle.vue'
import ProjectTimeframe from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectTimeframe.vue'
import ProjectButton from '~/components/base-ui-elements/theme-patterns/project-pages/ProjectButton.vue'
import ButtonLink from '~/components/base-ui-elements/core/button-link.vue'



export default {
  layout: 'core-layout',
  name: 'website-design',
  components: {
      ProjectType,
      Buttons,
      ProjectDescription, 
      ProjectDetails, 
      ProjectSubtitle,
      ProjectTitle, 
      ProjectTimeframe,
      ProjectButton,
      ButtonLink

    },
  async asyncData({ params }) {
    try {
      let post = await import(`~/posts/${params.slug}.md`)
      return {
        post
      }
    } catch (err) {
      return false
    }
  },
  computed: {
        cModules() {
          return this.post.attributes.cModules
        },
        tags () {
           return this.post.attributes.media ? this.post.attributes.media.split('|') : []
        }
    }
}
</script>
<style scoped>
.section-primary-05{
    
}

.full-width-background{
    margin: auto; 
}

.not-full-width{
    max-width: 1300px; 
    margin: auto; 
}

.phoneHolder  iframe{
    height: 650px;
    margin: auto;

}


.design-system  iframe{
    width: 100%;
    height: 650px;

}

.design-system{ 
     background: #f4f4f4;
    text-align: center; 
    margin-bottom: 24px; 
}

.phoneHolder{
    background: #f4f4f4;
    text-align: center; 
}
</style>