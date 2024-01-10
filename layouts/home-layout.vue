<template>
    <div id="container_page-wrapper" class="homepage full-width row col-lg-12 col-md-12 col-sm-12 col-xs-12 col-no-gutter">
    
        <div id="page-header-section" class="full-width row col-lg-12 col-md-12 col-sm-12 col-xs-12" style="z-index: 1;">

            <div id="left-col" class="col-lg-10 col-md-10 col-sm-10 col-xs-10" style="display: flex; flex-direction: column; justify-content: center;">

                <div id="header-bar" class="display-flex flex-direction-row justify-content-space-between">

                  <div id="container_logo" class="hide-xs hide-sm show-md show-lg">
                    <img id="img_logo" class="logo" src="/logo.png" />
                  </div>

                </div>
            </div>

            <div id="right-col" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-no-gutter">
                <div id="header-bar" class="display-flex flex-direction-row justify-content-space-between full-width justify-content-flex-end">
                  <menu-bar/>
                </div>
            </div>
        </div>

        <main class="row">

            <nuxt />

        </main>

        <footer>

        </footer>

    </div>    

</template>

<script>
import MenuBar from "../components/layout/navigation/menu-bar.vue";



export default {
 components: {
            MenuBar
    },

  methods: {
      scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("page-header-section").classList.remove("sub-page");
        } else {
          document.getElementById("page-header-section").classList.remove("sub-page");
        }
      }
          
  },
  mounted () {
    document.addEventListener('scroll', this.scrollFunction)
  },
}
</script>


<style lang="scss">
html{
    scroll-behavior: smooth;
}

.logo{
  width: 100%; 
  max-width: 140px; 
}

img.logo{
  width: 100%;
}
.page-header-content{
  display: flex; 
  justify-content: space-between; 
}

main{
  width: 100vw;
}

.home-header{
  position: absolute; 
}

.homepage{
  background-color: #FEFFF2;
   background-image: url('/site-graphics/background-vector.png');
  background-repeat: no-repeat;
  background-size: 70%;
  background-position-x: 30vw;
  background-position-y: -30vh;
}

</style>


