<template>
    <div style="width: 100%;">
            <section class="row not-full-width">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <project-title :title="`${post.attributes.title}`"/> 
                            <project-subtitle :subtitle="`${post.attributes.client}`"/>
                            <div class="row col-no-gutter margin-top-base">
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-no-gutter">
                                            <project-timeframe :timeframeStart="`${post.attributes.dateStart}`" :timeframeEnd="`${post.attributes.dateEnd}`"/>
                                        </div> 
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-no-gutter">
                                            <NuxtLink to="/Portfolio/ui-ux-design"><project-type :text="`${post.attributes.category}`"/></NuxtLink>
                                        </div> 
                                </div>
                        </div>

                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-top-s">
                                                <project-button :buttonHref="`${post.attributes.link}`" :buttonText="`${post.attributes.linkText}`" :buttonTitle="`${post.attributes.linkTitle}`" />
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

                            <div class="col-xs-12 col-s-12 col-md-4 col-lg-4">
                                    <project-description :description="`${post.attributes.description}`" />
                                </div>
                        </div>


                </section>

        <section class="section-primary-05 full-width-background" style="background: url('../../section-primary-05.svg'); background-position: 0 0; background-size: 40% auto;  background-repeat: no-repeat;">

                <div class="not-full-width row">
                
                        <div class="container page-content">
                                <img :src="post.attributes.featuredImage" />
                            </div>
                        <div class="container page-content" v-for="cModule in cModules" v-bind:key="cModule.slug" :cModule="cModule" :class="`${ cModule.class }`" :style="`${ cModule.style }`">
                                <h3> {{cModule.header}} </h3>
                                <div v-if="`${ cModule.item }`== 'image'">
                                        <img :src="`${ cModule.image }`" style="width:100%;" />
                                    </div>

                                <div v-if="`${ cModule.item }`== 'text'" style="margin-top: auto; margin-bottom: auto;">
                                        <div v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                                                <p :class="content.class" :style="content.style">{{content.text}}</p>
                                            </div>
                                    </div>

                                <div v-if="`${ cModule.item }`== 'button'" >
                                        <div style="width: 100%; padding:0;" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                                                <button-link :href="`${content.src}`" :text="`${content.text}`"/>
                                            </div>
                                    </div> 

                                <div v-if="`${ cModule.item }`== 'iframe'" SameSite="Strict">
                                        <div style="margin: auto; width: 100%;" :class= "cModule.class" v-for="content in cModule.inner" v-bind:key="content.slug" :content="content">
                                                <iframe style="padding-top: 0;" :style="content.style" :src="content" frameborder="0" allowfullscreen></iframe>
                                            </div>            
                                    </div>   

                                <div v-if="`${ cModule.item }`== 'pdf-grid'" >
                                        <div v-for="content in cModule.inner.contents" v-bind:key="content.slug" :content="content">
                                                <div class="row">
                                                        <div :class="content.col" v-for="image in content.images" v-bind:key="image.slug" :image="image">
                                                                <a :href="image"><embed :src="image" style="padding-top: 0; padding-bottom: 0;" class = "document-pdf" type="application/pdf"></a>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>  
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
  name: 'ui-ux-design',
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

.desktop-holder iframe{
        height: 650px; 
        width: 100%; 
            border: #e6e6e6 2px solid;
    border-radius: 12px;

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