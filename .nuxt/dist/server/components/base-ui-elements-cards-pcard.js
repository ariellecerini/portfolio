exports.ids = [4];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5c9d978e", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pcard_vue_vue_type_style_index_0_id_688cac0b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pcard_vue_vue_type_style_index_0_id_688cac0b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pcard_vue_vue_type_style_index_0_id_688cac0b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pcard_vue_vue_type_style_index_0_id_688cac0b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pcard_vue_vue_type_style_index_0_id_688cac0b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tags[data-v-688cac0b]{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:16px}.card-title[data-v-688cac0b]{margin-bottom:0}.card-footer[data-v-688cac0b]{margin-top:0}.card-text[data-v-688cac0b]{padding:2% 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/pcard.vue?vue&type=template&id=688cac0b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cards-container col-xs-12 col-sm-6 col-md-4 col-lg-4 reveal"
  }, [_vm._ssrNode("<div class=\"card-body\" data-v-688cac0b><div class=\"card-figure\" data-v-688cac0b><img" + _vm._ssrAttr("src", `${_vm.post.attributes.image}`) + " class=\"img\" style=\"display: inline-block;\" data-v-688cac0b></div> <div class=\"card-text\" data-v-688cac0b><h5" + _vm._ssrClass("card-title", `text-${_vm.ct} display-4 text-uppercase`) + " data-v-688cac0b>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.post.attributes.title) + "\n            ") + "</h5> <div class=\"tags\" data-v-688cac0b>" + _vm._ssrList(_vm.tags, function (tag) {
    return _vm.tags.length > 0 ? "<h6 class=\"category text-warning\" data-v-688cac0b>" + _vm._ssrEscape("\n                     \n                             " + _vm._s(tag) + "\n \n                 ") + "</h6>" : "<!---->";
  }) + "</div></div> <div class=\"card-footer\" data-v-688cac0b><a" + _vm._ssrAttr("href", `/portfolio/${_vm.post.attributes.category}/${_vm.post.slug}`) + " data-v-688cac0b></a></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base-ui-elements/cards/pcard.vue?vue&type=template&id=688cac0b&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/pcard.vue?vue&type=script&lang=js
/* harmony default export */ var pcardvue_type_script_lang_js = ({
  props: {
    post: Object,
    prefix: String,
    ct: String
  },
  computed: {
    tags() {
      return this.post.attributes.tags ? this.post.attributes.tags.split(',') : [];
    }
  }
});
// CONCATENATED MODULE: ./components/base-ui-elements/cards/pcard.vue?vue&type=script&lang=js
 /* harmony default export */ var cards_pcardvue_type_script_lang_js = (pcardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base-ui-elements/cards/pcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_pcardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "688cac0b",
  "7342f0a4"
  
)

/* harmony default export */ var pcard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=base-ui-elements-cards-pcard.js.map