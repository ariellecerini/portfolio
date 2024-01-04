<template> 
    <div>

        <ul class="top-icons" >

                <li class="nav-item" aria-labelledby="sections-heading" >
                   <div style="display: flex; justify-content: space-between;"> 
                        <button id="project-menu-toggle" class="dropdown-arrow" v-on:click="menuToggle('project-menu');"
                            data-toggle="dropdown" 
                            aria-controls="project-menu" 
                            role="button" 
                            aria-haspopup="true"> 
                            <i style="margin: auto;" class="fas fa-bars"></i>
                        </button>
                    </div>
                </li>

            

                 <li class="nav-item" style="display: flex; justify-content: center; flex-direction: column;">
                    <div> 
                        <a class="nav-link nav-link-icon" href="https://www.instagram.com/ariellecerini" target="_blank" rel="noopener" data-toggle="tooltip" title="View my artwork">
                            <i class="fab fa-instagram" style="font-size: 24px"></i>
                        </a>
                    </div>
                </li>

            </ul>

            <div id="project-menu" class="dropdown-menu-inner">
                <ul aria-labelledby="project-menu-toggle" class="main-menu">
                    <li role="menuitem" class="menu-item">

                        
                        <nuxt-link to="/portfolio/design-research"
                        class="media d-flex align-items-center">
                            <div class="media-body ml-2">
                                <p class="heading line-item-label mb-md-1 line-item-label"><b>Design Research</b></p>
                                <p class="description d-none d-md-inline-block mb-0">View most recent Design Research Projects</p>
                            </div>
                        </nuxt-link>
                    </li>
                    <li role="menuitem" class="menu-item">
                        <nuxt-link to="/portfolio/web-design"
                        class="media d-flex align-items-center" >
                            <div class="media-body ml-2">
                                <p class="heading line-item-label mb-md-1" ><b>Website Design</b></p>
                                <p class="description d-none d-md-inline-block mb-0">Archive of some of the websites that I have worked on.</p>
                            </div>
                        </nuxt-link>
                    </li>
                    <li role="menuitem" class="menu-item">
                        <nuxt-link to="/portfolio/graphic-design"
                            class="media d-flex align-items-center">
                            <div class="media-body ml-2">
                                <p class="heading line-item-label mb-md-1" ><b>Graphic Design</b></p>
                                <p class="description d-none d-md-inline-block mb-0">Archive of various graphic design projects.</p>
                            </div>
                        </nuxt-link>
                    </li>

                    <li role="menuitem" style="padding: 4% 10px;"  >
                        <p class="heading line-item-label mb-md-1 sub-menu-label" style="var(--color-primary); font-size: 1.104em; line-height: 1.61em; font-weight: bold;">Web Applications</p>

                        <ul class="sub-menu" style="padding-inline-start: 0px;">
                            <li role="menuitem">
                                <a href="http://coloralchemy.acerinidesigns.com/"
                                    class="media d-flex align-items-center nav-link"
                                    target="_blank">
                            
                                    <div class="media-body">
                                        <p class="heading line-item-label mb-md-1" style="font-size:0.9rem !important;"><b>Color Alchemy</b></p>
                                        <p class="description d-none d-md-inline-block mb-0" style="font-size:0.9rem !important;">Web application to simulate color mixing properties in design.</p>
                                    </div>
                                </a>
                            </li>

                            <li role="menuitem">
                                <a href="https://digitalpenmanship.app"
                                    class="media d-flex align-items-center nav-link"
                                    target="_blank">
                            
                                    <div class="media-body">
                                        <p class="heading line-item-label mb-md-1" style="font-size:0.9rem !important;"><b>Digital Penmanship</b></p>
                                        <p class="description d-none d-md-inline-block mb-0" style="font-size:0.9rem !important;">Application created as partial fulfillment of my doctoral dissertation.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li role="menuitem" style="padding: 4% 10px; font-weight: bold;">
                        <p class="heading line-item-label mb-md-1 sub-menu-label" style="var(--color-primary); font-weight: bold; font-size: 1.104em; line-height: 1.61em;">Research</p>
                        <ul class="sub-menu" style="padding-inline-start: 0px;">
                            <li role="menuitem">

                                <a href="https://issuu.com/acerinidesigns/docs/hacking_for_intimacy_3"
                                    class="media d-flex align-items-center nav-link"
                                    target="_blank">
                                    
                                        <div class="media-body">
                                            <p class="heading line-item-label mb-md-1" style="font-size:0.9rem !important;"><b>MFA Thesis Book</b></p>
                                        </div>
                                    </a>
                            </li>


                            <li role="menuitem">
                                <a href="https://issuu.com/acerinidesigns/docs/book_single_pages_opt"
                                    class="media d-flex align-items-center nav-link"
                                    target="_blank">
                                    <div class="media-body">
                                        <p class="heading line-item-label mb-md-1" style="font-size:0.9rem !important;"><b>Doctoral Candidacy Exam</b></p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li role="menuitem" style="padding: 4% 10px; font-weight: bold;">
                        <p class="heading line-item-label mb-md-1 sub-menu-label" style="var(--color-primary); font-weight: bold;">Contact Information</p>
                        <ul class="sub-menu" style="padding-inline-start: 0px;">
                            <li role="menuitem">
                                <a href="mailto:arielle@acerinidesigns.com"
                                    class="media d-flex align-items-center nav-link">
                                    <p class="heading line-item-label  mb-md-1" style="font-size:0.9rem !important;"><b>arielle@acerinidesigns.com</b></p>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="http://acerinidesigns.com/Arielle_Cerini.pdf"
                                class="media d-flex align-items-center nav-link"
                                target="_blank">
                                    
                                        <p class="heading line-item-label mb-md-1" style="var(--color-primary) !important; font-size:0.9rem !important; "><b>Resume</b></p>
                                </a>
                            </li>
                            <li role="menuitem">                   
                                <a href="http://acerinidesigns.com/Arielle_Cerini_cv.pdf"
                                class="media d-flex align-items-center nav-link">
                                        <p class="heading line-item-label mb-md-1" style="var(--color-primary) !important; font-size:0.9rem !important;"><b>CV</b></p>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
                        
            </div>


            </div>

</template>


<script>

export default {
    
    methods: {
    menuToggle:  function (menu) {
     var e = document.getElementById(menu)
     e.style.visibility = ((e.style.visibility!='hidden') ? 'hidden' : 'visible');
    }
    
    }

}
</script>


<style lang="scss">
.dropdow-arrow{
    width: 54px;
    height: 54px;
    background: $color-secondary-tints-10;
    border: transparent;
    border-radius: 100%;
    color: $color-primary;
    cursor: pointer;
    padding-top: 3px;
    }

</style>