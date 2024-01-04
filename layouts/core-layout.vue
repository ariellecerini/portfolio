<template>
    <div id="container_page-wrapper" class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter">
            <section id="section_header" class="row page-header">
                    <div id="container_logo" class="hide-xs hide-s show-md show-lg col-md-2 col-lg-2 col-no-gutter">
                        <NuxtLink to="/" > <img id="img_logo" class="logo" src="/logo.png" /></NuxtLink>
                        </div>
                    <div id="container_menu" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-no-gutter">
                        <menu-bar/>
                        </div>
                </section>
      
            <main class="row core">
                <nuxt />
                </main>

            <footer>
                </footer>
            
            </div>

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


<style lang="scss" scoped>
.page-header{
    padding:0; 
    position: fixed; 
    background: #FAFDFF;
    box-shadow: 3px 0px 12px rgba(0, 0, 0, 0.16);
    justify-content: space-between;
}
html{
    scroll-behavior: smooth;
}

.logo{
    max-width: 120px;
    padding: 24px 48px;
}

main.core{
    margin-top: 96px; 
}
div.logo{
  width: 100%; 
  max-width: 120px;
    padding: 24px 48px;
}

img.logo{
  width: 100%;
}

main{

}

</style>


