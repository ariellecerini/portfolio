<template>
  <div class="cards-container col-xs-12 col-sm-6 col-md-4 col-lg-4"
       :class="[
         {'card-plain': plain},
         {'card-raised': raised},
         {[`card-${type}`]: type}
       ]"
       :data-background-color="color">
       <div class="card-body">
     
          <h6 class="card-category" v-if="$slots.category || category">{{category}}</h6>
          
          <div class="card-figure" v-if="$slots.image">
              <slot name="image"></slot>
          </div>

          <div class="card-avatar" v-if="$slots.avatar">
            <slot name="avatar"></slot>
          </div>

          <div class="info" v-if="$slots.info">
            <slot name="info"></slot>
          </div>

          <div :class="headerClasses" v-if="$slots.header || title">
            <slot name="header">
              <h1 v-if="title" class="card-title">{{title}}</h1>
              <h3 v-if="subTitle" class="card-category">{{subTitle}}</h3>
              <p v-if="description" class="card-text">{{description}}</p>
            </slot>
          </div>
          <div v-if="$slots.default" :class="cardBodyClasses">
            <slot></slot>
          </div>

          <slot name="raw-content"></slot>

          <hr v-if="$slots.footer && !noFooterLine">
        
          <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'card',
    props: {
      type: String,
      title: String,
      subTitle: String,
      category: String,
      color: String,
      description: String,
      noFooterLine: Boolean,
      plain: Boolean,
      raised: Boolean,
      cardBodyClasses: [String, Object, Array],
      headerClasses: [String, Object, Array]
    }
  }
</script>
<style>
</style>
