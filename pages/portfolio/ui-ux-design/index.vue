<template>


  <div class="category-page" style="width: inherit">
    <section class="row not-full-width  padding-bottom-base padding-top-md" id="section_page-title" > 
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h1>UI/UX Design</h1></div>
    </section> 

    
      <section id="section_project-grid" class="not-full-width">

          <plain-cards prefix="portfolo" :slug="slug" :posts="posts"></plain-cards>
      </section>
  </div>
</template>

<script>

import PlainCards from '@/components/base-ui-elements/cards/PlainCards';


export default {
  layout: 'core-layout',
  name: 'ui-ux-design',
  components: {
    PlainCards
    
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
        .filter((post) => post.attributes.category == 'ui-ux-design')
      return {
        posts: imports
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
  background: rgba(235, 245, 255, 0.61);
  box-shadow: 3px 0px 12px rgba(0, 0, 0, 0.16);
  display: inline-block; 
  min-height: 100vh;
}

.header-content{
  margin-top: 9.0em;
    margin-left: 14%;


}

.not-full-width{
    max-width: 1300px; 
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

img{
  width: 100%;
  bottom: 0;
}




</style>