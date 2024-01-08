export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as BaseUiElementsCard } from '../../components/base-ui-elements/Card.vue'
export { default as BaseUiElementsSlideout } from '../../components/base-ui-elements/slideout.vue'
export { default as BaseUiElementsContainersCircleContainer } from '../../components/base-ui-elements/containers/circle-container.vue'
export { default as BaseUiElementsCardsFeaturedPlain } from '../../components/base-ui-elements/cards/FeaturedPlain.vue'
export { default as BaseUiElementsCardsFeaturedSliderCard } from '../../components/base-ui-elements/cards/FeaturedSliderCard.vue'
export { default as BaseUiElementsCardsPlainCards } from '../../components/base-ui-elements/cards/PlainCards.vue'
export { default as BaseUiElementsCardsSliderCard } from '../../components/base-ui-elements/cards/SliderCard.vue'
export { default as BaseUiElementsCardsPcard } from '../../components/base-ui-elements/cards/pcard.vue'
export { default as BaseUiElementsCoreButtonLink } from '../../components/base-ui-elements/core/button-link.vue'
export { default as BaseUiElementsCoreButtons } from '../../components/base-ui-elements/core/buttons.vue'
export { default as LayoutNavigationMenuBar } from '../../components/layout/navigation/menu-bar.vue'
export { default as LayoutNavigationMenuDrawer } from '../../components/layout/navigation/menu-drawer.vue'
export { default as LayoutNavigationMenuIconButton } from '../../components/layout/navigation/menu-icon-button.vue'
export { default as LayoutNavigationNavbar } from '../../components/layout/navigation/navbar.vue'
export { default as BaseUiElementsInformationTagsProjectType } from '../../components/base-ui-elements/Information/Tags/ProjectType.vue'
export { default as BaseUiElementsCoreTextH1Text } from '../../components/base-ui-elements/core/text/h1-text.vue'
export { default as BaseUiElementsThemePatternsProjectPagesPersona } from '../../components/base-ui-elements/theme-patterns/project-pages/Persona.vue'
export { default as BaseUiElementsThemePatternsProjectButton } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectButton.vue'
export { default as BaseUiElementsThemePatternsProjectDescription } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectDescription.vue'
export { default as BaseUiElementsThemePatternsProjectDetails } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectDetails.vue'
export { default as BaseUiElementsThemePatternsProjectSubtitle } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectSubtitle.vue'
export { default as BaseUiElementsThemePatternsProjectTimeframe } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectTimeframe.vue'
export { default as BaseUiElementsThemePatternsProjectTitle } from '../../components/base-ui-elements/theme-patterns/project-pages/ProjectTitle.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
