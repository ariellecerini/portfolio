<template>

<a class="button-link" :href="`${href}`" target=_blank>{{text}}</a>


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


a.button-link{
    background: rgb(254 214 216 / 0%);
    border-radius: 4px;
    border: none;
    padding: 16px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 0.02rem; 
    font-variant: small-caps;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-variant-caps: small-caps;
    position: relative;
    background-blend-mode: soft-light;
    display: inline-block; 
}

a.button-link:hover{
    background: rgb(254 214 216 / 32%);
    box-shadow: 0px 0px 8px 0px #00000029;
       text-decoration: none;

   
}


a.button-link:selected{
  box-shadow: 0px 0px 5px 0px #0000002E;
     text-decoration: none;
}


a.button-link:active{
  box-shadow: 0px 0px 6px 0px #00000036 inset;
  background: rgb(254 214 216 / 16%);
     text-decoration: none;
}

a.button-link::before{
    content: "";

    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgb(255 145 149);
    position: absolute;
    background-blend-mode: normal;
    /* opacity: 48%; */
    z-index: -1;
    border-radius: 4px;
       text-decoration: none;

}



</style>