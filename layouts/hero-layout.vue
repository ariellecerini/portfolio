<template>
    <div id="container_page-wrapper" class="row">
        <div class="myHeader" style="padding: 0;">
                <div id="container_page-header-content" class="page-header-content">
                    <div id="container_logo" class="hide-xs hide-sm show-md show-lg" style="padding: 24px 48px;">
                        <img id="img_logo" class="logo" src="/logo.png" />
                    </div>

              <div id="container_menu" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-no-gutter">
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
    }
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
  widht: 100vw;
}
</style>


