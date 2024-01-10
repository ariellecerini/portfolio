<template> 
        <div id="navbar" style="visibility: hidden;" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 menu-drawer" > 
                        <div class="row" style="padding-bottom: 16px;">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter">
                                        <p style="font-size: 1.65rem; padding-bottom: 8px;">Arielle Cerini, MFA, PhD</p>
                                        <div class="subtitle-banner"> 
                                                <p class="smallest-body-text bold">Creative Problem Solver & Strategic Thinker</p>
                                                </div> 
                                        </div>
                                </div>
                        <div class="row padding-bottom-base" >
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-md">
                                        <p class="section-title">Design Portfolio</p>
                                        <div class="link-items row" style="padding-top: 8px;">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><NuxtLink to="/portfolio/ui-ux-design" class="nav-link">UI/UX Design</NuxtLink></div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><NuxtLink to="/portfolio/communications-design" class="nav-link">Communications Design</NuxtLink></div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><NuxtLink to="/portfolio/design-research" class="nav-link">Design Research</NuxtLink></div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><NuxtLink to="/portfolio/web-design" class="nav-link">Web Design</NuxtLink></div>

                                                </div>
                                        </div> 
                                </div>
                        <div class="row padding-bottom-base">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter">
                                        <p class="section-title">Web Applications</p>
                                        <div class="link-items row" style="padding-top: 8px;">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><a href="" class="nav-link">Color Alchemy</a></div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><a href="https://digitalpenmanship.app" class="nav-link">Digital Penmanship</a></div>
                                                </div>
                                        </div>
                                </div>
                        <div class="row padding-bottom-base">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-base">
                                        <p class="section-title">Social Media</p>
                                        <div class="link-items row" style="padding-top: 8px;">
                                               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"> <a href="https://www.instagram.com/ariellecerini/" target="_blank" class="nav-link">Instagram</a></div>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><a href="https://www.linkedin.com/in/arielle-cerini-mfa-phd-66943583/" target="_blank" class="nav-link">Linkedin</a></div>
                                                </div>
                                        </div>
                                </div>

                        <div class="row padding-bottom-base">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-base">
                                        <p class="section-title">Application Materials</p>
                                        <div class="link-items row" style="padding-top: 8px;">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"><NuxtLink to="/Arielle_Cerini.pdf" target="_blank" class="nav-link">Resume</NuxtLink></div>
                                               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base"> <NuxtLink to="/HEALS-Case-Study.pdf" target="_blank" class="nav-link">HEALS Case Study</NuxtLink></div>
                                                
                                                </div>
                                        </div>
                                </div>
                </div>
</template>
<script> 
export default {
    name: 'MenuDrawer',
    props: {
      visibility: String
      }
}
</script> 

<style lang="scss">

        .menu-drawer{
               box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.16);
               position: absolute; 
               border-right: 24px solid $color-primary-tints-10;
               margin-top: 0;
               display: unset; 
               background: white;
               z-index: 100; 
               right:0;
               max-height: 85vh; 
               overflow-y: scroll;
               padding: 2.3em;
        }
        .nav-link{
                padding: 4px; 
                font-size: .95rem;
                color: $color-primary;
                border-radius: 4px;
        }

        .nav-link:hover{
                background: $color-primary-tints-10;
        }


        .section-title{
                font-weight: 700; 
                font-size: 1.175rem;
                color: $color-primary;
        }


        .subtitle-banner{
                width: 100%; 
                background: $color-tertiary-tints-30; 
                padding: 8px; 

        }

        .menu-content{
                max-height: 90vh; 
                overflow-y: scroll;
        }
</style>
