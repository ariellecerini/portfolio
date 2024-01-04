<template>
     <button type="button" id="menu-button" class="interactive icon-button" borderclass="border-weight-base border-color-primary"
                  :class="{toggled: toggled}"
                  @click="menuToggle('navbar');"
                  
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="menu-icon-shape">
                <div class="icon-bar top"/>
                <div class="icon-bar middle"/>
                <div class="icon-bar bottom"/>
            </div>

        </button>


</template>


<script>

export default {
    props: {
        toggled: Boolean
      },
    methods: {
        menuToggle(menuId){
            console.log("this here worked")
            var x = document.getElementById(menuId);
            var button = document.getElementById("menu-button");

            if (x.style.visibility === "hidden") {
                x.style.visibility = "visible";
                button.classList.add("open");

                    } else {
                        x.style.visibility = "hidden";
                        button.classList.remove("open");

                            }

            }
    }

  

}
</script>


<style lang="scss">


</style>