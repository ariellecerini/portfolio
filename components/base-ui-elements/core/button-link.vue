<template>



    <a   :href="`${href}`" target=_blank>
      <div class="button-link-wrapper">
        {{text}}
      </div>
    </a>





</template>

<script>



export default {
  
  name: 'ButtonLink',
  props: {
       text: String,
       href: String
   },
 
  }
</script>


<style lang="scss">
a{
    text-decoration: none;
}


.button-link-wrapper{
    background: rgb(255 145 149);
    border-radius: 4px;
    border: none;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 0.02rem; 
    font-variant: small-caps;
    font-variant-caps: small-caps;
    position: relative;
    background-blend-mode: soft-light;
    display: inline-block; 
    width: fit-content;
    z-index: -1;
    padding: 8px; 
    text-decoration: none;
    cursor: pointer;
}

a.button-link-wrapper{
  padding: 8px; 
  font-weight: 800;
}

.button-link-wrapper:hover{
    background: rgb(254 214 216 / 32%);
    box-shadow: 0px 0px 8px 0px #00000029;
       text-decoration: none;

   
}

.button-link-wrapper:selected{
  box-shadow: 0px 0px 5px 0px #0000002E;
     text-decoration: none;
}


.button-link-wrapper:active{
  box-shadow: 0px 0px 6px 0px #00000036 inset;
  background: rgb(254 214 216 / 16%);
     text-decoration: none;
}
</style>