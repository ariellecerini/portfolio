<template>


  <div style="width: 100%;padding: 1em 1em 0 2em;">
      <section id="section_header" class="row">
              <div class="side-bar-col hide-xs hide-s show-md show-lg col-md-4 col-lg-4 " style="height: 100vh; justify-content: flex-start; flex-direction: column">
        
            <div id="container-image-frame" class="" style="margin: 0 auto;">
                    <img id="img_portrait" class="portrait about inset-shadow" style="width: 100%; border-radius: 24px; height: auto;" src="portrait.png"/>
            </div> 


            <div id="container_contact-info" class="row">
                <div id="container_contact-content" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter margin-auto">
                    <div id="container_contact-header" class="row">
                        <h2 id="h2_Title" style="text-align: center; font-size: 1.5rem; padding-top: 8px; padding-bottom: 16px;">Arielle Cerini, MFA, PhD</h2>
                    </div>
                    <div id="container_contact-item" class="row gap-small" style="padding-bottom: 16px;">
                      
                        <div id="container_icon-label" class="col-2 col-no-gutter"><img src="/icons/phone.svg" alt="phone-number"/></div> 
                        <div id="container_phone-number" class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-no-gutter" style="justify-content: space-between;">
                              <a href="tel:6316556245" alt="contact via phone" class="contact-link"> 

                                631-655-6245
                                
                                </a> 
                                </div>
                    </div>

                    <div id="container_contact-item" class="row gap-small" style="padding-bottom: 16px;">
                          

                            <div id="container_icon-label" class="col-1 col-no-gutter" ><img src="/icons/envelope.svg"/></div> 
                              <div id="container_email" class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-no-gutter" style="justify-content: space-between;">
                                    <a href="mailto:arielle@acerinidesigns.com"  alt="contact via email" class="contact-link">
                                        arielle@acerinidesigns.com
                                      </a>
                                      </div>
                                 </div>

                            <div id="container_contact-item" class="row gap-small" style="padding-bottom: 16px;">
                                <div id="container_icon-label" class="col-2  col-no-gutter"><img src="/icons/resume.svg" alt="view resume"/></div> 
                                  <div id="container_phone-number" class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-no-gutter" style="justify-content: space-between;">Resume</div>
                                </div>
                              </div>
            
            </div>
        </div>
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8" style="overflow-y: scroll;">
                 <div id="container_section-banner" class="section-banner" style="margin-bottom: 16px">
                    <h2>Summary</h2>
                 </div>

                 <div id="container_summary-text" class="summary-text"> 
                    <p id="p_summary-text" class="small-body-text">
                         UX Manager and Platform Strategist with demonstrated experience leading the UX design vision and strategy for an enterprise platform that has more than 500,000 unique monthly user. <br/><br/> Well versed in design thinking methodologies and has hands on experience working directly with project stakeholders to gather and breakdown requirements.
                         <br/><br/>Skilled in XD, Figma, Prototyping, Design System Architecting, and Project Management. 
                         <br/><br/>Familiar with Agile SCRUM development processes and has experience working with cross-functional teams to deliver iterative design solutions. 
                         <br/><br/>Design Technologist with experience in design and front-end development practices (JS, NUXT, React, CSS, SASS). 
                         <br/><br/>Strong arts and design professional with a Masters of Fine Arts focused in Communications Design from Pratt Institute and a Doctorate of Philosophy in Electronic Arts from Rensselaer Polytechnic Institute.
                        </p>
                        
                    </div>

                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter" style="margin-top: 24px;">

                                    <img style="max-width: 450px;" src="personality-overview.png"/>


                      </div>


            </div>
            
          
            



      </section>
    
     
  </div>
</template>

<script>


export default {
  layout: 'core-layout',
  name: 'About',
  }
</script>


<style lang="scss">


.header{
  height: 100%;
  width: 100%; 
  background: rgba(235, 245, 255, 0.61);
  box-shadow: 3px 0px 12px rgba(0, 0, 0, 0.16);
  display: inline-block; 
  min-height: 100vh;
}




.side-bar-col{
  height: 100vh; 
  justify-content: flex-end; 
  flex-direction: column;
  display: flex;
}



.project-grid{
  padding-top: 64px; 
}





.future-work-svg{
  width: 75%; 
  max-width: 155px; 
  position: absolute;
  bottom: 80px;
  left: 210px;
}


.about-me-svg{
    width: 250px;
    margin-right: 50px;
    margin-left: auto;
    margin-top: 0;
}

img{
  width: 100%;
  bottom: 0;
}

.small-image-frame{
  height: 45vh; 
  width: 100%;
}

.gap-small{
  column-gap: 8px; 
}

.portrait .about{
  border: 1px solid $color-neutral-tints-10;
}



</style>