<template>

<div id="container_page-wrapper" class="display-flex justify-content-space-between width-100vw flex-direction-column">
    
        <div id="page-header-section sub-page" class="sub-page display-flex vertical-align-middle full-width align-items-center padding-top-base padding-left-xl">

            <div id="left-col" class="full-width col-xs-12 col-sm-12 col-md-8 col-lg-10 col-no-gutter">

                <div id="header-bar" class="display-flex flex-direction-row justify-content-space-between">

                  <div id="container_logo" class="hide-xs hide-s show-md show-lg col-md-2 col-lg-2 col-no-gutter">
                        <NuxtLink to="/" > <img id="img_logo" class="logo" src="/logo.png" /></NuxtLink>
                        </div>
                </div>
            </div>

            <div id="right-col" class="hide-xs hide-s show-md show-lg col-md-4 col-lg-2 col-no-gutter">
                <div id="header-bar" class="display-flex flex-direction-row justify-content-space-between full-width justify-content-flex-end">
                  <menu-bar/>
                </div>
            </div>
        </div>

        <main class="row" style="padding-top: 80px;">

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
}

main.core{
    margin-top: 96px; 
}
div.logo{
  width: 100%; 
  max-width: 120px;
  
}

img.logo{
  width: 100%;
}

main{

}

</style>


