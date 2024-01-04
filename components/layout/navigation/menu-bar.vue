<template>

   <nav :class="classes" class="navbar navbar-expand-lg">
        <div class="container">
            <div class="navbar-translate menu-trigger">
                <slot v-bind="slotData"></slot>
                <menu-icon-button :toggled="showMenu"></menu-icon-button>
            </div>
            <menu-drawer/>
           
          
            </div>
       
    </nav>
  
</template>
<script>
import MenuIconButton from "./menu-icon-button.vue";
import MenuDrawer from "./menu-drawer.vue";
import { CollapseTransition } from 'vue2-transitions';

  let resizeTimeout;
  function resizeThrottler(actualResizeHandler) {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }


 export default {
    name: 'menu-bar',
    props: {
      transparent: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'relative'
      },
      menuClasses: {
        type: [String, Object, Array]
      },
      colorOnScroll: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: 'white',
        validator(value) {
          return ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info'].includes(value);
        }
      },
    },
    provide() {
      return {
        closeNavbar: this.close
      }
    },
    components: {
        MenuIconButton,
        MenuDrawer,
        CollapseTransition
    },
    data() {
      return {
        showMenu: false,
        extraNavClasses: '',
        currentScrollValue: 0
      }
    },
    computed: {
      slotData(){
        return {
          toggle: this.toggle,
          open: this.open,
          close: this.close,
          isToggled: this.showMenu
        }
      },
      classes() {
        let color = `bg-${this.type}`;
        let navPosition = `navbar-${this.position}`;
        let colorOnScrollTransparent = this.colorOnScroll && this.currentScrollValue < this.colorOnScroll;

        if (this.position === 'fixed') {
          navPosition = 'fixed-top';
        }

        return [
          { 'navbar-transparent': (this.transparent || colorOnScrollTransparent) },
          { [color]: (!this.transparent && this.colorOnScroll === 0) },
          navPosition, this.extraNavClasses]
      }
    },
    methods: {
       menuToggle(menuId){
            console.log("this worked")
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
    },
    mounted () {
      document.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.scrollListener)
    }
  }
</script>


<style lang="scss">

.menu-trigger{
  padding: 16px 48px; 
  text-align: right; 
}


.col-sm-12 .menu-trigger, .col-xs-12 .menu-trigger{
  padding: 16px 20px; 
}
</style>