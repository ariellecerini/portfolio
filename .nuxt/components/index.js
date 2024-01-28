export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCard = () => import('../../components/base-ui-elements/Card.vue' /* webpackChunkName: "components/base-ui-elements-card" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsSlideout = () => import('../../components/base-ui-elements/slideout.vue' /* webpackChunkName: "components/base-ui-elements-slideout" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCardsFeaturedPlain = () => import('../../components/base-ui-elements/cards/FeaturedPlain.vue' /* webpackChunkName: "components/base-ui-elements-cards-featured-plain" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCardsFeaturedSliderCard = () => import('../../components/base-ui-elements/cards/FeaturedSliderCard.vue' /* webpackChunkName: "components/base-ui-elements-cards-featured-slider-card" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCardsPlainCards = () => import('../../components/base-ui-elements/cards/PlainCards.vue' /* webpackChunkName: "components/base-ui-elements-cards-plain-cards" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCardsSliderCard = () => import('../../components/base-ui-elements/cards/SliderCard.vue' /* webpackChunkName: "components/base-ui-elements-cards-slider-card" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCardsPcard = () => import('../../components/base-ui-elements/cards/pcard.vue' /* webpackChunkName: "components/base-ui-elements-cards-pcard" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsContainersCircleContainer = () => import('../../components/base-ui-elements/containers/circle-container.vue' /* webpackChunkName: "components/base-ui-elements-containers-circle-container" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCoreButtonLink = () => import('../../components/base-ui-elements/core/button-link.vue' /* webpackChunkName: "components/base-ui-elements-core-button-link" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCoreButtons = () => import('../../components/base-ui-elements/core/buttons.vue' /* webpackChunkName: "components/base-ui-elements-core-buttons" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavigationMenuBar = () => import('../../components/layout/navigation/menu-bar.vue' /* webpackChunkName: "components/layout-navigation-menu-bar" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavigationMenuDrawer = () => import('../../components/layout/navigation/menu-drawer.vue' /* webpackChunkName: "components/layout-navigation-menu-drawer" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavigationMenuIconButton = () => import('../../components/layout/navigation/menu-icon-button.vue' /* webpackChunkName: "components/layout-navigation-menu-icon-button" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavigationNavbar = () => import('../../components/layout/navigation/navbar.vue' /* webpackChunkName: "components/layout-navigation-navbar" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsInformationTagsProjectType = () => import('../../components/base-ui-elements/Information/Tags/ProjectType.vue' /* webpackChunkName: "components/base-ui-elements-information-tags-project-type" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsCoreTextH1Text = () => import('../../components/base-ui-elements/core/text/h1-text.vue' /* webpackChunkName: "components/base-ui-elements-core-text-h1-text" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectPagesPersona = () => import('../../components/base-ui-elements/theme-patterns/project-pages/Persona.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-pages-persona" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectButton = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectButton.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-button" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectDescription = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectDescription.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-description" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectDetails = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectDetails.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-details" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectSubtitle = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectSubtitle.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-subtitle" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectTimeframe = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectTimeframe.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-timeframe" */).then(c => wrapFunctional(c.default || c))
export const BaseUiElementsThemePatternsProjectTitle = () => import('../../components/base-ui-elements/theme-patterns/project-pages/ProjectTitle.vue' /* webpackChunkName: "components/base-ui-elements-theme-patterns-project-title" */).then(c => wrapFunctional(c.default || c))

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
