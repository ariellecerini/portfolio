<template>


  <div class="home" style="width: inherit">




      <section id="section_header" class="row full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <div class="header row full-width col-lg-12 col-md-12 col-sm-12 col-xs-12" >
          <div id="container_header-content" class="header-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12" >

            <div id="header-text-wrapper" class="header-content full-width row col-lg-12 col-md-12 col-sm-12 col-xs-12 col-no-gutter" style="padding-top: 1.5em;">
          
                  <p id="paragraph_hero-text" class="hero-text col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                    <span id="span_display-text" class="display-text">
                    hello,</span><br/>i'm arielle cerini<span id="span_tertiary-text" class="tertiary-text">.</span>
                  </p>
                  
                  <p id="paragraph_sub-header" class="sub-header col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  Creative Problem Solver 
                  <br/><span id="span_tertiary-text" class="tertiary-text">&</span> Strategic Thinker
                  </p>
            </div>

            <div id="header-action" class="full-width row col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 24px;">

                  <div id="container_futurework" class="future-work-svg hide-mobile ">
                      <a href="#section_project-grid"> <img src="/labels/ViewWork_Label.svg"/></a>
                  </div>
            
            </div>

          </div>
        </div>
        </section>  
    
      <section id="section_project-grid" class="not-full-width">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2>Featured Projects</h2></div>
          <featured-plain prefix="portfolo" :slug="slug" :posts="features" :featured="true"></featured-plain>
      </section>

      <section id="section_project-grid" class="not-full-width hide-mobile">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2>All Work</h2></div>

          <plain-cards prefix="portfolo" :slug="slug" :posts="posts"></plain-cards>
      </section>
  </div>
</template>

<script>

import PlainCards from '../components/base-ui-elements/cards/PlainCards';
import FeaturedPlain from '../components/base-ui-elements/cards/FeaturedPlain';


export default {
  layout: 'home-layout',
  name: 'Home',
  components: {
    PlainCards,
    FeaturedPlain
    
    },
  props: ['slug'],
    async asyncData() {
      const resolve = require.context('~/posts/', true, /\.md$/)
      const imports = resolve
        .keys()
        .map((key) => {
          const [, slug] = key.match(/\/(.+)\.md$/)
          return Object.assign(resolve(key), { slug })
        })
        .filter((post) => post.attributes.type == 'portfolio')

      const featured = imports.filter((post) => post.attributes.display == 'featured')


      return {
        posts: imports,
        features: featured
      }
    }, 
    data() {
      return {
      visible: true
      }
    },
    methods: {
  
   


    }
  }
</script>


<style lang="scss" scoped>

.header{
  height: 100%;
  width: 100%; 
 
}

.home .not-full-width{
    margin: auto; 
}


.side-bar-col{
  height: 100vh; 
  justify-content: flex-end; 
  flex-direction: column;
  display: flex;
}

.hero-text{
  color: $color-primary; 
  font-size: 5.0rem; 
  padding-bottom: 0.625rem; 
  font-weight: 600; 
  margin: 0;
  line-height: 6rem; 
}

.project-grid{
  padding-top: 64px; 
}

.tertiary-text{
  color: $color-tertiary-shades-80; 
}

.display-text{
  color: $color-tertiary-shades-80; 
  font-size: 7.0rem; 
}

.sub-header{
  line-height: 2.875rem; 
  font-size: 2.25rem; 
  padding-bottom: 0.625rem; 
  color: $color-primary; 
  font-weight: 500;

}

.future-work-svg{
  width: 75%; 
  max-width: 155px; 
}


.about-me-svg{
    width: 200px;
    margin-right: 0px;
    margin-left: auto;
    margin-top: 0;
}

img{
  width: 100%;
  bottom: 0;
}

</style>