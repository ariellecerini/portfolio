module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/base-ui-elements-card","2":"components/base-ui-elements-cards-featured-plain","3":"components/base-ui-elements-cards-featured-slider-card","4":"components/base-ui-elements-cards-pcard","5":"components/base-ui-elements-cards-plain-cards","6":"components/base-ui-elements-cards-slider-card","7":"components/base-ui-elements-containers-circle-container","8":"components/base-ui-elements-core-button-link","9":"components/base-ui-elements-core-buttons","10":"components/base-ui-elements-core-text-h1-text","11":"components/base-ui-elements-information-tags-project-type","12":"components/base-ui-elements-slideout","13":"components/base-ui-elements-theme-patterns-project-button","14":"components/base-ui-elements-theme-patterns-project-description","15":"components/base-ui-elements-theme-patterns-project-details","16":"components/base-ui-elements-theme-patterns-project-pages-persona","17":"components/base-ui-elements-theme-patterns-project-subtitle","18":"components/base-ui-elements-theme-patterns-project-timeframe","19":"components/base-ui-elements-theme-patterns-project-title","20":"components/layout-navigation-navbar","21":"components/nuxt-logo","22":"components/tutorial","23":"pages/about","24":"pages/index","25":"pages/portfolio/_slug","26":"pages/portfolio/communications-design/_slug","27":"pages/portfolio/communications-design/index","28":"pages/portfolio/design-research/_slug","29":"pages/portfolio/design-research/index","30":"pages/portfolio/index","31":"pages/portfolio/ui-ux-design/_slug","32":"pages/portfolio/ui-ux-design/index","33":"pages/portfolio/web-design/_slug","34":"pages/portfolio/web-design/index","35":"pages/test"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-bar.vue?vue&type=template&id=0271bb05&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nav', {
    staticClass: "navbar navbar-expand-lg",
    class: _vm.classes
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"navbar-translate menu-trigger\">", "</div>", [_vm._t("default", null, null, _vm.slotData), _vm._ssrNode(" "), _c('menu-icon-button', {
    attrs: {
      "toggled": _vm.showMenu
    }
  })], 2), _vm._ssrNode(" "), _c('menu-drawer')], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/layout/navigation/menu-bar.vue?vue&type=template&id=0271bb05&

// EXTERNAL MODULE: ./components/layout/navigation/menu-icon-button.vue + 4 modules
var menu_icon_button = __webpack_require__(17);

// EXTERNAL MODULE: ./components/layout/navigation/menu-drawer.vue + 4 modules
var menu_drawer = __webpack_require__(23);

// EXTERNAL MODULE: external "vue2-transitions"
var external_vue2_transitions_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-bar.vue?vue&type=script&lang=js&



let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
/* harmony default export */ var menu_barvue_type_script_lang_js_ = ({
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
    }
  },
  provide() {
    return {
      closeNavbar: this.close
    };
  },
  components: {
    MenuIconButton: menu_icon_button["default"],
    MenuDrawer: menu_drawer["default"],
    CollapseTransition: external_vue2_transitions_["CollapseTransition"]
  },
  data() {
    return {
      showMenu: false,
      extraNavClasses: '',
      currentScrollValue: 0
    };
  },
  computed: {
    slotData() {
      return {
        toggle: this.toggle,
        open: this.open,
        close: this.close,
        isToggled: this.showMenu
      };
    },
    classes() {
      let color = `bg-${this.type}`;
      let navPosition = `navbar-${this.position}`;
      let colorOnScrollTransparent = this.colorOnScroll && this.currentScrollValue < this.colorOnScroll;
      if (this.position === 'fixed') {
        navPosition = 'fixed-top';
      }
      return [{
        'navbar-transparent': this.transparent || colorOnScrollTransparent
      }, {
        [color]: !this.transparent && this.colorOnScroll === 0
      }, navPosition, this.extraNavClasses];
    }
  },
  methods: {
    menuToggle(menuId) {
      console.log("this worked");
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
  mounted() {
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  }
});
// CONCATENATED MODULE: ./components/layout/navigation/menu-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_menu_barvue_type_script_lang_js_ = (menu_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/navigation/menu-bar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_menu_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "065b1f20"
  
)

/* harmony default export */ var menu_bar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cf50bb88", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2386a62a", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("327357e2", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("431fa8e6", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-icon-button.vue?vue&type=template&id=20c9ce56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "interactive icon-button",
    class: {
      toggled: _vm.toggled
    },
    attrs: {
      "type": "button",
      "id": "menu-button",
      "borderclass": "border-weight-base border-color-primary",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    },
    on: {
      "click": function ($event) {
        return _vm.menuToggle('navbar');
      }
    }
  }, [_vm._ssrNode("<div class=\"menu-icon-shape\"><div class=\"icon-bar top\"></div> <div class=\"icon-bar middle\"></div> <div class=\"icon-bar bottom\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/layout/navigation/menu-icon-button.vue?vue&type=template&id=20c9ce56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-icon-button.vue?vue&type=script&lang=js&
/* harmony default export */ var menu_icon_buttonvue_type_script_lang_js_ = ({
  props: {
    toggled: Boolean
  },
  methods: {
    menuToggle(menuId) {
      console.log("this here worked");
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
});
// CONCATENATED MODULE: ./components/layout/navigation/menu-icon-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_menu_icon_buttonvue_type_script_lang_js_ = (menu_icon_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/navigation/menu-icon-button.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_menu_icon_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a3158e3a"
  
)

/* harmony default export */ var menu_icon_button = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue2-transitions");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-drawer.vue?vue&type=template&id=565bcf22&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-xs-12 col-sm-12 col-md-4 col-lg-4 menu-drawer",
    staticStyle: {
      "visibility": "hidden"
    },
    attrs: {
      "id": "navbar"
    }
  }, [_vm._ssrNode("<div id=\"navbar\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 menu-content\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter\"><p class=\"heading2 padding-bottom-base\" style=\"font-size: 1.65rem;\">Arielle Cerini, MFA, PhD</p> <div class=\"subtitle-banner\"><p class=\"smallest-body-text bold\">Creative Problem Solver &amp; Strategic Thinker</p></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-md\">", "</div>", [_vm._ssrNode("<p class=\"section-title\">Design Portfolio</p> "), _vm._ssrNode("<div class=\"link-items row padding-top-base\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/portfolio/ui-ux-design"
    }
  }, [_vm._v("UI/UX Design")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/portfolio/communications-design"
    }
  }, [_vm._v("Communications Design")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/portfolio/design-research"
    }
  }, [_vm._v("Design Research")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/portfolio/web-design"
    }
  }, [_vm._v("Web Design")])], 1)], 2)], 2)]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-base\"><p class=\"section-title\">Web Applications</p> <div class=\"link-items row padding-top-base\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\"><a href class=\"nav-link\">Color Alchemy</a></div> <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\"><a href=\"https://digitalpenmanship.app\" class=\"nav-link\">Digital Penmanship</a></div></div></div></div> <div class=\"row\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-base\"><p class=\"section-title\">Social Media</p> <div class=\"link-items row padding-top-base\"><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\"><a href=\"https://www.instagram.com/ariellecerini/\" target=\"_blank\" class=\"nav-link\">Instagram</a></div> <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\"><a href=\"https://www.linkedin.com/in/arielle-cerini-mfa-phd-66943583/\" target=\"_blank\" class=\"nav-link\">Linkedin</a></div></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-top-base\">", "</div>", [_vm._ssrNode("<p class=\"section-title\">Application Materials</p> "), _vm._ssrNode("<div class=\"link-items row padding-top-base\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/Arielle_Cerini.pdf",
      "target": "_blank"
    }
  }, [_vm._v("Resume")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter padding-bottom-base\">", "</div>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/HEALS-Case-Study.pdf",
      "target": "_blank"
    }
  }, [_vm._v("HEALS Case Study")])], 1)], 2)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/layout/navigation/menu-drawer.vue?vue&type=template&id=565bcf22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/navigation/menu-drawer.vue?vue&type=script&lang=js&
/* harmony default export */ var menu_drawervue_type_script_lang_js_ = ({
  name: 'MenuDrawer',
  props: {
    visibility: String
  }
});
// CONCATENATED MODULE: ./components/layout/navigation/menu-drawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_menu_drawervue_type_script_lang_js_ = (menu_drawervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/navigation/menu-drawer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_menu_drawervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0097c5a4"
  
)

/* harmony default export */ var menu_drawer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
module.exports = __webpack_require__(40);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3e7ab538", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*The first thing we're going to add is a global reset and box-sizing rule. \nEnsures padding applied to our elements is added within their calculated dimensions*/\n/*\n*,\n*:after,\n*:before {\n    margin: 0;\n    padding: 0;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; \n    }\n/*Ensures all images behave fluidly\nimg {\n    width: auto;\n    max-width: 100%;\n    height: auto !important; \n    }\n\n\n/*Working mobile first so starts out as 100%\n\n.wrapper {\n    width: 100%;\n    margin: 0 auto;\n}\n\n\n/*adding clearfix rules to general row items\n.wrapper:after,\n.row:after {\n      content: \"\";\n      display: table;\n      clear: both; \n      }\n\n/*Attribute selector to target and style all columns*/ \n/*There will be columns defined for column 1 through column 6, each of which is a different size\n[class*='column-'] {\n    float: left;\n    padding: 1em;\n    width: 100%;\n    min-height: 1px; \n \n}      \n\n\nspan{\n    display: block;\n    background: #c2f0ff;\n    padding: 1em 0;\n    text-align: center;\n}\n*/\n\nhtml{\n    font-size: 100%; \n}\n\nbody {\n    font-family: Space Grotesk, sans-serif;\n\n    }\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_drawer_vue_vue_type_style_index_0_id_565bcf22_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_drawer_vue_vue_type_style_index_0_id_565bcf22_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_drawer_vue_vue_type_style_index_0_id_565bcf22_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_drawer_vue_vue_type_style_index_0_id_565bcf22_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_drawer_vue_vue_type_style_index_0_id_565bcf22_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".margin-auto{margin:auto}.margin-top-base{margin-top:16px}.row{box-sizing:border-box;margin:0 auto;width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap}.row.reverse{flex-direction:row-reverse}.row.natural-height{align-items:flex-start}.row.flex-column{flex-direction:column}.col{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col.reverse{flex-direction:column-reverse}.first{order:-1}.last{order:1}.align-start{align-self:flex-start}.align-end{align-self:flex-end}.align-center{align-self:center}.align-baseline{align-self:baseline}.align-stretch{align-self:stretch}.col-xs{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xs-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xs-offset-1{margin-left:8.3333333333%}.col-xs-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2{margin-left:16.6666666667%}.col-xs-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3{margin-left:25%}.col-xs-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4{margin-left:33.3333333333%}.col-xs-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5{margin-left:41.6666666667%}.col-xs-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6{margin-left:50%}.col-xs-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7{margin-left:58.3333333333%}.col-xs-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8{margin-left:66.6666666667%}.col-xs-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9{margin-left:75%}.col-xs-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10{margin-left:83.3333333333%}.col-xs-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11{margin-left:91.6666666667%}.col-xs-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12{margin-left:100%}.row.start-xs{justify-content:flex-start}.row.center-xs{justify-content:center}.row.end-xs{justify-content:flex-end}.row.top-xs{align-items:flex-start}.row.middle-xs{align-items:center}.row.bottom-xs{align-items:flex-end}.row.around-xs{justify-content:space-around}.row.between-xs{justify-content:space-between}.first-xs{order:-1}.last-xs{order:1}@media only screen and (min-width: 41rem){.col-sm{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-sm-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3{margin-left:25%}.col-sm-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6{margin-left:50%}.col-sm-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9{margin-left:75%}.col-sm-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12{margin-left:100%}.row.start-sm{justify-content:flex-start}.row.center-sm{justify-content:center}.row.end-sm{justify-content:flex-end}.row.top-sm{align-items:flex-start}.row.middle-sm{align-items:center}.row.bottom-sm{align-items:flex-end}.row.around-sm{justify-content:space-around}.row.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}@media only screen and (min-width: 65rem){.col-md{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-md-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3{margin-left:25%}.col-md-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6{margin-left:50%}.col-md-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9{margin-left:75%}.col-md-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12{margin-left:100%}.row.start-md{justify-content:flex-start}.row.center-md{justify-content:center}.row.end-md{justify-content:flex-end}.row.top-md{align-items:flex-start}.row.middle-md{align-items:center}.row.bottom-md{align-items:flex-end}.row.around-md{justify-content:space-around}.row.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}@media only screen and (min-width: 101rem){.col-lg{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-lg-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3{margin-left:25%}.col-lg-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6{margin-left:50%}.col-lg-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9{margin-left:75%}.col-lg-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12{margin-left:100%}.row.start-lg{justify-content:flex-start}.row.center-lg{justify-content:center}.row.end-lg{justify-content:flex-end}.row.top-lg{align-items:flex-start}.row.middle-lg{align-items:center}.row.bottom-lg{align-items:flex-end}.row.around-lg{justify-content:space-around}.row.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}@media only screen and (min-width: 121rem){.col-xl{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xl-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3{margin-left:25%}.col-xl-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6{margin-left:50%}.col-xl-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9{margin-left:75%}.col-xl-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12{margin-left:100%}.row.start-xl{justify-content:flex-start}.row.center-xl{justify-content:center}.row.end-xl{justify-content:flex-end}.row.top-xl{align-items:flex-start}.row.middle-xl{align-items:center}.row.bottom-xl{align-items:flex-end}.row.around-xl{justify-content:space-around}.row.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}.col-gutter-lr{padding:0 1rem}.col-no-gutter{padding:0}.show{display:flex !important}.row.show{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide{display:none !important}.show-xs{display:flex !important}.row.show-xs{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs{display:none !important}@media only screen and (max-width: 40rem){.show-xs-only{display:flex !important}.row.show-xs-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs-only{display:none !important}}@media only screen and (min-width: 41rem){.show-sm{display:flex !important}.row.show-sm{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm{display:none !important}}@media only screen and (min-width: 41rem)and (max-width: 64rem){.show-sm-only{display:flex !important}.row.show-sm-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm-only{display:none !important}}@media only screen and (min-width: 65rem){.show-md{display:flex !important}.row.show-md{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md{display:none !important}}@media only screen and (min-width: 65rem)and (max-width: 100rem){.show-md-only{display:flex !important}.row.show-md-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md-only{display:none !important}}@media only screen and (min-width: 101rem){.show-lg{display:flex !important}.row.show-lg{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg{display:none !important}}@media only screen and (min-width: 101rem)and (max-width: 120rem){.show-lg-only{display:flex !important}.row.show-lg-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg-only{display:none !important}}@media only screen and (min-width: 121rem){.show-xl{display:flex !important}.row.show-xl{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xl{display:none !important}}h1,.header1,.heading1{font-size:1.875rem;font-weight:600;letter-spacing:.5%;margin:0}h2,.header2,.heading2{font-size:1.75rem;font-weight:600;letter-spacing:.5%;margin:0}h3,.header3,.heading3{font-size:1.5rem;font-weight:600;letter-spacing:.5%}h4,.header4,.heading4{font-size:1.25rem;font-weight:700;letter-spacing:.5%;margin:0}h5,.header5,.heading5{font-size:1.125rem;font-weight:600;letter-spacing:.5%;margin:0}h6,.header6,.heading6{font-size:1rem;font-weight:600;letter-spacing:.5%;margin:0}p,.p,.body-text{font-size:1rem;font-weight:400;letter-spacing:.5%;margin:0}.small-body-text{font-size:.875rem;font-weight:400;letter-spacing:.5%;margin:0}.smallest-body-text{font-size:.75rem;font-weight:400;letter-spacing:.5%;margin:0}.bold{font-weight:700}.semi-bold{font-weight:600}.regular{font-weight:400}a{color:#012a4d}a:hover{color:#ff9195;font-weight:600}.nav-link{color:#012a4d}.nav-link:hover{color:#012a4d;font-weight:600}.tertiary-text{color:#bbc909}.display-text{color:#bbc909;font-size:7rem}.hero-text{color:#012a4d;font-size:5rem;padding-bottom:.625rem;font-weight:600;margin:0;line-height:6rem}.sub-header{line-height:2.875rem;font-size:2.25rem;padding-bottom:.625rem;color:#012a4d;font-weight:500}.header-content{margin-top:18%;margin-left:14%}.rounded{border-radius:24px}.border-weight-base{border-width:3px}.border-color-primary{border-color:#012a4d}.backdrop-tertiary-lightest{background-color:#fdffe6}div{box-sizing:border-box}.padding-xxs{padding:2px}.padding-xs{padding:4px}.padding-s{padding:8px}.padding-base{padding:16px}.padding-md{padding:24px}.padding-lg{padding:32px}.padding-xl{padding:40px}.padding-xxl{padding:48px}.padding-xxxl{padding:56px}.padding-y-xxs{padding-top:2px;padding-bottom:2px}.padding-y-xs{padding-top:4px;padding-bottom:4px}.padding-y-s{padding-top:8px;padding-bottom:8px}.padding-y-base{padding-top:16px;padding-bottom:16px}.padding-y-md{padding-top:24px;padding-bottom:24px}.padding-y-lg{padding-top:32px;padding-bottom:32px}.padding-y-xl{padding-top:40px;padding-bottom:40px}.padding-y-xxl{padding-top:48px;padding-bottom:48px}.padding-y-xxxl{padding-top:56px;padding-bottom:48px}.padding-x-xxs{padding-left:2px;padding-right:2px}.padding-x-xs{padding-left:4px;padding-right:4px}.padding-x-s{padding-left:8px;padding-right:8px}.padding-x-base{padding-left:16px;padding-right:16px}.padding-x-md{padding-left:24px;padding-right:24px}.padding-x-lg{padding-left:32px;padding-right:32px}.padding-x-xl{padding-left:40px;padding-right:40px}.padding-x-xxl{padding-left:48px;padding-right:48px}.padding-x-xxxl{padding-left:56px;padding-right:48px}.padding-right-xxs{padding-right:2px}.padding-right-xs{padding-right:4px}.padding-right-s{padding-right:8px}.padding-right-base{padding-right:16px}.padding-right-md{padding-right:24px}.padding-right-lg{padding-right:32px}.padding-right-xl{padding-right:40px}.padding-right-xxl{padding-right:48px}.padding-right-xxxl{padding-right:48px}.padding-bottom-xxs{padding-bottom:2px}.padding-bottom-xs{padding-bottom:4px}.padding-bottom-s{padding-bottom:8px}.padding-bottom-base{padding-bottom:16px}.padding-bottom-md{padding-bottom:24px}.padding-bottom-lg{padding-bottom:32px}.padding-bottom-xl{padding-bottom:40px}.padding-bottom-xxl{padding-bottom:48px}.padding-bottom-xxxl{padding-bottom:48px}.padding-top-xxs{padding-top:2px}.padding-top-xs{padding-top:4px}.padding-top-s{padding-top:8px}.padding-top-base{padding-top:16px}.padding-top-md{padding-top:24px}.padding-top-lg{padding-top:32px}.padding-top-xl{padding-top:40px}.padding-top-xxl{padding-top:48px}.padding-top-xxxl{padding-top:48px}.padding-left-xxs{padding-left:2px}.padding-left-xs{padding-left:4px}.padding-left-s{padding-left:8px}.padding-left-base{padding-left:16px}.padding-left-md{padding-left:24px}.padding-left-lg{padding-left:32px}.padding-left-xl{padding-left:40px}.padding-left-xxl{padding-left:48px}.padding-left-xxxl{padding-left:48px}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-base{margin:16px}.margin-md{margin:24px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.margin-y-xxs{margin-top:2px;margin-bottom:2px}.margin-y-xs{margin-top:4px;margin-bottom:4px}.margin-y-s{margin-top:8px;margin-bottom:8px}.margin-y-xxs{margin-top:16px;margin-bottom:16px}.margin-y-lg{margin-top:32px;margin-bottom:32px}.margin-y-xl{margin-top:40px;margin-bottom:40px}.margin-y-xxl{margin-top:48px;margin-bottom:48px}.margin-y-xxxl{margin-top:56px;margin-bottom:48px}.margin-x-xxs{margin-left:2px;margin-right:2px}.margin-x-xs{margin-left:4px;margin-right:4px}.margin-x-s{margin-left:8px;margin-right:8px}.margin-x-base{margin-left:16px;margin-right:16px}.margin-x-md{margin-left:24px;margin-right:24px}.margin-x-lg{margin-left:32px;margin-right:32px}.margin-x-xl{margin-left:40px;margin-right:40px}.margin-x-xxl{margin-left:48px;margin-right:48px}.margin-x-xxxl{margin-left:56px;margin-right:48px}.margin-right-xxs{margin-right:2px}.margin-right-xs{margin-right:4px}.margin-right-s{margin-right:8px}.margin-right-base{margin-right:16px}.margin-right-md{margin-right:24px}.margin-right-lg{margin-right:32px}.margin-right-xl{margin-right:40px}.margin-right-xxl{margin-right:48px}.margin-right-xxxl{margin-right:48px}.margin-bottom-xxs{margin-bottom:2px}.margin-bottom-xs{margin-bottom:4px}.margin-bottom-s{margin-bottom:8px}.margin-bottom-base{margin-bottom:16px}.margin-bottom-md{margin-bottom:24px}.margin-bottom-lg{margin-bottom:32px}.margin-bottom-xl{margin-bottom:40px}.margin-bottom-xxl{margin-bottom:48px}.margin-bottom-xxxl{margin-bottom:48px}.margin-top-xxs{margin-top:2px}.margin-top-xs{margin-top:4px}.margin-top-s{margin-top:8px}.margin-top-base{margin-top:16px}.margin-top-md{margin-top:24px}.margin-top-lg{margin-top:32px}.margin-top-xl{margin-top:40px}.margin-top-xxl{margin-top:48px}.margin-top-xxxl{margin-top:48px}.margin-left-xxs{margin-left:2px}.margin-left-xs{margin-left:4px}.margin-left-s{margin-left:8px}.margin-left-base{margin-left:16px}.margin-left-md{margin-left:24px}.margin-left-lg{margin-left:32px}.margin-left-xl{margin-left:40px}.margin-left-xxl{margin-left:48px}.margin-left-xxxl{margin-left:48px}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.padding-none{padding:0}.margin-none{margin:0}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-xxs{margin:16px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.inset-shadow{box-shadow:0px 3px 6px 0px rgba(0,0,0,.1607843137) inset}@media only screen and (min-width: 50em){.wrapper{width:95%;max-width:65em}.column-1{width:8.3333333333%}.column-2{width:4.1666666667%}.column-3{width:2.7777777778%}.column-4{width:2.0833333333%}.column-5{width:1.6666666667%}.column-6{width:1.3888888889%}.column-7{width:1.1904761905%}.column-8{width:1.0416666667%}.column-9{width:.9259259259%}.column-10{width:.8333333333%}.column-11{width:.7575757576%}.column-12{width:.6944444444%}aside{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.myHeader{position:absolute;width:100%;padding:32px}.page-wrapper{height:100%}body{margin:0}.not-full-width{padding:2rem}.cards-container{position:relative;padding:1rem}.cards-container .card-figure{overflow:hidden;background-color:#e0e0e0}.cards-container .card-body{display:flex;flex-direction:column;border-radius:24px;border:solid 1px #e6e6e6;overflow:hidden;height:100%}.cards-container .card-title{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text{padding:1.5em;font-size:1rem}.cards-container .card-link{text-decoration:none}.cards-container .category{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;padding:4px 8px;padding-top:4px;padding-bottom:4px;color:#012a4d;width:fit-content;margin-right:8px;margin-bottom:8px;margin-top:0}button{background:rgba(254,214,216,0);border-radius:4px;border:none;padding:16px;text-transform:uppercase;color:#fff;font-weight:600;font-size:1.125rem;letter-spacing:.02rem;font-variant:small-caps;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-caps:small-caps;position:relative;background-blend-mode:soft-light}button:hover{background:rgba(254,214,216,.32);box-shadow:0px 0px 8px 0px rgba(0,0,0,.1607843137)}button:selected{box-shadow:0px 0px 5px 0px rgba(0,0,0,.1803921569)}button:active{box-shadow:0px 0px 6px 0px rgba(0,0,0,.2117647059) inset;background:rgba(254,214,216,.16)}.button-link:hover{color:#fff}button.btn::before{content:\"\";bottom:0;left:0;right:0;top:0;background:#ff9195;position:absolute;background-blend-mode:normal;z-index:-1;border-radius:4px}.menu-icon-shape{display:flex;flex-direction:column;justify-content:space-between;height:24px;text-align:center}.menu-trigger .button::before{border-radius:100px}.icon-bar{width:24px;height:3.25px;border-radius:8px;background:#012a4d;margin:auto}.icon-bar.middle{visibility:visible}.icon-bar.top,.icon-bar.bottom{transform:none;transition:transform .5s}.menu-icon{width:24px;margin:auto}.icon-button{width:56px;height:56px;background:#fafdff;border:solid #012a4d 3px;padding:0;border-radius:100px}.icon-button:hover{background:#ebf5ff;transition:background .5s}.icon-button.open{background:#053259;transition:background .5s}.icon-button.open .icon-bar{background:#fafdff}.icon-button.open .icon-bar.top{transform:translate(0px, 8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom{transform:translate(0px, -8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle{visibility:hidden}.small-image-frame{overflow:hidden;width:20em}.section-banner{background-color:#f4fc97;padding-right:16px}.menu-drawer{box-shadow:0px 0px 7px rgba(0,0,0,.16);position:absolute;border-right:24px solid #cce6ff;margin-top:0;display:unset;background:#fff;z-index:100}.nav-link{padding:4px;font-size:.95rem;color:#012a4d;border-radius:4px}.nav-link:hover{background:#cce6ff}.section-title{font-weight:700;font-size:1.175rem;color:#012a4d}.subtitle-banner{width:100%;background:#f4fc97;padding:8px}.menu-content{max-height:90vh;overflow-y:scroll}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_0271bb05_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_0271bb05_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_0271bb05_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_0271bb05_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_bar_vue_vue_type_style_index_0_id_0271bb05_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".margin-auto{margin:auto}.margin-top-base{margin-top:16px}.row{box-sizing:border-box;margin:0 auto;width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap}.row.reverse{flex-direction:row-reverse}.row.natural-height{align-items:flex-start}.row.flex-column{flex-direction:column}.col{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col.reverse{flex-direction:column-reverse}.first{order:-1}.last{order:1}.align-start{align-self:flex-start}.align-end{align-self:flex-end}.align-center{align-self:center}.align-baseline{align-self:baseline}.align-stretch{align-self:stretch}.col-xs{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xs-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xs-offset-1{margin-left:8.3333333333%}.col-xs-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2{margin-left:16.6666666667%}.col-xs-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3{margin-left:25%}.col-xs-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4{margin-left:33.3333333333%}.col-xs-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5{margin-left:41.6666666667%}.col-xs-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6{margin-left:50%}.col-xs-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7{margin-left:58.3333333333%}.col-xs-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8{margin-left:66.6666666667%}.col-xs-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9{margin-left:75%}.col-xs-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10{margin-left:83.3333333333%}.col-xs-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11{margin-left:91.6666666667%}.col-xs-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12{margin-left:100%}.row.start-xs{justify-content:flex-start}.row.center-xs{justify-content:center}.row.end-xs{justify-content:flex-end}.row.top-xs{align-items:flex-start}.row.middle-xs{align-items:center}.row.bottom-xs{align-items:flex-end}.row.around-xs{justify-content:space-around}.row.between-xs{justify-content:space-between}.first-xs{order:-1}.last-xs{order:1}@media only screen and (min-width: 41rem){.col-sm{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-sm-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3{margin-left:25%}.col-sm-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6{margin-left:50%}.col-sm-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9{margin-left:75%}.col-sm-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12{margin-left:100%}.row.start-sm{justify-content:flex-start}.row.center-sm{justify-content:center}.row.end-sm{justify-content:flex-end}.row.top-sm{align-items:flex-start}.row.middle-sm{align-items:center}.row.bottom-sm{align-items:flex-end}.row.around-sm{justify-content:space-around}.row.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}@media only screen and (min-width: 65rem){.col-md{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-md-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3{margin-left:25%}.col-md-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6{margin-left:50%}.col-md-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9{margin-left:75%}.col-md-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12{margin-left:100%}.row.start-md{justify-content:flex-start}.row.center-md{justify-content:center}.row.end-md{justify-content:flex-end}.row.top-md{align-items:flex-start}.row.middle-md{align-items:center}.row.bottom-md{align-items:flex-end}.row.around-md{justify-content:space-around}.row.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}@media only screen and (min-width: 101rem){.col-lg{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-lg-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3{margin-left:25%}.col-lg-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6{margin-left:50%}.col-lg-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9{margin-left:75%}.col-lg-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12{margin-left:100%}.row.start-lg{justify-content:flex-start}.row.center-lg{justify-content:center}.row.end-lg{justify-content:flex-end}.row.top-lg{align-items:flex-start}.row.middle-lg{align-items:center}.row.bottom-lg{align-items:flex-end}.row.around-lg{justify-content:space-around}.row.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}@media only screen and (min-width: 121rem){.col-xl{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xl-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3{margin-left:25%}.col-xl-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6{margin-left:50%}.col-xl-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9{margin-left:75%}.col-xl-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12{margin-left:100%}.row.start-xl{justify-content:flex-start}.row.center-xl{justify-content:center}.row.end-xl{justify-content:flex-end}.row.top-xl{align-items:flex-start}.row.middle-xl{align-items:center}.row.bottom-xl{align-items:flex-end}.row.around-xl{justify-content:space-around}.row.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}.col-gutter-lr{padding:0 1rem}.col-no-gutter{padding:0}.show{display:flex !important}.row.show{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide{display:none !important}.show-xs{display:flex !important}.row.show-xs{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs{display:none !important}@media only screen and (max-width: 40rem){.show-xs-only{display:flex !important}.row.show-xs-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs-only{display:none !important}}@media only screen and (min-width: 41rem){.show-sm{display:flex !important}.row.show-sm{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm{display:none !important}}@media only screen and (min-width: 41rem)and (max-width: 64rem){.show-sm-only{display:flex !important}.row.show-sm-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm-only{display:none !important}}@media only screen and (min-width: 65rem){.show-md{display:flex !important}.row.show-md{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md{display:none !important}}@media only screen and (min-width: 65rem)and (max-width: 100rem){.show-md-only{display:flex !important}.row.show-md-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md-only{display:none !important}}@media only screen and (min-width: 101rem){.show-lg{display:flex !important}.row.show-lg{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg{display:none !important}}@media only screen and (min-width: 101rem)and (max-width: 120rem){.show-lg-only{display:flex !important}.row.show-lg-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg-only{display:none !important}}@media only screen and (min-width: 121rem){.show-xl{display:flex !important}.row.show-xl{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xl{display:none !important}}h1,.header1,.heading1{font-size:1.875rem;font-weight:600;letter-spacing:.5%;margin:0}h2,.header2,.heading2{font-size:1.75rem;font-weight:600;letter-spacing:.5%;margin:0}h3,.header3,.heading3{font-size:1.5rem;font-weight:600;letter-spacing:.5%}h4,.header4,.heading4{font-size:1.25rem;font-weight:700;letter-spacing:.5%;margin:0}h5,.header5,.heading5{font-size:1.125rem;font-weight:600;letter-spacing:.5%;margin:0}h6,.header6,.heading6{font-size:1rem;font-weight:600;letter-spacing:.5%;margin:0}p,.p,.body-text{font-size:1rem;font-weight:400;letter-spacing:.5%;margin:0}.small-body-text{font-size:.875rem;font-weight:400;letter-spacing:.5%;margin:0}.smallest-body-text{font-size:.75rem;font-weight:400;letter-spacing:.5%;margin:0}.bold{font-weight:700}.semi-bold{font-weight:600}.regular{font-weight:400}a{color:#012a4d}a:hover{color:#ff9195;font-weight:600}.nav-link{color:#012a4d}.nav-link:hover{color:#012a4d;font-weight:600}.tertiary-text{color:#bbc909}.display-text{color:#bbc909;font-size:7rem}.hero-text{color:#012a4d;font-size:5rem;padding-bottom:.625rem;font-weight:600;margin:0;line-height:6rem}.sub-header{line-height:2.875rem;font-size:2.25rem;padding-bottom:.625rem;color:#012a4d;font-weight:500}.header-content{margin-top:18%;margin-left:14%}.rounded{border-radius:24px}.border-weight-base{border-width:3px}.border-color-primary{border-color:#012a4d}.backdrop-tertiary-lightest{background-color:#fdffe6}div{box-sizing:border-box}.padding-xxs{padding:2px}.padding-xs{padding:4px}.padding-s{padding:8px}.padding-base{padding:16px}.padding-md{padding:24px}.padding-lg{padding:32px}.padding-xl{padding:40px}.padding-xxl{padding:48px}.padding-xxxl{padding:56px}.padding-y-xxs{padding-top:2px;padding-bottom:2px}.padding-y-xs{padding-top:4px;padding-bottom:4px}.padding-y-s{padding-top:8px;padding-bottom:8px}.padding-y-base{padding-top:16px;padding-bottom:16px}.padding-y-md{padding-top:24px;padding-bottom:24px}.padding-y-lg{padding-top:32px;padding-bottom:32px}.padding-y-xl{padding-top:40px;padding-bottom:40px}.padding-y-xxl{padding-top:48px;padding-bottom:48px}.padding-y-xxxl{padding-top:56px;padding-bottom:48px}.padding-x-xxs{padding-left:2px;padding-right:2px}.padding-x-xs{padding-left:4px;padding-right:4px}.padding-x-s{padding-left:8px;padding-right:8px}.padding-x-base{padding-left:16px;padding-right:16px}.padding-x-md{padding-left:24px;padding-right:24px}.padding-x-lg{padding-left:32px;padding-right:32px}.padding-x-xl{padding-left:40px;padding-right:40px}.padding-x-xxl{padding-left:48px;padding-right:48px}.padding-x-xxxl{padding-left:56px;padding-right:48px}.padding-right-xxs{padding-right:2px}.padding-right-xs{padding-right:4px}.padding-right-s{padding-right:8px}.padding-right-base{padding-right:16px}.padding-right-md{padding-right:24px}.padding-right-lg{padding-right:32px}.padding-right-xl{padding-right:40px}.padding-right-xxl{padding-right:48px}.padding-right-xxxl{padding-right:48px}.padding-bottom-xxs{padding-bottom:2px}.padding-bottom-xs{padding-bottom:4px}.padding-bottom-s{padding-bottom:8px}.padding-bottom-base{padding-bottom:16px}.padding-bottom-md{padding-bottom:24px}.padding-bottom-lg{padding-bottom:32px}.padding-bottom-xl{padding-bottom:40px}.padding-bottom-xxl{padding-bottom:48px}.padding-bottom-xxxl{padding-bottom:48px}.padding-top-xxs{padding-top:2px}.padding-top-xs{padding-top:4px}.padding-top-s{padding-top:8px}.padding-top-base{padding-top:16px}.padding-top-md{padding-top:24px}.padding-top-lg{padding-top:32px}.padding-top-xl{padding-top:40px}.padding-top-xxl{padding-top:48px}.padding-top-xxxl{padding-top:48px}.padding-left-xxs{padding-left:2px}.padding-left-xs{padding-left:4px}.padding-left-s{padding-left:8px}.padding-left-base{padding-left:16px}.padding-left-md{padding-left:24px}.padding-left-lg{padding-left:32px}.padding-left-xl{padding-left:40px}.padding-left-xxl{padding-left:48px}.padding-left-xxxl{padding-left:48px}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-base{margin:16px}.margin-md{margin:24px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.margin-y-xxs{margin-top:2px;margin-bottom:2px}.margin-y-xs{margin-top:4px;margin-bottom:4px}.margin-y-s{margin-top:8px;margin-bottom:8px}.margin-y-xxs{margin-top:16px;margin-bottom:16px}.margin-y-lg{margin-top:32px;margin-bottom:32px}.margin-y-xl{margin-top:40px;margin-bottom:40px}.margin-y-xxl{margin-top:48px;margin-bottom:48px}.margin-y-xxxl{margin-top:56px;margin-bottom:48px}.margin-x-xxs{margin-left:2px;margin-right:2px}.margin-x-xs{margin-left:4px;margin-right:4px}.margin-x-s{margin-left:8px;margin-right:8px}.margin-x-base{margin-left:16px;margin-right:16px}.margin-x-md{margin-left:24px;margin-right:24px}.margin-x-lg{margin-left:32px;margin-right:32px}.margin-x-xl{margin-left:40px;margin-right:40px}.margin-x-xxl{margin-left:48px;margin-right:48px}.margin-x-xxxl{margin-left:56px;margin-right:48px}.margin-right-xxs{margin-right:2px}.margin-right-xs{margin-right:4px}.margin-right-s{margin-right:8px}.margin-right-base{margin-right:16px}.margin-right-md{margin-right:24px}.margin-right-lg{margin-right:32px}.margin-right-xl{margin-right:40px}.margin-right-xxl{margin-right:48px}.margin-right-xxxl{margin-right:48px}.margin-bottom-xxs{margin-bottom:2px}.margin-bottom-xs{margin-bottom:4px}.margin-bottom-s{margin-bottom:8px}.margin-bottom-base{margin-bottom:16px}.margin-bottom-md{margin-bottom:24px}.margin-bottom-lg{margin-bottom:32px}.margin-bottom-xl{margin-bottom:40px}.margin-bottom-xxl{margin-bottom:48px}.margin-bottom-xxxl{margin-bottom:48px}.margin-top-xxs{margin-top:2px}.margin-top-xs{margin-top:4px}.margin-top-s{margin-top:8px}.margin-top-base{margin-top:16px}.margin-top-md{margin-top:24px}.margin-top-lg{margin-top:32px}.margin-top-xl{margin-top:40px}.margin-top-xxl{margin-top:48px}.margin-top-xxxl{margin-top:48px}.margin-left-xxs{margin-left:2px}.margin-left-xs{margin-left:4px}.margin-left-s{margin-left:8px}.margin-left-base{margin-left:16px}.margin-left-md{margin-left:24px}.margin-left-lg{margin-left:32px}.margin-left-xl{margin-left:40px}.margin-left-xxl{margin-left:48px}.margin-left-xxxl{margin-left:48px}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.padding-none{padding:0}.margin-none{margin:0}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-xxs{margin:16px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.inset-shadow{box-shadow:0px 3px 6px 0px rgba(0,0,0,.1607843137) inset}@media only screen and (min-width: 50em){.wrapper{width:95%;max-width:65em}.column-1{width:8.3333333333%}.column-2{width:4.1666666667%}.column-3{width:2.7777777778%}.column-4{width:2.0833333333%}.column-5{width:1.6666666667%}.column-6{width:1.3888888889%}.column-7{width:1.1904761905%}.column-8{width:1.0416666667%}.column-9{width:.9259259259%}.column-10{width:.8333333333%}.column-11{width:.7575757576%}.column-12{width:.6944444444%}aside{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.myHeader{position:absolute;width:100%;padding:32px}.page-wrapper{height:100%}body{margin:0}.not-full-width{padding:2rem}.cards-container{position:relative;padding:1rem}.cards-container .card-figure{overflow:hidden;background-color:#e0e0e0}.cards-container .card-body{display:flex;flex-direction:column;border-radius:24px;border:solid 1px #e6e6e6;overflow:hidden;height:100%}.cards-container .card-title{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text{padding:1.5em;font-size:1rem}.cards-container .card-link{text-decoration:none}.cards-container .category{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;padding:4px 8px;padding-top:4px;padding-bottom:4px;color:#012a4d;width:fit-content;margin-right:8px;margin-bottom:8px;margin-top:0}button{background:rgba(254,214,216,0);border-radius:4px;border:none;padding:16px;text-transform:uppercase;color:#fff;font-weight:600;font-size:1.125rem;letter-spacing:.02rem;font-variant:small-caps;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-caps:small-caps;position:relative;background-blend-mode:soft-light}button:hover{background:rgba(254,214,216,.32);box-shadow:0px 0px 8px 0px rgba(0,0,0,.1607843137)}button:selected{box-shadow:0px 0px 5px 0px rgba(0,0,0,.1803921569)}button:active{box-shadow:0px 0px 6px 0px rgba(0,0,0,.2117647059) inset;background:rgba(254,214,216,.16)}.button-link:hover{color:#fff}button.btn::before{content:\"\";bottom:0;left:0;right:0;top:0;background:#ff9195;position:absolute;background-blend-mode:normal;z-index:-1;border-radius:4px}.menu-icon-shape{display:flex;flex-direction:column;justify-content:space-between;height:24px;text-align:center}.menu-trigger .button::before{border-radius:100px}.icon-bar{width:24px;height:3.25px;border-radius:8px;background:#012a4d;margin:auto}.icon-bar.middle{visibility:visible}.icon-bar.top,.icon-bar.bottom{transform:none;transition:transform .5s}.menu-icon{width:24px;margin:auto}.icon-button{width:56px;height:56px;background:#fafdff;border:solid #012a4d 3px;padding:0;border-radius:100px}.icon-button:hover{background:#ebf5ff;transition:background .5s}.icon-button.open{background:#053259;transition:background .5s}.icon-button.open .icon-bar{background:#fafdff}.icon-button.open .icon-bar.top{transform:translate(0px, 8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom{transform:translate(0px, -8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle{visibility:hidden}.small-image-frame{overflow:hidden;width:20em}.section-banner{background-color:#f4fc97;padding-right:16px}.menu-trigger{padding:16px 48px;text-align:right}.col-sm-12 .menu-trigger,.col-xs-12 .menu-trigger{padding:16px 20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_core_layout_vue_vue_type_style_index_0_id_061039ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_core_layout_vue_vue_type_style_index_0_id_061039ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_core_layout_vue_vue_type_style_index_0_id_061039ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_core_layout_vue_vue_type_style_index_0_id_061039ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_core_layout_vue_vue_type_style_index_0_id_061039ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".margin-auto[data-v-061039ee]{margin:auto}.margin-top-base[data-v-061039ee]{margin-top:16px}.row[data-v-061039ee]{box-sizing:border-box;margin:0 auto;width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap}.row.reverse[data-v-061039ee]{flex-direction:row-reverse}.row.natural-height[data-v-061039ee]{align-items:flex-start}.row.flex-column[data-v-061039ee]{flex-direction:column}.col[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col.reverse[data-v-061039ee]{flex-direction:column-reverse}.first[data-v-061039ee]{order:-1}.last[data-v-061039ee]{order:1}.align-start[data-v-061039ee]{align-self:flex-start}.align-end[data-v-061039ee]{align-self:flex-end}.align-center[data-v-061039ee]{align-self:center}.align-baseline[data-v-061039ee]{align-self:baseline}.align-stretch[data-v-061039ee]{align-self:stretch}.col-xs[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xs-1[data-v-061039ee]{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xs-offset-1[data-v-061039ee]{margin-left:8.3333333333%}.col-xs-2[data-v-061039ee]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2[data-v-061039ee]{margin-left:16.6666666667%}.col-xs-3[data-v-061039ee]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3[data-v-061039ee]{margin-left:25%}.col-xs-4[data-v-061039ee]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4[data-v-061039ee]{margin-left:33.3333333333%}.col-xs-5[data-v-061039ee]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5[data-v-061039ee]{margin-left:41.6666666667%}.col-xs-6[data-v-061039ee]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6[data-v-061039ee]{margin-left:50%}.col-xs-7[data-v-061039ee]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7[data-v-061039ee]{margin-left:58.3333333333%}.col-xs-8[data-v-061039ee]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8[data-v-061039ee]{margin-left:66.6666666667%}.col-xs-9[data-v-061039ee]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9[data-v-061039ee]{margin-left:75%}.col-xs-10[data-v-061039ee]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10[data-v-061039ee]{margin-left:83.3333333333%}.col-xs-11[data-v-061039ee]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11[data-v-061039ee]{margin-left:91.6666666667%}.col-xs-12[data-v-061039ee]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12[data-v-061039ee]{margin-left:100%}.row.start-xs[data-v-061039ee]{justify-content:flex-start}.row.center-xs[data-v-061039ee]{justify-content:center}.row.end-xs[data-v-061039ee]{justify-content:flex-end}.row.top-xs[data-v-061039ee]{align-items:flex-start}.row.middle-xs[data-v-061039ee]{align-items:center}.row.bottom-xs[data-v-061039ee]{align-items:flex-end}.row.around-xs[data-v-061039ee]{justify-content:space-around}.row.between-xs[data-v-061039ee]{justify-content:space-between}.first-xs[data-v-061039ee]{order:-1}.last-xs[data-v-061039ee]{order:1}@media only screen and (min-width: 41rem){.col-sm[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-sm-1[data-v-061039ee]{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-sm-offset-1[data-v-061039ee]{margin-left:8.3333333333%}.col-sm-2[data-v-061039ee]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2[data-v-061039ee]{margin-left:16.6666666667%}.col-sm-3[data-v-061039ee]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3[data-v-061039ee]{margin-left:25%}.col-sm-4[data-v-061039ee]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4[data-v-061039ee]{margin-left:33.3333333333%}.col-sm-5[data-v-061039ee]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5[data-v-061039ee]{margin-left:41.6666666667%}.col-sm-6[data-v-061039ee]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6[data-v-061039ee]{margin-left:50%}.col-sm-7[data-v-061039ee]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7[data-v-061039ee]{margin-left:58.3333333333%}.col-sm-8[data-v-061039ee]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8[data-v-061039ee]{margin-left:66.6666666667%}.col-sm-9[data-v-061039ee]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9[data-v-061039ee]{margin-left:75%}.col-sm-10[data-v-061039ee]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10[data-v-061039ee]{margin-left:83.3333333333%}.col-sm-11[data-v-061039ee]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11[data-v-061039ee]{margin-left:91.6666666667%}.col-sm-12[data-v-061039ee]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12[data-v-061039ee]{margin-left:100%}.row.start-sm[data-v-061039ee]{justify-content:flex-start}.row.center-sm[data-v-061039ee]{justify-content:center}.row.end-sm[data-v-061039ee]{justify-content:flex-end}.row.top-sm[data-v-061039ee]{align-items:flex-start}.row.middle-sm[data-v-061039ee]{align-items:center}.row.bottom-sm[data-v-061039ee]{align-items:flex-end}.row.around-sm[data-v-061039ee]{justify-content:space-around}.row.between-sm[data-v-061039ee]{justify-content:space-between}.first-sm[data-v-061039ee]{order:-1}.last-sm[data-v-061039ee]{order:1}}@media only screen and (min-width: 65rem){.col-md[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-md-1[data-v-061039ee]{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-md-offset-1[data-v-061039ee]{margin-left:8.3333333333%}.col-md-2[data-v-061039ee]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2[data-v-061039ee]{margin-left:16.6666666667%}.col-md-3[data-v-061039ee]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3[data-v-061039ee]{margin-left:25%}.col-md-4[data-v-061039ee]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4[data-v-061039ee]{margin-left:33.3333333333%}.col-md-5[data-v-061039ee]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5[data-v-061039ee]{margin-left:41.6666666667%}.col-md-6[data-v-061039ee]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6[data-v-061039ee]{margin-left:50%}.col-md-7[data-v-061039ee]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7[data-v-061039ee]{margin-left:58.3333333333%}.col-md-8[data-v-061039ee]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8[data-v-061039ee]{margin-left:66.6666666667%}.col-md-9[data-v-061039ee]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9[data-v-061039ee]{margin-left:75%}.col-md-10[data-v-061039ee]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10[data-v-061039ee]{margin-left:83.3333333333%}.col-md-11[data-v-061039ee]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11[data-v-061039ee]{margin-left:91.6666666667%}.col-md-12[data-v-061039ee]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12[data-v-061039ee]{margin-left:100%}.row.start-md[data-v-061039ee]{justify-content:flex-start}.row.center-md[data-v-061039ee]{justify-content:center}.row.end-md[data-v-061039ee]{justify-content:flex-end}.row.top-md[data-v-061039ee]{align-items:flex-start}.row.middle-md[data-v-061039ee]{align-items:center}.row.bottom-md[data-v-061039ee]{align-items:flex-end}.row.around-md[data-v-061039ee]{justify-content:space-around}.row.between-md[data-v-061039ee]{justify-content:space-between}.first-md[data-v-061039ee]{order:-1}.last-md[data-v-061039ee]{order:1}}@media only screen and (min-width: 101rem){.col-lg[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-lg-1[data-v-061039ee]{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-lg-offset-1[data-v-061039ee]{margin-left:8.3333333333%}.col-lg-2[data-v-061039ee]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2[data-v-061039ee]{margin-left:16.6666666667%}.col-lg-3[data-v-061039ee]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3[data-v-061039ee]{margin-left:25%}.col-lg-4[data-v-061039ee]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4[data-v-061039ee]{margin-left:33.3333333333%}.col-lg-5[data-v-061039ee]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5[data-v-061039ee]{margin-left:41.6666666667%}.col-lg-6[data-v-061039ee]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6[data-v-061039ee]{margin-left:50%}.col-lg-7[data-v-061039ee]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7[data-v-061039ee]{margin-left:58.3333333333%}.col-lg-8[data-v-061039ee]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8[data-v-061039ee]{margin-left:66.6666666667%}.col-lg-9[data-v-061039ee]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9[data-v-061039ee]{margin-left:75%}.col-lg-10[data-v-061039ee]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10[data-v-061039ee]{margin-left:83.3333333333%}.col-lg-11[data-v-061039ee]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11[data-v-061039ee]{margin-left:91.6666666667%}.col-lg-12[data-v-061039ee]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12[data-v-061039ee]{margin-left:100%}.row.start-lg[data-v-061039ee]{justify-content:flex-start}.row.center-lg[data-v-061039ee]{justify-content:center}.row.end-lg[data-v-061039ee]{justify-content:flex-end}.row.top-lg[data-v-061039ee]{align-items:flex-start}.row.middle-lg[data-v-061039ee]{align-items:center}.row.bottom-lg[data-v-061039ee]{align-items:flex-end}.row.around-lg[data-v-061039ee]{justify-content:space-around}.row.between-lg[data-v-061039ee]{justify-content:space-between}.first-lg[data-v-061039ee]{order:-1}.last-lg[data-v-061039ee]{order:1}}@media only screen and (min-width: 121rem){.col-xl[data-v-061039ee]{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xl-1[data-v-061039ee]{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xl-offset-1[data-v-061039ee]{margin-left:8.3333333333%}.col-xl-2[data-v-061039ee]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2[data-v-061039ee]{margin-left:16.6666666667%}.col-xl-3[data-v-061039ee]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3[data-v-061039ee]{margin-left:25%}.col-xl-4[data-v-061039ee]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4[data-v-061039ee]{margin-left:33.3333333333%}.col-xl-5[data-v-061039ee]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5[data-v-061039ee]{margin-left:41.6666666667%}.col-xl-6[data-v-061039ee]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6[data-v-061039ee]{margin-left:50%}.col-xl-7[data-v-061039ee]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7[data-v-061039ee]{margin-left:58.3333333333%}.col-xl-8[data-v-061039ee]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8[data-v-061039ee]{margin-left:66.6666666667%}.col-xl-9[data-v-061039ee]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9[data-v-061039ee]{margin-left:75%}.col-xl-10[data-v-061039ee]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10[data-v-061039ee]{margin-left:83.3333333333%}.col-xl-11[data-v-061039ee]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11[data-v-061039ee]{margin-left:91.6666666667%}.col-xl-12[data-v-061039ee]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12[data-v-061039ee]{margin-left:100%}.row.start-xl[data-v-061039ee]{justify-content:flex-start}.row.center-xl[data-v-061039ee]{justify-content:center}.row.end-xl[data-v-061039ee]{justify-content:flex-end}.row.top-xl[data-v-061039ee]{align-items:flex-start}.row.middle-xl[data-v-061039ee]{align-items:center}.row.bottom-xl[data-v-061039ee]{align-items:flex-end}.row.around-xl[data-v-061039ee]{justify-content:space-around}.row.between-xl[data-v-061039ee]{justify-content:space-between}.first-xl[data-v-061039ee]{order:-1}.last-xl[data-v-061039ee]{order:1}}.col-gutter-lr[data-v-061039ee]{padding:0 1rem}.col-no-gutter[data-v-061039ee]{padding:0}.show[data-v-061039ee]{display:flex !important}.row.show[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide[data-v-061039ee]{display:none !important}.show-xs[data-v-061039ee]{display:flex !important}.row.show-xs[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs[data-v-061039ee]{display:none !important}@media only screen and (max-width: 40rem){.show-xs-only[data-v-061039ee]{display:flex !important}.row.show-xs-only[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs-only[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 41rem){.show-sm[data-v-061039ee]{display:flex !important}.row.show-sm[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 41rem)and (max-width: 64rem){.show-sm-only[data-v-061039ee]{display:flex !important}.row.show-sm-only[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm-only[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 65rem){.show-md[data-v-061039ee]{display:flex !important}.row.show-md[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 65rem)and (max-width: 100rem){.show-md-only[data-v-061039ee]{display:flex !important}.row.show-md-only[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md-only[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 101rem){.show-lg[data-v-061039ee]{display:flex !important}.row.show-lg[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 101rem)and (max-width: 120rem){.show-lg-only[data-v-061039ee]{display:flex !important}.row.show-lg-only[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg-only[data-v-061039ee]{display:none !important}}@media only screen and (min-width: 121rem){.show-xl[data-v-061039ee]{display:flex !important}.row.show-xl[data-v-061039ee]{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xl[data-v-061039ee]{display:none !important}}h1[data-v-061039ee],.header1[data-v-061039ee],.heading1[data-v-061039ee]{font-size:1.875rem;font-weight:600;letter-spacing:.5%;margin:0}h2[data-v-061039ee],.header2[data-v-061039ee],.heading2[data-v-061039ee]{font-size:1.75rem;font-weight:600;letter-spacing:.5%;margin:0}h3[data-v-061039ee],.header3[data-v-061039ee],.heading3[data-v-061039ee]{font-size:1.5rem;font-weight:600;letter-spacing:.5%}h4[data-v-061039ee],.header4[data-v-061039ee],.heading4[data-v-061039ee]{font-size:1.25rem;font-weight:700;letter-spacing:.5%;margin:0}h5[data-v-061039ee],.header5[data-v-061039ee],.heading5[data-v-061039ee]{font-size:1.125rem;font-weight:600;letter-spacing:.5%;margin:0}h6[data-v-061039ee],.header6[data-v-061039ee],.heading6[data-v-061039ee]{font-size:1rem;font-weight:600;letter-spacing:.5%;margin:0}p[data-v-061039ee],.p[data-v-061039ee],.body-text[data-v-061039ee]{font-size:1rem;font-weight:400;letter-spacing:.5%;margin:0}.small-body-text[data-v-061039ee]{font-size:.875rem;font-weight:400;letter-spacing:.5%;margin:0}.smallest-body-text[data-v-061039ee]{font-size:.75rem;font-weight:400;letter-spacing:.5%;margin:0}.bold[data-v-061039ee]{font-weight:700}.semi-bold[data-v-061039ee]{font-weight:600}.regular[data-v-061039ee]{font-weight:400}a[data-v-061039ee]{color:#012a4d}a[data-v-061039ee]:hover{color:#ff9195;font-weight:600}.nav-link[data-v-061039ee]{color:#012a4d}.nav-link[data-v-061039ee]:hover{color:#012a4d;font-weight:600}.tertiary-text[data-v-061039ee]{color:#bbc909}.display-text[data-v-061039ee]{color:#bbc909;font-size:7rem}.hero-text[data-v-061039ee]{color:#012a4d;font-size:5rem;padding-bottom:.625rem;font-weight:600;margin:0;line-height:6rem}.sub-header[data-v-061039ee]{line-height:2.875rem;font-size:2.25rem;padding-bottom:.625rem;color:#012a4d;font-weight:500}.header-content[data-v-061039ee]{margin-top:18%;margin-left:14%}.rounded[data-v-061039ee]{border-radius:24px}.border-weight-base[data-v-061039ee]{border-width:3px}.border-color-primary[data-v-061039ee]{border-color:#012a4d}.backdrop-tertiary-lightest[data-v-061039ee]{background-color:#fdffe6}div[data-v-061039ee]{box-sizing:border-box}.padding-xxs[data-v-061039ee]{padding:2px}.padding-xs[data-v-061039ee]{padding:4px}.padding-s[data-v-061039ee]{padding:8px}.padding-base[data-v-061039ee]{padding:16px}.padding-md[data-v-061039ee]{padding:24px}.padding-lg[data-v-061039ee]{padding:32px}.padding-xl[data-v-061039ee]{padding:40px}.padding-xxl[data-v-061039ee]{padding:48px}.padding-xxxl[data-v-061039ee]{padding:56px}.padding-y-xxs[data-v-061039ee]{padding-top:2px;padding-bottom:2px}.padding-y-xs[data-v-061039ee]{padding-top:4px;padding-bottom:4px}.padding-y-s[data-v-061039ee]{padding-top:8px;padding-bottom:8px}.padding-y-base[data-v-061039ee]{padding-top:16px;padding-bottom:16px}.padding-y-md[data-v-061039ee]{padding-top:24px;padding-bottom:24px}.padding-y-lg[data-v-061039ee]{padding-top:32px;padding-bottom:32px}.padding-y-xl[data-v-061039ee]{padding-top:40px;padding-bottom:40px}.padding-y-xxl[data-v-061039ee]{padding-top:48px;padding-bottom:48px}.padding-y-xxxl[data-v-061039ee]{padding-top:56px;padding-bottom:48px}.padding-x-xxs[data-v-061039ee]{padding-left:2px;padding-right:2px}.padding-x-xs[data-v-061039ee]{padding-left:4px;padding-right:4px}.padding-x-s[data-v-061039ee]{padding-left:8px;padding-right:8px}.padding-x-base[data-v-061039ee]{padding-left:16px;padding-right:16px}.padding-x-md[data-v-061039ee]{padding-left:24px;padding-right:24px}.padding-x-lg[data-v-061039ee]{padding-left:32px;padding-right:32px}.padding-x-xl[data-v-061039ee]{padding-left:40px;padding-right:40px}.padding-x-xxl[data-v-061039ee]{padding-left:48px;padding-right:48px}.padding-x-xxxl[data-v-061039ee]{padding-left:56px;padding-right:48px}.padding-right-xxs[data-v-061039ee]{padding-right:2px}.padding-right-xs[data-v-061039ee]{padding-right:4px}.padding-right-s[data-v-061039ee]{padding-right:8px}.padding-right-base[data-v-061039ee]{padding-right:16px}.padding-right-md[data-v-061039ee]{padding-right:24px}.padding-right-lg[data-v-061039ee]{padding-right:32px}.padding-right-xl[data-v-061039ee]{padding-right:40px}.padding-right-xxl[data-v-061039ee]{padding-right:48px}.padding-right-xxxl[data-v-061039ee]{padding-right:48px}.padding-bottom-xxs[data-v-061039ee]{padding-bottom:2px}.padding-bottom-xs[data-v-061039ee]{padding-bottom:4px}.padding-bottom-s[data-v-061039ee]{padding-bottom:8px}.padding-bottom-base[data-v-061039ee]{padding-bottom:16px}.padding-bottom-md[data-v-061039ee]{padding-bottom:24px}.padding-bottom-lg[data-v-061039ee]{padding-bottom:32px}.padding-bottom-xl[data-v-061039ee]{padding-bottom:40px}.padding-bottom-xxl[data-v-061039ee]{padding-bottom:48px}.padding-bottom-xxxl[data-v-061039ee]{padding-bottom:48px}.padding-top-xxs[data-v-061039ee]{padding-top:2px}.padding-top-xs[data-v-061039ee]{padding-top:4px}.padding-top-s[data-v-061039ee]{padding-top:8px}.padding-top-base[data-v-061039ee]{padding-top:16px}.padding-top-md[data-v-061039ee]{padding-top:24px}.padding-top-lg[data-v-061039ee]{padding-top:32px}.padding-top-xl[data-v-061039ee]{padding-top:40px}.padding-top-xxl[data-v-061039ee]{padding-top:48px}.padding-top-xxxl[data-v-061039ee]{padding-top:48px}.padding-left-xxs[data-v-061039ee]{padding-left:2px}.padding-left-xs[data-v-061039ee]{padding-left:4px}.padding-left-s[data-v-061039ee]{padding-left:8px}.padding-left-base[data-v-061039ee]{padding-left:16px}.padding-left-md[data-v-061039ee]{padding-left:24px}.padding-left-lg[data-v-061039ee]{padding-left:32px}.padding-left-xl[data-v-061039ee]{padding-left:40px}.padding-left-xxl[data-v-061039ee]{padding-left:48px}.padding-left-xxxl[data-v-061039ee]{padding-left:48px}.margin-xxs[data-v-061039ee]{margin:2px}.margin-xs[data-v-061039ee]{margin:4px}.margin-s[data-v-061039ee]{margin:8px}.margin-base[data-v-061039ee]{margin:16px}.margin-md[data-v-061039ee]{margin:24px}.margin-lg[data-v-061039ee]{margin:32px}.margin-xl[data-v-061039ee]{margin:40px}.margin-xxl[data-v-061039ee]{margin:48px}.margin-xxxl[data-v-061039ee]{margin:56px}.margin-y-xxs[data-v-061039ee]{margin-top:2px;margin-bottom:2px}.margin-y-xs[data-v-061039ee]{margin-top:4px;margin-bottom:4px}.margin-y-s[data-v-061039ee]{margin-top:8px;margin-bottom:8px}.margin-y-xxs[data-v-061039ee]{margin-top:16px;margin-bottom:16px}.margin-y-lg[data-v-061039ee]{margin-top:32px;margin-bottom:32px}.margin-y-xl[data-v-061039ee]{margin-top:40px;margin-bottom:40px}.margin-y-xxl[data-v-061039ee]{margin-top:48px;margin-bottom:48px}.margin-y-xxxl[data-v-061039ee]{margin-top:56px;margin-bottom:48px}.margin-x-xxs[data-v-061039ee]{margin-left:2px;margin-right:2px}.margin-x-xs[data-v-061039ee]{margin-left:4px;margin-right:4px}.margin-x-s[data-v-061039ee]{margin-left:8px;margin-right:8px}.margin-x-base[data-v-061039ee]{margin-left:16px;margin-right:16px}.margin-x-md[data-v-061039ee]{margin-left:24px;margin-right:24px}.margin-x-lg[data-v-061039ee]{margin-left:32px;margin-right:32px}.margin-x-xl[data-v-061039ee]{margin-left:40px;margin-right:40px}.margin-x-xxl[data-v-061039ee]{margin-left:48px;margin-right:48px}.margin-x-xxxl[data-v-061039ee]{margin-left:56px;margin-right:48px}.margin-right-xxs[data-v-061039ee]{margin-right:2px}.margin-right-xs[data-v-061039ee]{margin-right:4px}.margin-right-s[data-v-061039ee]{margin-right:8px}.margin-right-base[data-v-061039ee]{margin-right:16px}.margin-right-md[data-v-061039ee]{margin-right:24px}.margin-right-lg[data-v-061039ee]{margin-right:32px}.margin-right-xl[data-v-061039ee]{margin-right:40px}.margin-right-xxl[data-v-061039ee]{margin-right:48px}.margin-right-xxxl[data-v-061039ee]{margin-right:48px}.margin-bottom-xxs[data-v-061039ee]{margin-bottom:2px}.margin-bottom-xs[data-v-061039ee]{margin-bottom:4px}.margin-bottom-s[data-v-061039ee]{margin-bottom:8px}.margin-bottom-base[data-v-061039ee]{margin-bottom:16px}.margin-bottom-md[data-v-061039ee]{margin-bottom:24px}.margin-bottom-lg[data-v-061039ee]{margin-bottom:32px}.margin-bottom-xl[data-v-061039ee]{margin-bottom:40px}.margin-bottom-xxl[data-v-061039ee]{margin-bottom:48px}.margin-bottom-xxxl[data-v-061039ee]{margin-bottom:48px}.margin-top-xxs[data-v-061039ee]{margin-top:2px}.margin-top-xs[data-v-061039ee]{margin-top:4px}.margin-top-s[data-v-061039ee]{margin-top:8px}.margin-top-base[data-v-061039ee]{margin-top:16px}.margin-top-md[data-v-061039ee]{margin-top:24px}.margin-top-lg[data-v-061039ee]{margin-top:32px}.margin-top-xl[data-v-061039ee]{margin-top:40px}.margin-top-xxl[data-v-061039ee]{margin-top:48px}.margin-top-xxxl[data-v-061039ee]{margin-top:48px}.margin-left-xxs[data-v-061039ee]{margin-left:2px}.margin-left-xs[data-v-061039ee]{margin-left:4px}.margin-left-s[data-v-061039ee]{margin-left:8px}.margin-left-base[data-v-061039ee]{margin-left:16px}.margin-left-md[data-v-061039ee]{margin-left:24px}.margin-left-lg[data-v-061039ee]{margin-left:32px}.margin-left-xl[data-v-061039ee]{margin-left:40px}.margin-left-xxl[data-v-061039ee]{margin-left:48px}.margin-left-xxxl[data-v-061039ee]{margin-left:48px}.margin-auto[data-v-061039ee]{margin:auto}.margin-top-base[data-v-061039ee]{margin-top:16px}.padding-none[data-v-061039ee]{padding:0}.margin-none[data-v-061039ee]{margin:0}.margin-xxs[data-v-061039ee]{margin:2px}.margin-xs[data-v-061039ee]{margin:4px}.margin-s[data-v-061039ee]{margin:8px}.margin-xxs[data-v-061039ee]{margin:16px}.margin-lg[data-v-061039ee]{margin:32px}.margin-xl[data-v-061039ee]{margin:40px}.margin-xxl[data-v-061039ee]{margin:48px}.margin-xxxl[data-v-061039ee]{margin:56px}.inset-shadow[data-v-061039ee]{box-shadow:0px 3px 6px 0px rgba(0,0,0,.1607843137) inset}@media only screen and (min-width: 50em){.wrapper[data-v-061039ee]{width:95%;max-width:65em}.column-1[data-v-061039ee]{width:8.3333333333%}.column-2[data-v-061039ee]{width:4.1666666667%}.column-3[data-v-061039ee]{width:2.7777777778%}.column-4[data-v-061039ee]{width:2.0833333333%}.column-5[data-v-061039ee]{width:1.6666666667%}.column-6[data-v-061039ee]{width:1.3888888889%}.column-7[data-v-061039ee]{width:1.1904761905%}.column-8[data-v-061039ee]{width:1.0416666667%}.column-9[data-v-061039ee]{width:.9259259259%}.column-10[data-v-061039ee]{width:.8333333333%}.column-11[data-v-061039ee]{width:.7575757576%}.column-12[data-v-061039ee]{width:.6944444444%}aside[data-v-061039ee]{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto[data-v-061039ee]{margin:auto}.margin-top-base[data-v-061039ee]{margin-top:16px}.myHeader[data-v-061039ee]{position:absolute;width:100%;padding:32px}.page-wrapper[data-v-061039ee]{height:100%}body[data-v-061039ee]{margin:0}.not-full-width[data-v-061039ee]{padding:2rem}.cards-container[data-v-061039ee]{position:relative;padding:1rem}.cards-container .card-figure[data-v-061039ee]{overflow:hidden;background-color:#e0e0e0}.cards-container .card-body[data-v-061039ee]{display:flex;flex-direction:column;border-radius:24px;border:solid 1px #e6e6e6;overflow:hidden;height:100%}.cards-container .card-title[data-v-061039ee]{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text[data-v-061039ee]{padding:1.5em;font-size:1rem}.cards-container .card-link[data-v-061039ee]{text-decoration:none}.cards-container .category[data-v-061039ee]{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;padding:4px 8px;padding-top:4px;padding-bottom:4px;color:#012a4d;width:fit-content;margin-right:8px;margin-bottom:8px;margin-top:0}button[data-v-061039ee]{background:rgba(254,214,216,0);border-radius:4px;border:none;padding:16px;text-transform:uppercase;color:#fff;font-weight:600;font-size:1.125rem;letter-spacing:.02rem;font-variant:small-caps;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-caps:small-caps;position:relative;background-blend-mode:soft-light}button[data-v-061039ee]:hover{background:rgba(254,214,216,.32);box-shadow:0px 0px 8px 0px rgba(0,0,0,.1607843137)}button[data-v-061039ee]:selected{box-shadow:0px 0px 5px 0px rgba(0,0,0,.1803921569)}button[data-v-061039ee]:active{box-shadow:0px 0px 6px 0px rgba(0,0,0,.2117647059) inset;background:rgba(254,214,216,.16)}.button-link[data-v-061039ee]:hover{color:#fff}button.btn[data-v-061039ee]::before{content:\"\";bottom:0;left:0;right:0;top:0;background:#ff9195;position:absolute;background-blend-mode:normal;z-index:-1;border-radius:4px}.menu-icon-shape[data-v-061039ee]{display:flex;flex-direction:column;justify-content:space-between;height:24px;text-align:center}.menu-trigger .button[data-v-061039ee]::before{border-radius:100px}.icon-bar[data-v-061039ee]{width:24px;height:3.25px;border-radius:8px;background:#012a4d;margin:auto}.icon-bar.middle[data-v-061039ee]{visibility:visible}.icon-bar.top[data-v-061039ee],.icon-bar.bottom[data-v-061039ee]{transform:none;transition:transform .5s}.menu-icon[data-v-061039ee]{width:24px;margin:auto}.icon-button[data-v-061039ee]{width:56px;height:56px;background:#fafdff;border:solid #012a4d 3px;padding:0;border-radius:100px}.icon-button[data-v-061039ee]:hover{background:#ebf5ff;transition:background .5s}.icon-button.open[data-v-061039ee]{background:#053259;transition:background .5s}.icon-button.open .icon-bar[data-v-061039ee]{background:#fafdff}.icon-button.open .icon-bar.top[data-v-061039ee]{transform:translate(0px, 8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom[data-v-061039ee]{transform:translate(0px, -8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle[data-v-061039ee]{visibility:hidden}.small-image-frame[data-v-061039ee]{overflow:hidden;width:20em}.section-banner[data-v-061039ee]{background-color:#f4fc97;padding-right:16px}.page-header[data-v-061039ee]{padding:0;position:fixed;background:#fafdff;box-shadow:3px 0px 12px rgba(0,0,0,.16);justify-content:space-between}html[data-v-061039ee]{scroll-behavior:smooth}.logo[data-v-061039ee]{max-width:120px;padding:24px 48px}main.core[data-v-061039ee]{margin-top:96px}div.logo[data-v-061039ee]{width:100%;max-width:120px;padding:24px 48px}img.logo[data-v-061039ee]{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hero_layout_vue_vue_type_style_index_0_id_4515adb4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hero_layout_vue_vue_type_style_index_0_id_4515adb4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hero_layout_vue_vue_type_style_index_0_id_4515adb4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hero_layout_vue_vue_type_style_index_0_id_4515adb4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hero_layout_vue_vue_type_style_index_0_id_4515adb4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".margin-auto{margin:auto}.margin-top-base{margin-top:16px}.row{box-sizing:border-box;margin:0 auto;width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap}.row.reverse{flex-direction:row-reverse}.row.natural-height{align-items:flex-start}.row.flex-column{flex-direction:column}.col{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col.reverse{flex-direction:column-reverse}.first{order:-1}.last{order:1}.align-start{align-self:flex-start}.align-end{align-self:flex-end}.align-center{align-self:center}.align-baseline{align-self:baseline}.align-stretch{align-self:stretch}.col-xs{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xs-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xs-offset-1{margin-left:8.3333333333%}.col-xs-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2{margin-left:16.6666666667%}.col-xs-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3{margin-left:25%}.col-xs-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4{margin-left:33.3333333333%}.col-xs-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5{margin-left:41.6666666667%}.col-xs-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6{margin-left:50%}.col-xs-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7{margin-left:58.3333333333%}.col-xs-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8{margin-left:66.6666666667%}.col-xs-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9{margin-left:75%}.col-xs-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10{margin-left:83.3333333333%}.col-xs-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11{margin-left:91.6666666667%}.col-xs-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12{margin-left:100%}.row.start-xs{justify-content:flex-start}.row.center-xs{justify-content:center}.row.end-xs{justify-content:flex-end}.row.top-xs{align-items:flex-start}.row.middle-xs{align-items:center}.row.bottom-xs{align-items:flex-end}.row.around-xs{justify-content:space-around}.row.between-xs{justify-content:space-between}.first-xs{order:-1}.last-xs{order:1}@media only screen and (min-width: 41rem){.col-sm{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-sm-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3{margin-left:25%}.col-sm-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6{margin-left:50%}.col-sm-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9{margin-left:75%}.col-sm-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12{margin-left:100%}.row.start-sm{justify-content:flex-start}.row.center-sm{justify-content:center}.row.end-sm{justify-content:flex-end}.row.top-sm{align-items:flex-start}.row.middle-sm{align-items:center}.row.bottom-sm{align-items:flex-end}.row.around-sm{justify-content:space-around}.row.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}@media only screen and (min-width: 65rem){.col-md{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-md-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3{margin-left:25%}.col-md-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6{margin-left:50%}.col-md-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9{margin-left:75%}.col-md-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12{margin-left:100%}.row.start-md{justify-content:flex-start}.row.center-md{justify-content:center}.row.end-md{justify-content:flex-end}.row.top-md{align-items:flex-start}.row.middle-md{align-items:center}.row.bottom-md{align-items:flex-end}.row.around-md{justify-content:space-around}.row.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}@media only screen and (min-width: 101rem){.col-lg{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-lg-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3{margin-left:25%}.col-lg-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6{margin-left:50%}.col-lg-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9{margin-left:75%}.col-lg-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12{margin-left:100%}.row.start-lg{justify-content:flex-start}.row.center-lg{justify-content:center}.row.end-lg{justify-content:flex-end}.row.top-lg{align-items:flex-start}.row.middle-lg{align-items:center}.row.bottom-lg{align-items:flex-end}.row.around-lg{justify-content:space-around}.row.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}@media only screen and (min-width: 121rem){.col-xl{box-sizing:border-box;flex-grow:1;flex-basis:0;max-width:100%;padding:1rem}.col-xl-1{box-sizing:border-box;flex-basis:8.3333333333%;max-width:8.3333333333%;padding:1rem}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3{margin-left:25%}.col-xl-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6{margin-left:50%}.col-xl-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9{margin-left:75%}.col-xl-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12{margin-left:100%}.row.start-xl{justify-content:flex-start}.row.center-xl{justify-content:center}.row.end-xl{justify-content:flex-end}.row.top-xl{align-items:flex-start}.row.middle-xl{align-items:center}.row.bottom-xl{align-items:flex-end}.row.around-xl{justify-content:space-around}.row.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}.col-gutter-lr{padding:0 1rem}.col-no-gutter{padding:0}.show{display:flex !important}.row.show{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide{display:none !important}.show-xs{display:flex !important}.row.show-xs{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs{display:none !important}@media only screen and (max-width: 40rem){.show-xs-only{display:flex !important}.row.show-xs-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xs-only{display:none !important}}@media only screen and (min-width: 41rem){.show-sm{display:flex !important}.row.show-sm{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm{display:none !important}}@media only screen and (min-width: 41rem)and (max-width: 64rem){.show-sm-only{display:flex !important}.row.show-sm-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-sm-only{display:none !important}}@media only screen and (min-width: 65rem){.show-md{display:flex !important}.row.show-md{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md{display:none !important}}@media only screen and (min-width: 65rem)and (max-width: 100rem){.show-md-only{display:flex !important}.row.show-md-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-md-only{display:none !important}}@media only screen and (min-width: 101rem){.show-lg{display:flex !important}.row.show-lg{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg{display:none !important}}@media only screen and (min-width: 101rem)and (max-width: 120rem){.show-lg-only{display:flex !important}.row.show-lg-only{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-lg-only{display:none !important}}@media only screen and (min-width: 121rem){.show-xl{display:flex !important}.row.show-xl{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.hide-xl{display:none !important}}h1,.header1,.heading1{font-size:1.875rem;font-weight:600;letter-spacing:.5%;margin:0}h2,.header2,.heading2{font-size:1.75rem;font-weight:600;letter-spacing:.5%;margin:0}h3,.header3,.heading3{font-size:1.5rem;font-weight:600;letter-spacing:.5%}h4,.header4,.heading4{font-size:1.25rem;font-weight:700;letter-spacing:.5%;margin:0}h5,.header5,.heading5{font-size:1.125rem;font-weight:600;letter-spacing:.5%;margin:0}h6,.header6,.heading6{font-size:1rem;font-weight:600;letter-spacing:.5%;margin:0}p,.p,.body-text{font-size:1rem;font-weight:400;letter-spacing:.5%;margin:0}.small-body-text{font-size:.875rem;font-weight:400;letter-spacing:.5%;margin:0}.smallest-body-text{font-size:.75rem;font-weight:400;letter-spacing:.5%;margin:0}.bold{font-weight:700}.semi-bold{font-weight:600}.regular{font-weight:400}a{color:#012a4d}a:hover{color:#ff9195;font-weight:600}.nav-link{color:#012a4d}.nav-link:hover{color:#012a4d;font-weight:600}.tertiary-text{color:#bbc909}.display-text{color:#bbc909;font-size:7rem}.hero-text{color:#012a4d;font-size:5rem;padding-bottom:.625rem;font-weight:600;margin:0;line-height:6rem}.sub-header{line-height:2.875rem;font-size:2.25rem;padding-bottom:.625rem;color:#012a4d;font-weight:500}.header-content{margin-top:18%;margin-left:14%}.rounded{border-radius:24px}.border-weight-base{border-width:3px}.border-color-primary{border-color:#012a4d}.backdrop-tertiary-lightest{background-color:#fdffe6}div{box-sizing:border-box}.padding-xxs{padding:2px}.padding-xs{padding:4px}.padding-s{padding:8px}.padding-base{padding:16px}.padding-md{padding:24px}.padding-lg{padding:32px}.padding-xl{padding:40px}.padding-xxl{padding:48px}.padding-xxxl{padding:56px}.padding-y-xxs{padding-top:2px;padding-bottom:2px}.padding-y-xs{padding-top:4px;padding-bottom:4px}.padding-y-s{padding-top:8px;padding-bottom:8px}.padding-y-base{padding-top:16px;padding-bottom:16px}.padding-y-md{padding-top:24px;padding-bottom:24px}.padding-y-lg{padding-top:32px;padding-bottom:32px}.padding-y-xl{padding-top:40px;padding-bottom:40px}.padding-y-xxl{padding-top:48px;padding-bottom:48px}.padding-y-xxxl{padding-top:56px;padding-bottom:48px}.padding-x-xxs{padding-left:2px;padding-right:2px}.padding-x-xs{padding-left:4px;padding-right:4px}.padding-x-s{padding-left:8px;padding-right:8px}.padding-x-base{padding-left:16px;padding-right:16px}.padding-x-md{padding-left:24px;padding-right:24px}.padding-x-lg{padding-left:32px;padding-right:32px}.padding-x-xl{padding-left:40px;padding-right:40px}.padding-x-xxl{padding-left:48px;padding-right:48px}.padding-x-xxxl{padding-left:56px;padding-right:48px}.padding-right-xxs{padding-right:2px}.padding-right-xs{padding-right:4px}.padding-right-s{padding-right:8px}.padding-right-base{padding-right:16px}.padding-right-md{padding-right:24px}.padding-right-lg{padding-right:32px}.padding-right-xl{padding-right:40px}.padding-right-xxl{padding-right:48px}.padding-right-xxxl{padding-right:48px}.padding-bottom-xxs{padding-bottom:2px}.padding-bottom-xs{padding-bottom:4px}.padding-bottom-s{padding-bottom:8px}.padding-bottom-base{padding-bottom:16px}.padding-bottom-md{padding-bottom:24px}.padding-bottom-lg{padding-bottom:32px}.padding-bottom-xl{padding-bottom:40px}.padding-bottom-xxl{padding-bottom:48px}.padding-bottom-xxxl{padding-bottom:48px}.padding-top-xxs{padding-top:2px}.padding-top-xs{padding-top:4px}.padding-top-s{padding-top:8px}.padding-top-base{padding-top:16px}.padding-top-md{padding-top:24px}.padding-top-lg{padding-top:32px}.padding-top-xl{padding-top:40px}.padding-top-xxl{padding-top:48px}.padding-top-xxxl{padding-top:48px}.padding-left-xxs{padding-left:2px}.padding-left-xs{padding-left:4px}.padding-left-s{padding-left:8px}.padding-left-base{padding-left:16px}.padding-left-md{padding-left:24px}.padding-left-lg{padding-left:32px}.padding-left-xl{padding-left:40px}.padding-left-xxl{padding-left:48px}.padding-left-xxxl{padding-left:48px}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-base{margin:16px}.margin-md{margin:24px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.margin-y-xxs{margin-top:2px;margin-bottom:2px}.margin-y-xs{margin-top:4px;margin-bottom:4px}.margin-y-s{margin-top:8px;margin-bottom:8px}.margin-y-xxs{margin-top:16px;margin-bottom:16px}.margin-y-lg{margin-top:32px;margin-bottom:32px}.margin-y-xl{margin-top:40px;margin-bottom:40px}.margin-y-xxl{margin-top:48px;margin-bottom:48px}.margin-y-xxxl{margin-top:56px;margin-bottom:48px}.margin-x-xxs{margin-left:2px;margin-right:2px}.margin-x-xs{margin-left:4px;margin-right:4px}.margin-x-s{margin-left:8px;margin-right:8px}.margin-x-base{margin-left:16px;margin-right:16px}.margin-x-md{margin-left:24px;margin-right:24px}.margin-x-lg{margin-left:32px;margin-right:32px}.margin-x-xl{margin-left:40px;margin-right:40px}.margin-x-xxl{margin-left:48px;margin-right:48px}.margin-x-xxxl{margin-left:56px;margin-right:48px}.margin-right-xxs{margin-right:2px}.margin-right-xs{margin-right:4px}.margin-right-s{margin-right:8px}.margin-right-base{margin-right:16px}.margin-right-md{margin-right:24px}.margin-right-lg{margin-right:32px}.margin-right-xl{margin-right:40px}.margin-right-xxl{margin-right:48px}.margin-right-xxxl{margin-right:48px}.margin-bottom-xxs{margin-bottom:2px}.margin-bottom-xs{margin-bottom:4px}.margin-bottom-s{margin-bottom:8px}.margin-bottom-base{margin-bottom:16px}.margin-bottom-md{margin-bottom:24px}.margin-bottom-lg{margin-bottom:32px}.margin-bottom-xl{margin-bottom:40px}.margin-bottom-xxl{margin-bottom:48px}.margin-bottom-xxxl{margin-bottom:48px}.margin-top-xxs{margin-top:2px}.margin-top-xs{margin-top:4px}.margin-top-s{margin-top:8px}.margin-top-base{margin-top:16px}.margin-top-md{margin-top:24px}.margin-top-lg{margin-top:32px}.margin-top-xl{margin-top:40px}.margin-top-xxl{margin-top:48px}.margin-top-xxxl{margin-top:48px}.margin-left-xxs{margin-left:2px}.margin-left-xs{margin-left:4px}.margin-left-s{margin-left:8px}.margin-left-base{margin-left:16px}.margin-left-md{margin-left:24px}.margin-left-lg{margin-left:32px}.margin-left-xl{margin-left:40px}.margin-left-xxl{margin-left:48px}.margin-left-xxxl{margin-left:48px}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.padding-none{padding:0}.margin-none{margin:0}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-xxs{margin:16px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.inset-shadow{box-shadow:0px 3px 6px 0px rgba(0,0,0,.1607843137) inset}@media only screen and (min-width: 50em){.wrapper{width:95%;max-width:65em}.column-1{width:8.3333333333%}.column-2{width:4.1666666667%}.column-3{width:2.7777777778%}.column-4{width:2.0833333333%}.column-5{width:1.6666666667%}.column-6{width:1.3888888889%}.column-7{width:1.1904761905%}.column-8{width:1.0416666667%}.column-9{width:.9259259259%}.column-10{width:.8333333333%}.column-11{width:.7575757576%}.column-12{width:.6944444444%}aside{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.myHeader{position:absolute;width:100%;padding:32px}.page-wrapper{height:100%}body{margin:0}.not-full-width{padding:2rem}.cards-container{position:relative;padding:1rem}.cards-container .card-figure{overflow:hidden;background-color:#e0e0e0}.cards-container .card-body{display:flex;flex-direction:column;border-radius:24px;border:solid 1px #e6e6e6;overflow:hidden;height:100%}.cards-container .card-title{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text{padding:1.5em;font-size:1rem}.cards-container .card-link{text-decoration:none}.cards-container .category{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;padding:4px 8px;padding-top:4px;padding-bottom:4px;color:#012a4d;width:fit-content;margin-right:8px;margin-bottom:8px;margin-top:0}button{background:rgba(254,214,216,0);border-radius:4px;border:none;padding:16px;text-transform:uppercase;color:#fff;font-weight:600;font-size:1.125rem;letter-spacing:.02rem;font-variant:small-caps;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-caps:small-caps;position:relative;background-blend-mode:soft-light}button:hover{background:rgba(254,214,216,.32);box-shadow:0px 0px 8px 0px rgba(0,0,0,.1607843137)}button:selected{box-shadow:0px 0px 5px 0px rgba(0,0,0,.1803921569)}button:active{box-shadow:0px 0px 6px 0px rgba(0,0,0,.2117647059) inset;background:rgba(254,214,216,.16)}.button-link:hover{color:#fff}button.btn::before{content:\"\";bottom:0;left:0;right:0;top:0;background:#ff9195;position:absolute;background-blend-mode:normal;z-index:-1;border-radius:4px}.menu-icon-shape{display:flex;flex-direction:column;justify-content:space-between;height:24px;text-align:center}.menu-trigger .button::before{border-radius:100px}.icon-bar{width:24px;height:3.25px;border-radius:8px;background:#012a4d;margin:auto}.icon-bar.middle{visibility:visible}.icon-bar.top,.icon-bar.bottom{transform:none;transition:transform .5s}.menu-icon{width:24px;margin:auto}.icon-button{width:56px;height:56px;background:#fafdff;border:solid #012a4d 3px;padding:0;border-radius:100px}.icon-button:hover{background:#ebf5ff;transition:background .5s}.icon-button.open{background:#053259;transition:background .5s}.icon-button.open .icon-bar{background:#fafdff}.icon-button.open .icon-bar.top{transform:translate(0px, 8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom{transform:translate(0px, -8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle{visibility:hidden}.small-image-frame{overflow:hidden;width:20em}.section-banner{background-color:#f4fc97;padding-right:16px}html{scroll-behavior:smooth}.logo{width:100%;max-width:140px}img.logo{width:100%}.page-header-content{display:flex;justify-content:space-between}main{widht:100vw}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCard", function() { return BaseUiElementsCard; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsSlideout", function() { return BaseUiElementsSlideout; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCardsFeaturedPlain", function() { return BaseUiElementsCardsFeaturedPlain; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCardsFeaturedSliderCard", function() { return BaseUiElementsCardsFeaturedSliderCard; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCardsPlainCards", function() { return BaseUiElementsCardsPlainCards; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCardsSliderCard", function() { return BaseUiElementsCardsSliderCard; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCardsPcard", function() { return BaseUiElementsCardsPcard; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsContainersCircleContainer", function() { return BaseUiElementsContainersCircleContainer; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCoreButtonLink", function() { return BaseUiElementsCoreButtonLink; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCoreButtons", function() { return BaseUiElementsCoreButtons; });
__webpack_require__.d(components_namespaceObject, "LayoutNavigationMenuBar", function() { return LayoutNavigationMenuBar; });
__webpack_require__.d(components_namespaceObject, "LayoutNavigationMenuDrawer", function() { return LayoutNavigationMenuDrawer; });
__webpack_require__.d(components_namespaceObject, "LayoutNavigationMenuIconButton", function() { return LayoutNavigationMenuIconButton; });
__webpack_require__.d(components_namespaceObject, "LayoutNavigationNavbar", function() { return LayoutNavigationNavbar; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsInformationTagsProjectType", function() { return BaseUiElementsInformationTagsProjectType; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsCoreTextH1Text", function() { return BaseUiElementsCoreTextH1Text; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectPagesPersona", function() { return BaseUiElementsThemePatternsProjectPagesPersona; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectButton", function() { return BaseUiElementsThemePatternsProjectButton; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectDescription", function() { return BaseUiElementsThemePatternsProjectDescription; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectDetails", function() { return BaseUiElementsThemePatternsProjectDetails; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectSubtitle", function() { return BaseUiElementsThemePatternsProjectSubtitle; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectTimeframe", function() { return BaseUiElementsThemePatternsProjectTimeframe; });
__webpack_require__.d(components_namespaceObject, "BaseUiElementsThemePatternsProjectTitle", function() { return BaseUiElementsThemePatternsProjectTitle; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(18);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(19);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _79d68257 = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 23).then(__webpack_require__.bind(null, 155)));
const _908a12d6 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/index */ 30).then(__webpack_require__.bind(null, 156)));
const _ef6ff590 = () => interopDefault(__webpack_require__.e(/* import() | pages/test */ 35).then(__webpack_require__.bind(null, 157)));
const _590505b4 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/communications-design/index */ 27).then(__webpack_require__.bind(null, 158)));
const _064ca990 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/design-research/index */ 29).then(__webpack_require__.bind(null, 159)));
const _01c7fa3f = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/ui-ux-design/index */ 32).then(__webpack_require__.bind(null, 160)));
const _0ed653a7 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/web-design/index */ 34).then(__webpack_require__.bind(null, 161)));
const _574e646c = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/communications-design/_slug */ 26).then(__webpack_require__.bind(null, 162)));
const _04960848 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/design-research/_slug */ 28).then(__webpack_require__.bind(null, 163)));
const _001158f7 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/ui-ux-design/_slug */ 31).then(__webpack_require__.bind(null, 164)));
const _0d1fb25f = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/web-design/_slug */ 33).then(__webpack_require__.bind(null, 165)));
const _93f75566 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/_slug */ 25).then(__webpack_require__.bind(null, 152)));
const _cce345c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 24).then(__webpack_require__.bind(null, 166)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _79d68257,
    name: "about"
  }, {
    path: "/portfolio",
    component: _908a12d6,
    name: "portfolio"
  }, {
    path: "/test",
    component: _ef6ff590,
    name: "test"
  }, {
    path: "/portfolio/communications-design",
    component: _590505b4,
    name: "portfolio-communications-design"
  }, {
    path: "/portfolio/design-research",
    component: _064ca990,
    name: "portfolio-design-research"
  }, {
    path: "/portfolio/ui-ux-design",
    component: _01c7fa3f,
    name: "portfolio-ui-ux-design"
  }, {
    path: "/portfolio/web-design",
    component: _0ed653a7,
    name: "portfolio-web-design"
  }, {
    path: "/portfolio/communications-design/:slug?",
    component: _574e646c,
    name: "portfolio-communications-design-slug"
  }, {
    path: "/portfolio/design-research/:slug?",
    component: _04960848,
    name: "portfolio-design-research-slug"
  }, {
    path: "/portfolio/ui-ux-design/:slug?",
    component: _001158f7,
    name: "portfolio-ui-ux-design-slug"
  }, {
    path: "/portfolio/web-design/:slug?",
    component: _0d1fb25f,
    name: "portfolio-web-design-slug"
  }, {
    path: "/portfolio/:slug",
    component: _93f75566,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _cce345c8,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3214db16"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "7631c669"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/style.css
var style = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/core-layout.vue?vue&type=template&id=061039ee&scoped=true&
var core_layoutvue_type_template_id_061039ee_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    attrs: {
      "id": "container_page-wrapper"
    }
  }, [_vm._ssrNode("<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-no-gutter\" data-v-061039ee>", "</div>", [_vm._ssrNode("<section id=\"section_header\" class=\"row page-header\" data-v-061039ee>", "</section>", [_vm._ssrNode("<div id=\"container_logo\" class=\"hide-xs hide-s show-md show-lg col-md-2 col-lg-2 col-no-gutter\" data-v-061039ee>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "id": "img_logo",
      "src": "/logo.png"
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"container_menu\" class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-no-gutter\" data-v-061039ee>", "</div>", [_c('menu-bar')], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"row core\" data-v-061039ee>", "</main>", [_c('nuxt')], 1), _vm._ssrNode(" <footer data-v-061039ee></footer>")], 2)]);
};
var core_layoutvue_type_template_id_061039ee_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/core-layout.vue?vue&type=template&id=061039ee&scoped=true&

// EXTERNAL MODULE: ./components/layout/navigation/menu-bar.vue + 4 modules
var menu_bar = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/core-layout.vue?vue&type=script&lang=js&

/* harmony default export */ var core_layoutvue_type_script_lang_js_ = ({
  components: {
    MenuBar: menu_bar["default"]
  }
});
// CONCATENATED MODULE: ./layouts/core-layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_core_layoutvue_type_script_lang_js_ = (core_layoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/core-layout.vue



function core_layout_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var core_layout_component = Object(componentNormalizer["a" /* default */])(
  layouts_core_layoutvue_type_script_lang_js_,
  core_layoutvue_type_template_id_061039ee_scoped_true_render,
  core_layoutvue_type_template_id_061039ee_scoped_true_staticRenderFns,
  false,
  core_layout_injectStyles,
  "061039ee",
  "659adc8e"
  
)

/* harmony default export */ var core_layout = (core_layout_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/hero-layout.vue?vue&type=template&id=4515adb4&
var hero_layoutvue_type_template_id_4515adb4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    attrs: {
      "id": "container_page-wrapper"
    }
  }, [_vm._ssrNode("<div class=\"myHeader\" style=\"padding: 0;\">", "</div>", [_vm._ssrNode("<div id=\"container_page-header-content\" class=\"page-header-content\">", "</div>", [_vm._ssrNode("<div id=\"container_logo\" class=\"hide-xs hide-sm show-md show-lg\" style=\"padding: 24px 48px;\"><img id=\"img_logo\" src=\"/logo.png\" class=\"logo\"></div> "), _vm._ssrNode("<div id=\"container_menu\" class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-no-gutter\">", "</div>", [_c('menu-bar')], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"row\">", "</main>", [_c('nuxt')], 1), _vm._ssrNode(" <footer></footer>")], 2);
};
var hero_layoutvue_type_template_id_4515adb4_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/hero-layout.vue?vue&type=template&id=4515adb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/hero-layout.vue?vue&type=script&lang=js&

/* harmony default export */ var hero_layoutvue_type_script_lang_js_ = ({
  components: {
    MenuBar: menu_bar["default"]
  }
});
// CONCATENATED MODULE: ./layouts/hero-layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_hero_layoutvue_type_script_lang_js_ = (hero_layoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/hero-layout.vue



function hero_layout_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var hero_layout_component = Object(componentNormalizer["a" /* default */])(
  layouts_hero_layoutvue_type_script_lang_js_,
  hero_layoutvue_type_template_id_4515adb4_render,
  hero_layoutvue_type_template_id_4515adb4_staticRenderFns,
  false,
  hero_layout_injectStyles,
  null,
  "bdaaf55a"
  
)

/* harmony default export */ var hero_layout = (hero_layout_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "c757434e"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_core-layout": sanitizeComponent(core_layout),
  "_hero-layout": sanitizeComponent(hero_layout),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 21).then(__webpack_require__.bind(null, 173)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 22).then(__webpack_require__.bind(null, 167)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCard = () => __webpack_require__.e(/* import() | components/base-ui-elements-card */ 1).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsSlideout = () => __webpack_require__.e(/* import() | components/base-ui-elements-slideout */ 12).then(__webpack_require__.bind(null, 169)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCardsFeaturedPlain = () => __webpack_require__.e(/* import() | components/base-ui-elements-cards-featured-plain */ 2).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCardsFeaturedSliderCard = () => __webpack_require__.e(/* import() | components/base-ui-elements-cards-featured-slider-card */ 3).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCardsPlainCards = () => __webpack_require__.e(/* import() | components/base-ui-elements-cards-plain-cards */ 5).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCardsSliderCard = () => __webpack_require__.e(/* import() | components/base-ui-elements-cards-slider-card */ 6).then(__webpack_require__.bind(null, 67)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCardsPcard = () => __webpack_require__.e(/* import() | components/base-ui-elements-cards-pcard */ 4).then(__webpack_require__.bind(null, 170)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsContainersCircleContainer = () => __webpack_require__.e(/* import() | components/base-ui-elements-containers-circle-container */ 7).then(__webpack_require__.bind(null, 171)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCoreButtonLink = () => __webpack_require__.e(/* import() | components/base-ui-elements-core-button-link */ 8).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCoreButtons = () => __webpack_require__.e(/* import() | components/base-ui-elements-core-buttons */ 9).then(__webpack_require__.bind(null, 89)).then(c => wrapFunctional(c.default || c));
const LayoutNavigationMenuBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 6)).then(c => wrapFunctional(c.default || c));
const LayoutNavigationMenuDrawer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c));
const LayoutNavigationMenuIconButton = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)).then(c => wrapFunctional(c.default || c));
const LayoutNavigationNavbar = () => __webpack_require__.e(/* import() | components/layout-navigation-navbar */ 20).then(__webpack_require__.bind(null, 172)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsInformationTagsProjectType = () => __webpack_require__.e(/* import() | components/base-ui-elements-information-tags-project-type */ 11).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsCoreTextH1Text = () => __webpack_require__.e(/* import() | components/base-ui-elements-core-text-h1-text */ 10).then(__webpack_require__.bind(null, 153)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectPagesPersona = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-pages-persona */ 16).then(__webpack_require__.bind(null, 154)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectButton = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-button */ 13).then(__webpack_require__.bind(null, 95)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectDescription = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-description */ 14).then(__webpack_require__.bind(null, 90)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectDetails = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-details */ 15).then(__webpack_require__.bind(null, 91)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectSubtitle = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-subtitle */ 17).then(__webpack_require__.bind(null, 93)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectTimeframe = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-timeframe */ 18).then(__webpack_require__.bind(null, 94)).then(c => wrapFunctional(c.default || c));
const BaseUiElementsThemePatternsProjectTitle = () => __webpack_require__.e(/* import() | components/base-ui-elements-theme-patterns-project-title */ 19).then(__webpack_require__.bind(null, 92)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(21);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true,
    "SameSite": "Strict"
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(22);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(16);

// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ./cookie-universal-nuxt.js (mode: 'all')
 // Source: ./axios.js (mode: 'all')
 // Source: ../plugins/googleAnalytics.js (mode: 'client')
 // Source: ../plugins/stickyHeader.js (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "acerinidesigns",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "X-UA-Compatible",
        "content": "IE=edge"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no"
      }, {
        "hid": "description",
        "name": "description",
        "content": undefined
      }, {
        "name": "author",
        "content": "Arielle Cerini"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map