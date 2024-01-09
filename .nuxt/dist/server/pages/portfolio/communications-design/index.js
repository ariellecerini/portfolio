exports.ids = [27,5,6,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("350442c8", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_744c1a51_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_744c1a51_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_744c1a51_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_744c1a51_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_744c1a51_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".row[data-v-744c1a51]{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin:0 auto;width:100%}.row.reverse[data-v-744c1a51]{flex-direction:row-reverse}.row.natural-height[data-v-744c1a51]{align-items:flex-start}.row.flex-column[data-v-744c1a51]{flex-direction:column}.col[data-v-744c1a51]{box-sizing:border-box;flex-basis:0;flex-grow:1;max-width:100%;padding:1rem}.col.reverse[data-v-744c1a51]{flex-direction:column-reverse}.first[data-v-744c1a51]{order:-1}.last[data-v-744c1a51]{order:1}.align-start[data-v-744c1a51]{align-self:flex-start}.align-end[data-v-744c1a51]{align-self:flex-end}.align-center[data-v-744c1a51]{align-self:center}.align-baseline[data-v-744c1a51]{align-self:baseline}.align-stretch[data-v-744c1a51]{align-self:stretch}.col-xs[data-v-744c1a51]{flex-basis:0;flex-grow:1;max-width:100%}.col-xs[data-v-744c1a51],.col-xs-1[data-v-744c1a51]{box-sizing:border-box;padding:1rem}.col-xs-1[data-v-744c1a51]{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-xs-offset-1[data-v-744c1a51]{margin-left:8.3333333333%}.col-xs-2[data-v-744c1a51]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2[data-v-744c1a51]{margin-left:16.6666666667%}.col-xs-3[data-v-744c1a51]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3[data-v-744c1a51]{margin-left:25%}.col-xs-4[data-v-744c1a51]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4[data-v-744c1a51]{margin-left:33.3333333333%}.col-xs-5[data-v-744c1a51]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5[data-v-744c1a51]{margin-left:41.6666666667%}.col-xs-6[data-v-744c1a51]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6[data-v-744c1a51]{margin-left:50%}.col-xs-7[data-v-744c1a51]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7[data-v-744c1a51]{margin-left:58.3333333333%}.col-xs-8[data-v-744c1a51]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8[data-v-744c1a51]{margin-left:66.6666666667%}.col-xs-9[data-v-744c1a51]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9[data-v-744c1a51]{margin-left:75%}.col-xs-10[data-v-744c1a51]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10[data-v-744c1a51]{margin-left:83.3333333333%}.col-xs-11[data-v-744c1a51]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11[data-v-744c1a51]{margin-left:91.6666666667%}.col-xs-12[data-v-744c1a51]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12[data-v-744c1a51]{margin-left:100%}.row.start-xs[data-v-744c1a51]{justify-content:flex-start}.row.center-xs[data-v-744c1a51]{justify-content:center}.row.end-xs[data-v-744c1a51]{justify-content:flex-end}.row.top-xs[data-v-744c1a51]{align-items:flex-start}.row.middle-xs[data-v-744c1a51]{align-items:center}.row.bottom-xs[data-v-744c1a51]{align-items:flex-end}.row.around-xs[data-v-744c1a51]{justify-content:space-around}.row.between-xs[data-v-744c1a51]{justify-content:space-between}.first-xs[data-v-744c1a51]{order:-1}.last-xs[data-v-744c1a51]{order:1}@media only screen and (min-width:41rem){.col-sm[data-v-744c1a51]{flex-basis:0;flex-grow:1;max-width:100%}.col-sm[data-v-744c1a51],.col-sm-1[data-v-744c1a51]{box-sizing:border-box;padding:1rem}.col-sm-1[data-v-744c1a51]{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-sm-offset-1[data-v-744c1a51]{margin-left:8.3333333333%}.col-sm-2[data-v-744c1a51]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2[data-v-744c1a51]{margin-left:16.6666666667%}.col-sm-3[data-v-744c1a51]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3[data-v-744c1a51]{margin-left:25%}.col-sm-4[data-v-744c1a51]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4[data-v-744c1a51]{margin-left:33.3333333333%}.col-sm-5[data-v-744c1a51]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5[data-v-744c1a51]{margin-left:41.6666666667%}.col-sm-6[data-v-744c1a51]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6[data-v-744c1a51]{margin-left:50%}.col-sm-7[data-v-744c1a51]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7[data-v-744c1a51]{margin-left:58.3333333333%}.col-sm-8[data-v-744c1a51]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8[data-v-744c1a51]{margin-left:66.6666666667%}.col-sm-9[data-v-744c1a51]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9[data-v-744c1a51]{margin-left:75%}.col-sm-10[data-v-744c1a51]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10[data-v-744c1a51]{margin-left:83.3333333333%}.col-sm-11[data-v-744c1a51]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11[data-v-744c1a51]{margin-left:91.6666666667%}.col-sm-12[data-v-744c1a51]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12[data-v-744c1a51]{margin-left:100%}.row.start-sm[data-v-744c1a51]{justify-content:flex-start}.row.center-sm[data-v-744c1a51]{justify-content:center}.row.end-sm[data-v-744c1a51]{justify-content:flex-end}.row.top-sm[data-v-744c1a51]{align-items:flex-start}.row.middle-sm[data-v-744c1a51]{align-items:center}.row.bottom-sm[data-v-744c1a51]{align-items:flex-end}.row.around-sm[data-v-744c1a51]{justify-content:space-around}.row.between-sm[data-v-744c1a51]{justify-content:space-between}.first-sm[data-v-744c1a51]{order:-1}.last-sm[data-v-744c1a51]{order:1}}@media only screen and (min-width:65rem){.col-md[data-v-744c1a51]{flex-basis:0;flex-grow:1;max-width:100%}.col-md[data-v-744c1a51],.col-md-1[data-v-744c1a51]{box-sizing:border-box;padding:1rem}.col-md-1[data-v-744c1a51]{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-md-offset-1[data-v-744c1a51]{margin-left:8.3333333333%}.col-md-2[data-v-744c1a51]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2[data-v-744c1a51]{margin-left:16.6666666667%}.col-md-3[data-v-744c1a51]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3[data-v-744c1a51]{margin-left:25%}.col-md-4[data-v-744c1a51]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4[data-v-744c1a51]{margin-left:33.3333333333%}.col-md-5[data-v-744c1a51]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5[data-v-744c1a51]{margin-left:41.6666666667%}.col-md-6[data-v-744c1a51]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6[data-v-744c1a51]{margin-left:50%}.col-md-7[data-v-744c1a51]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7[data-v-744c1a51]{margin-left:58.3333333333%}.col-md-8[data-v-744c1a51]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8[data-v-744c1a51]{margin-left:66.6666666667%}.col-md-9[data-v-744c1a51]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9[data-v-744c1a51]{margin-left:75%}.col-md-10[data-v-744c1a51]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10[data-v-744c1a51]{margin-left:83.3333333333%}.col-md-11[data-v-744c1a51]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11[data-v-744c1a51]{margin-left:91.6666666667%}.col-md-12[data-v-744c1a51]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12[data-v-744c1a51]{margin-left:100%}.row.start-md[data-v-744c1a51]{justify-content:flex-start}.row.center-md[data-v-744c1a51]{justify-content:center}.row.end-md[data-v-744c1a51]{justify-content:flex-end}.row.top-md[data-v-744c1a51]{align-items:flex-start}.row.middle-md[data-v-744c1a51]{align-items:center}.row.bottom-md[data-v-744c1a51]{align-items:flex-end}.row.around-md[data-v-744c1a51]{justify-content:space-around}.row.between-md[data-v-744c1a51]{justify-content:space-between}.first-md[data-v-744c1a51]{order:-1}.last-md[data-v-744c1a51]{order:1}}@media only screen and (min-width:101rem){.col-lg[data-v-744c1a51]{flex-basis:0;flex-grow:1;max-width:100%}.col-lg[data-v-744c1a51],.col-lg-1[data-v-744c1a51]{box-sizing:border-box;padding:1rem}.col-lg-1[data-v-744c1a51]{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-lg-offset-1[data-v-744c1a51]{margin-left:8.3333333333%}.col-lg-2[data-v-744c1a51]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2[data-v-744c1a51]{margin-left:16.6666666667%}.col-lg-3[data-v-744c1a51]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3[data-v-744c1a51]{margin-left:25%}.col-lg-4[data-v-744c1a51]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4[data-v-744c1a51]{margin-left:33.3333333333%}.col-lg-5[data-v-744c1a51]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5[data-v-744c1a51]{margin-left:41.6666666667%}.col-lg-6[data-v-744c1a51]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6[data-v-744c1a51]{margin-left:50%}.col-lg-7[data-v-744c1a51]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7[data-v-744c1a51]{margin-left:58.3333333333%}.col-lg-8[data-v-744c1a51]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8[data-v-744c1a51]{margin-left:66.6666666667%}.col-lg-9[data-v-744c1a51]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9[data-v-744c1a51]{margin-left:75%}.col-lg-10[data-v-744c1a51]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10[data-v-744c1a51]{margin-left:83.3333333333%}.col-lg-11[data-v-744c1a51]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11[data-v-744c1a51]{margin-left:91.6666666667%}.col-lg-12[data-v-744c1a51]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12[data-v-744c1a51]{margin-left:100%}.row.start-lg[data-v-744c1a51]{justify-content:flex-start}.row.center-lg[data-v-744c1a51]{justify-content:center}.row.end-lg[data-v-744c1a51]{justify-content:flex-end}.row.top-lg[data-v-744c1a51]{align-items:flex-start}.row.middle-lg[data-v-744c1a51]{align-items:center}.row.bottom-lg[data-v-744c1a51]{align-items:flex-end}.row.around-lg[data-v-744c1a51]{justify-content:space-around}.row.between-lg[data-v-744c1a51]{justify-content:space-between}.first-lg[data-v-744c1a51]{order:-1}.last-lg[data-v-744c1a51]{order:1}}@media only screen and (min-width:121rem){.col-xl[data-v-744c1a51]{flex-basis:0;flex-grow:1;max-width:100%}.col-xl[data-v-744c1a51],.col-xl-1[data-v-744c1a51]{box-sizing:border-box;padding:1rem}.col-xl-1[data-v-744c1a51]{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-xl-offset-1[data-v-744c1a51]{margin-left:8.3333333333%}.col-xl-2[data-v-744c1a51]{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2[data-v-744c1a51]{margin-left:16.6666666667%}.col-xl-3[data-v-744c1a51]{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3[data-v-744c1a51]{margin-left:25%}.col-xl-4[data-v-744c1a51]{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4[data-v-744c1a51]{margin-left:33.3333333333%}.col-xl-5[data-v-744c1a51]{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5[data-v-744c1a51]{margin-left:41.6666666667%}.col-xl-6[data-v-744c1a51]{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6[data-v-744c1a51]{margin-left:50%}.col-xl-7[data-v-744c1a51]{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7[data-v-744c1a51]{margin-left:58.3333333333%}.col-xl-8[data-v-744c1a51]{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8[data-v-744c1a51]{margin-left:66.6666666667%}.col-xl-9[data-v-744c1a51]{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9[data-v-744c1a51]{margin-left:75%}.col-xl-10[data-v-744c1a51]{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10[data-v-744c1a51]{margin-left:83.3333333333%}.col-xl-11[data-v-744c1a51]{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11[data-v-744c1a51]{margin-left:91.6666666667%}.col-xl-12[data-v-744c1a51]{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12[data-v-744c1a51]{margin-left:100%}.row.start-xl[data-v-744c1a51]{justify-content:flex-start}.row.center-xl[data-v-744c1a51]{justify-content:center}.row.end-xl[data-v-744c1a51]{justify-content:flex-end}.row.top-xl[data-v-744c1a51]{align-items:flex-start}.row.middle-xl[data-v-744c1a51]{align-items:center}.row.bottom-xl[data-v-744c1a51]{align-items:flex-end}.row.around-xl[data-v-744c1a51]{justify-content:space-around}.row.between-xl[data-v-744c1a51]{justify-content:space-between}.first-xl[data-v-744c1a51]{order:-1}.last-xl[data-v-744c1a51]{order:1}}.col-gutter-lr[data-v-744c1a51]{padding:0 1rem}.col-no-gutter[data-v-744c1a51]{padding:0}.row.show[data-v-744c1a51],.show[data-v-744c1a51]{display:flex!important}.hide[data-v-744c1a51]{display:none!important}.row.show-xs[data-v-744c1a51],.show-xs[data-v-744c1a51]{display:flex!important}.hide-xs[data-v-744c1a51]{display:none!important}@media only screen and (max-width:40rem){.row.show-xs-only[data-v-744c1a51],.show-xs-only[data-v-744c1a51]{display:flex!important}.hide-xs-only[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:41rem){.row.show-sm[data-v-744c1a51],.show-sm[data-v-744c1a51]{display:flex!important}.hide-sm[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:41rem)and (max-width:64rem){.row.show-sm-only[data-v-744c1a51],.show-sm-only[data-v-744c1a51]{display:flex!important}.hide-sm-only[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:65rem){.row.show-md[data-v-744c1a51],.show-md[data-v-744c1a51]{display:flex!important}.hide-md[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:65rem)and (max-width:100rem){.row.show-md-only[data-v-744c1a51],.show-md-only[data-v-744c1a51]{display:flex!important}.hide-md-only[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:101rem){.row.show-lg[data-v-744c1a51],.show-lg[data-v-744c1a51]{display:flex!important}.hide-lg[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:101rem)and (max-width:120rem){.row.show-lg-only[data-v-744c1a51],.show-lg-only[data-v-744c1a51]{display:flex!important}.hide-lg-only[data-v-744c1a51]{display:none!important}}@media only screen and (min-width:121rem){.row.show-xl[data-v-744c1a51],.show-xl[data-v-744c1a51]{display:flex!important}.hide-xl[data-v-744c1a51]{display:none!important}}*[data-v-744c1a51],[data-v-744c1a51]:after,[data-v-744c1a51]:before{box-sizing:border-box}blockquote[data-v-744c1a51],body[data-v-744c1a51],dd[data-v-744c1a51],dl[data-v-744c1a51],figure[data-v-744c1a51],h1[data-v-744c1a51],h2[data-v-744c1a51],h3[data-v-744c1a51],h4[data-v-744c1a51],p[data-v-744c1a51]{margin-bottom:0}ol[role=list][data-v-744c1a51],ul[role=list][data-v-744c1a51]{list-style:none}html[data-v-744c1a51]:focus-within{scroll-behavior:smooth}body[data-v-744c1a51]{line-height:1.5;min-height:100vh;text-rendering:optimizeSpeed}a[data-v-744c1a51]:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img[data-v-744c1a51],picture[data-v-744c1a51]{display:block;max-width:100%}button[data-v-744c1a51],input[data-v-744c1a51],select[data-v-744c1a51],textarea[data-v-744c1a51]{font:inherit}@media(prefers-reduced-motion:reduce){html[data-v-744c1a51]:focus-within{scroll-behavior:auto}*[data-v-744c1a51],[data-v-744c1a51]:after,[data-v-744c1a51]:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}.header1[data-v-744c1a51],.heading1[data-v-744c1a51],h1[data-v-744c1a51]{font-size:1.875rem}.header1[data-v-744c1a51],.header2[data-v-744c1a51],.heading1[data-v-744c1a51],.heading2[data-v-744c1a51],h1[data-v-744c1a51],h2[data-v-744c1a51]{font-weight:600;letter-spacing:.005em;margin:0}.header2[data-v-744c1a51],.heading2[data-v-744c1a51],h2[data-v-744c1a51]{font-size:1.75rem}.header3[data-v-744c1a51],.heading3[data-v-744c1a51],h3[data-v-744c1a51]{font-size:1.5rem;font-weight:600;letter-spacing:.005em}.header4[data-v-744c1a51],.heading4[data-v-744c1a51],h4[data-v-744c1a51]{font-size:1.25rem;font-weight:700;letter-spacing:.005em;margin:0}.header5[data-v-744c1a51],.heading5[data-v-744c1a51],h5[data-v-744c1a51]{font-size:1.125rem}.header5[data-v-744c1a51],.header6[data-v-744c1a51],.heading5[data-v-744c1a51],.heading6[data-v-744c1a51],h5[data-v-744c1a51],h6[data-v-744c1a51]{font-weight:600;letter-spacing:.005em;margin:0}.header6[data-v-744c1a51],.heading6[data-v-744c1a51],h6[data-v-744c1a51]{font-size:1rem}.body-text[data-v-744c1a51],.p[data-v-744c1a51],p[data-v-744c1a51]{font-size:1rem}.body-text[data-v-744c1a51],.p[data-v-744c1a51],.small-body-text[data-v-744c1a51],p[data-v-744c1a51]{font-weight:400;letter-spacing:.005em;margin:0}.small-body-text[data-v-744c1a51]{font-size:.875rem}.smallest-body-text[data-v-744c1a51]{font-size:.75rem;font-weight:400;letter-spacing:.005em;margin:0}.bold[data-v-744c1a51]{font-weight:700}.semi-bold[data-v-744c1a51]{font-weight:600}.regular[data-v-744c1a51]{font-weight:700}a[data-v-744c1a51]{color:#012a4d}a[data-v-744c1a51]:hover{color:#ff9195;font-weight:600}.nav-link[data-v-744c1a51]{color:#012a4d}.nav-link[data-v-744c1a51]:hover{color:#012a4d;font-weight:600}.rounded[data-v-744c1a51]{border-radius:24px}.border-weight-base[data-v-744c1a51]{border-width:3px}.border-color-primary[data-v-744c1a51]{border-color:#012a4d}.backdrop-tertiary-lightest[data-v-744c1a51]{background-color:#fdffe6}div[data-v-744c1a51]{box-sizing:border-box}.padding-xxs[data-v-744c1a51]{padding:2px}.padding-xs[data-v-744c1a51]{padding:4px}.padding-s[data-v-744c1a51]{padding:8px}.padding-base[data-v-744c1a51]{padding:16px}.padding-md[data-v-744c1a51]{padding:24px}.padding-lg[data-v-744c1a51]{padding:32px}.padding-xl[data-v-744c1a51]{padding:40px}.padding-xxl[data-v-744c1a51]{padding:48px}.padding-xxxl[data-v-744c1a51]{padding:56px}.padding-y-xxs[data-v-744c1a51]{padding-bottom:2px;padding-top:2px}.padding-y-xs[data-v-744c1a51]{padding-bottom:4px;padding-top:4px}.padding-y-s[data-v-744c1a51]{padding-bottom:8px;padding-top:8px}.padding-y-base[data-v-744c1a51]{padding-bottom:16px;padding-top:16px}.padding-y-md[data-v-744c1a51]{padding-bottom:24px;padding-top:24px}.padding-y-lg[data-v-744c1a51]{padding-bottom:32px;padding-top:32px}.padding-y-xl[data-v-744c1a51]{padding-bottom:40px;padding-top:40px}.padding-y-xxl[data-v-744c1a51]{padding-bottom:48px;padding-top:48px}.padding-y-xxxl[data-v-744c1a51]{padding-bottom:48px;padding-top:56px}.padding-x-xxs[data-v-744c1a51]{padding-left:2px;padding-right:2px}.padding-x-xs[data-v-744c1a51]{padding-left:4px;padding-right:4px}.padding-x-s[data-v-744c1a51]{padding-left:8px;padding-right:8px}.padding-x-base[data-v-744c1a51]{padding-left:16px;padding-right:16px}.padding-x-md[data-v-744c1a51]{padding-left:24px;padding-right:24px}.padding-x-lg[data-v-744c1a51]{padding-left:32px;padding-right:32px}.padding-x-xl[data-v-744c1a51]{padding-left:40px;padding-right:40px}.padding-x-xxl[data-v-744c1a51]{padding-left:48px;padding-right:48px}.padding-x-xxxl[data-v-744c1a51]{padding-left:56px;padding-right:48px}.padding-right-xxs[data-v-744c1a51]{padding-right:2px}.padding-right-xs[data-v-744c1a51]{padding-right:4px}.padding-right-s[data-v-744c1a51]{padding-right:8px}.padding-right-base[data-v-744c1a51]{padding-right:16px}.padding-right-md[data-v-744c1a51]{padding-right:24px}.padding-right-lg[data-v-744c1a51]{padding-right:32px}.padding-right-xl[data-v-744c1a51]{padding-right:40px}.padding-right-xxl[data-v-744c1a51],.padding-right-xxxl[data-v-744c1a51]{padding-right:48px}.padding-bottom-xxs[data-v-744c1a51]{padding-bottom:2px}.padding-bottom-xs[data-v-744c1a51]{padding-bottom:4px}.padding-bottom-s[data-v-744c1a51]{padding-bottom:8px}.padding-bottom-base[data-v-744c1a51]{padding-bottom:16px}.padding-bottom-md[data-v-744c1a51]{padding-bottom:24px}.padding-bottom-lg[data-v-744c1a51]{padding-bottom:32px}.padding-bottom-xl[data-v-744c1a51]{padding-bottom:40px}.padding-bottom-xxl[data-v-744c1a51],.padding-bottom-xxxl[data-v-744c1a51]{padding-bottom:48px}.padding-top-xxs[data-v-744c1a51]{padding-top:2px}.padding-top-xs[data-v-744c1a51]{padding-top:4px}.padding-top-s[data-v-744c1a51]{padding-top:8px}.padding-top-base[data-v-744c1a51]{padding-top:16px}.padding-top-md[data-v-744c1a51]{padding-top:24px}.padding-top-lg[data-v-744c1a51]{padding-top:32px}.padding-top-xl[data-v-744c1a51]{padding-top:40px}.padding-top-xxl[data-v-744c1a51],.padding-top-xxxl[data-v-744c1a51]{padding-top:48px}.padding-left-xxs[data-v-744c1a51]{padding-left:2px}.padding-left-xs[data-v-744c1a51]{padding-left:4px}.padding-left-s[data-v-744c1a51]{padding-left:8px}.padding-left-base[data-v-744c1a51]{padding-left:16px}.padding-left-md[data-v-744c1a51]{padding-left:24px}.padding-left-lg[data-v-744c1a51]{padding-left:32px}.padding-left-xl[data-v-744c1a51]{padding-left:40px}.padding-left-xxl[data-v-744c1a51],.padding-left-xxxl[data-v-744c1a51]{padding-left:48px}.margin-base[data-v-744c1a51]{margin:16px}.margin-md[data-v-744c1a51]{margin:24px}.margin-y-xxs[data-v-744c1a51]{margin-bottom:2px;margin-top:2px}.margin-y-xs[data-v-744c1a51]{margin-bottom:4px;margin-top:4px}.margin-y-s[data-v-744c1a51]{margin-bottom:8px;margin-top:8px}.margin-y-xxs[data-v-744c1a51]{margin-bottom:16px;margin-top:16px}.margin-y-lg[data-v-744c1a51]{margin-bottom:32px;margin-top:32px}.margin-y-xl[data-v-744c1a51]{margin-bottom:40px;margin-top:40px}.margin-y-xxl[data-v-744c1a51]{margin-bottom:48px;margin-top:48px}.margin-y-xxxl[data-v-744c1a51]{margin-bottom:48px;margin-top:56px}.margin-x-xxs[data-v-744c1a51]{margin-left:2px;margin-right:2px}.margin-x-xs[data-v-744c1a51]{margin-left:4px;margin-right:4px}.margin-x-s[data-v-744c1a51]{margin-left:8px;margin-right:8px}.margin-x-base[data-v-744c1a51]{margin-left:16px;margin-right:16px}.margin-x-md[data-v-744c1a51]{margin-left:24px;margin-right:24px}.margin-x-lg[data-v-744c1a51]{margin-left:32px;margin-right:32px}.margin-x-xl[data-v-744c1a51]{margin-left:40px;margin-right:40px}.margin-x-xxl[data-v-744c1a51]{margin-left:48px;margin-right:48px}.margin-x-xxxl[data-v-744c1a51]{margin-left:56px;margin-right:48px}.margin-right-xxs[data-v-744c1a51]{margin-right:2px}.margin-right-xs[data-v-744c1a51]{margin-right:4px}.margin-right-s[data-v-744c1a51]{margin-right:8px}.margin-right-base[data-v-744c1a51]{margin-right:16px}.margin-right-md[data-v-744c1a51]{margin-right:24px}.margin-right-lg[data-v-744c1a51]{margin-right:32px}.margin-right-xl[data-v-744c1a51]{margin-right:40px}.margin-right-xxl[data-v-744c1a51],.margin-right-xxxl[data-v-744c1a51]{margin-right:48px}.margin-bottom-xxs[data-v-744c1a51]{margin-bottom:2px}.margin-bottom-xs[data-v-744c1a51]{margin-bottom:4px}.margin-bottom-s[data-v-744c1a51]{margin-bottom:8px}.margin-bottom-base[data-v-744c1a51]{margin-bottom:16px}.margin-bottom-md[data-v-744c1a51]{margin-bottom:24px}.margin-bottom-lg[data-v-744c1a51]{margin-bottom:32px}.margin-bottom-xl[data-v-744c1a51]{margin-bottom:40px}.margin-bottom-xxl[data-v-744c1a51],.margin-bottom-xxxl[data-v-744c1a51]{margin-bottom:48px}.margin-top-xxs[data-v-744c1a51]{margin-top:2px}.margin-top-xs[data-v-744c1a51]{margin-top:4px}.margin-top-s[data-v-744c1a51]{margin-top:8px}.margin-top-md[data-v-744c1a51]{margin-top:24px}.margin-top-lg[data-v-744c1a51]{margin-top:32px}.margin-top-xl[data-v-744c1a51]{margin-top:40px}.margin-top-xxl[data-v-744c1a51],.margin-top-xxxl[data-v-744c1a51]{margin-top:48px}.margin-left-xxs[data-v-744c1a51]{margin-left:2px}.margin-left-xs[data-v-744c1a51]{margin-left:4px}.margin-left-s[data-v-744c1a51]{margin-left:8px}.margin-left-base[data-v-744c1a51]{margin-left:16px}.margin-left-md[data-v-744c1a51]{margin-left:24px}.margin-left-lg[data-v-744c1a51]{margin-left:32px}.margin-left-xl[data-v-744c1a51]{margin-left:40px}.margin-left-xxl[data-v-744c1a51],.margin-left-xxxl[data-v-744c1a51]{margin-left:48px}.padding-none[data-v-744c1a51]{padding:0}.margin-none[data-v-744c1a51]{margin:0}.margin-xxs[data-v-744c1a51]{margin:2px}.margin-xs[data-v-744c1a51]{margin:4px}.margin-s[data-v-744c1a51]{margin:8px}.margin-xxs[data-v-744c1a51]{margin:16px}.margin-lg[data-v-744c1a51]{margin:32px}.margin-xl[data-v-744c1a51]{margin:40px}.margin-xxl[data-v-744c1a51]{margin:48px}.margin-xxxl[data-v-744c1a51]{margin:56px}.vertical-align-middle[data-v-744c1a51]{vertical-align:middle}.align-content-center[data-v-744c1a51]{align-content:center}.align-items-center[data-v-744c1a51]{align-items:center}.inset-shadow[data-v-744c1a51]{box-shadow:inset 0 3px 6px 0 rgba(0,0,0,.161)}@media only screen and (min-width:50em){.wrapper[data-v-744c1a51]{max-width:65em;width:95%}.column-1[data-v-744c1a51]{width:8.3333333333%}.column-2[data-v-744c1a51]{width:4.1666666667%}.column-3[data-v-744c1a51]{width:2.7777777778%}.column-4[data-v-744c1a51]{width:2.0833333333%}.column-5[data-v-744c1a51]{width:1.6666666667%}.column-6[data-v-744c1a51]{width:1.3888888889%}.column-7[data-v-744c1a51]{width:1.1904761905%}.column-8[data-v-744c1a51]{width:1.0416666667%}.column-9[data-v-744c1a51]{width:.9259259259%}.column-10[data-v-744c1a51]{width:.8333333333%}.column-11[data-v-744c1a51]{width:.7575757576%}.column-12[data-v-744c1a51]{width:.6944444444%}aside[data-v-744c1a51]{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto[data-v-744c1a51]{margin:auto}.margin-top-base[data-v-744c1a51]{margin-top:16px}.home-header[data-v-744c1a51]{padding:16px 32px 32px 40px;position:absolute;width:100%}.sub-page[data-v-744c1a51]{background:#fafdff;box-shadow:3px 0 12px rgba(0,0,0,.16);justify-content:space-between;padding-left:40px;padding-top:0;position:fixed;z-index:1}.page-wrapper[data-v-744c1a51]{height:100%}body[data-v-744c1a51]{margin:0}.not-full-width[data-v-744c1a51]{padding:2rem}.display-flex[data-v-744c1a51]{display:flex}.flex-direction-row[data-v-744c1a51]{flex-direction:row}.flex-direction-column[data-v-744c1a51]{flex-direction:column}.flex-direction-row-reverse[data-v-744c1a51]{flex-direction:row-reverse}.flex-direction-column-reverse[data-v-744c1a51]{flex-direction:column-reverse}.justify-content-space-between[data-v-744c1a51]{justify-content:space-between}.justify-content-space-around[data-v-744c1a51]{justify-content:space-around}.justify-content-space-evenly[data-v-744c1a51]{justify-content:space-evenly}.justify-content-flex-end[data-v-744c1a51]{justify-content:flex-end}.justify-content-center[data-v-744c1a51]{justify-content:center}.width-100vw[data-v-744c1a51]{width:100vw}.full-width[data-v-744c1a51]{width:100%}.figma>iframe[data-v-744c1a51]{height:100%;max-height:100vh;min-height:450px;width:100%}.cards-container[data-v-744c1a51]{padding:1rem;position:relative}.cards-container .card-figure[data-v-744c1a51]{background-color:#e0e0e0;overflow:hidden}.cards-container .card-body[data-v-744c1a51]{border:1px solid #e6e6e6;border-radius:24px;display:flex;flex-direction:column;height:100%;overflow:hidden}.cards-container .card-title[data-v-744c1a51]{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text[data-v-744c1a51]{font-size:1rem;padding:1.5em}.cards-container .card-link[data-v-744c1a51]{-webkit-text-decoration:none;text-decoration:none}.cards-container .category[data-v-744c1a51]{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;color:#012a4d;margin-bottom:8px;margin-right:8px;margin-top:0;padding:4px 8px;width:-moz-fit-content;width:fit-content}button[data-v-744c1a51]{background:rgba(254,214,216,0);background-blend-mode:soft-light;border:none;border-radius:4px;color:#fff;font-feature-settings:\"smcp\",normal,normal,\"smcp\";font-size:1.125rem;font-variant:small-caps;font-variant-caps:small-caps;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:600;letter-spacing:.02rem;padding:16px;position:relative;text-transform:uppercase}button[data-v-744c1a51]:hover{background:rgba(254,214,216,.32);box-shadow:0 0 8px 0 rgba(0,0,0,.161)}button[data-v-744c1a51]:selected{box-shadow:0 0 5px 0 rgba(0,0,0,.18)}button[data-v-744c1a51]:active{background:rgba(254,214,216,.16);box-shadow:inset 0 0 6px 0 rgba(0,0,0,.212)}.button-link[data-v-744c1a51]:hover{color:#fff}button.btn[data-v-744c1a51]:before{background:#ff9195;background-blend-mode:normal;border-radius:4px;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1}.menu-icon-shape[data-v-744c1a51]{display:flex;flex-direction:column;height:24px;justify-content:space-between;text-align:center}.menu-trigger .button[data-v-744c1a51]:before{border-radius:100px}.icon-bar[data-v-744c1a51]{background:#012a4d;border-radius:8px;height:3.25px;margin:auto;width:24px}.icon-bar.middle[data-v-744c1a51]{visibility:visible}.icon-bar.bottom[data-v-744c1a51],.icon-bar.top[data-v-744c1a51]{transform:none;transition:transform .5s}.menu-icon[data-v-744c1a51]{margin:auto;width:24px}.icon-button[data-v-744c1a51]{background:#fafdff;border:3px solid #012a4d;border-radius:100px;height:56px;padding:0;width:56px}.icon-button[data-v-744c1a51]:hover{background:#ebf5ff;transition:background .5s}.icon-button.open[data-v-744c1a51]{background:#053259;transition:background .5s}.icon-button.open .icon-bar[data-v-744c1a51]{background:#fafdff}.icon-button.open .icon-bar.top[data-v-744c1a51]{transform:translateY(8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom[data-v-744c1a51]{transform:translateY(-8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle[data-v-744c1a51]{visibility:hidden}.small-image-frame[data-v-744c1a51]{overflow:hidden;width:20em}.section-banner[data-v-744c1a51]{background-color:#f4fc97;padding-right:16px}.header[data-v-744c1a51]{background:rgba(235,245,255,.61);box-shadow:3px 0 12px rgba(0,0,0,.16);display:inline-block;height:100%;min-height:100vh;width:100%}.header-content[data-v-744c1a51]{margin-left:14%;margin-top:9em}.not-full-width[data-v-744c1a51]{margin:auto;max-width:1300px}.side-bar-col[data-v-744c1a51]{display:flex;flex-direction:column;height:100vh;justify-content:flex-end}.hero-text[data-v-744c1a51]{color:#012a4d;font-size:5rem;font-weight:600;line-height:6rem;margin:0;padding-bottom:.625rem}.project-grid[data-v-744c1a51]{padding-top:64px}.tertiary-text[data-v-744c1a51]{color:#bbc909}.display-text[data-v-744c1a51]{color:#bbc909;font-size:7rem}.sub-header[data-v-744c1a51]{color:#012a4d;font-size:2.25rem;font-weight:500;line-height:2.875rem;padding-bottom:.625rem}img[data-v-744c1a51]{bottom:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/communications-design/index.vue?vue&type=template&id=744c1a51&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "category-page",
    staticStyle: {
      "width": "inherit"
    }
  }, [_vm._ssrNode("<section id=\"section_page-title\" class=\"row not-full-width padding-bottom-base padding-top-md\" data-v-744c1a51><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" data-v-744c1a51><h1 data-v-744c1a51>Communications Design</h1></div></section> "), _vm._ssrNode("<section id=\"section_project-grid\" class=\"not-full-width\" data-v-744c1a51>", "</section>", [_c('plain-cards', {
    attrs: {
      "prefix": "portfolo",
      "slug": _vm.slug,
      "posts": _vm.posts
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/portfolio/communications-design/index.vue?vue&type=template&id=744c1a51&scoped=true

// EXTERNAL MODULE: ./components/base-ui-elements/cards/PlainCards.vue + 4 modules
var PlainCards = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/communications-design/index.vue?vue&type=script&lang=js

/* harmony default export */ var communications_designvue_type_script_lang_js = ({
  layout: 'core-layout',
  name: 'communications-design',
  components: {
    PlainCards: PlainCards["default"]
  },
  props: ['slug'],
  async asyncData() {
    const resolve = __webpack_require__(77);
    const imports = resolve.keys().map(key => {
      const [, slug] = key.match(/\/(.+)\.md$/);
      return Object.assign(resolve(key), {
        slug
      });
    }).filter(post => post.attributes.type == 'portfolio').filter(post => post.attributes.category == 'communications-design');
    return {
      posts: imports
    };
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/portfolio/communications-design/index.vue?vue&type=script&lang=js
 /* harmony default export */ var portfolio_communications_designvue_type_script_lang_js = (communications_designvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portfolio/communications-design/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_communications_designvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "744c1a51",
  "2617aedb"
  
)

/* harmony default export */ var communications_design = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d16293a", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4d378d0c", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Air Force HR Platform","type":"portfolio","category":"ui-ux-design","client":"BAM","position":"UX Manager & Platform Strategist","role":"Lead Designer, Strategist, and Design System Architect","tools":"Adobe XD & OutSystems","image":"/airforce-hr-thumbnail.png","tags":"ux strategy, human capital management","url":"/Projects/case-studies/myvector-case-study.pdf","link":"/Projects/case-studies/myvector-case-study.pdf","linkText":"View Case Study","linkTitle":" ","dateStart":"June 2021","dateEnd":"November 2022","featuredImage":"/airforce-hr.png","description":"Functioned as UX Manager and Platform Strategist for an enterprise platform. Developed design thinking toolkit and championed the movement of design as part of development teams. Built out design operation processes, such as file management, onboarding, and interviewing. Was responsible for building out Information Architecture and Project Road Map for the Design System.","cModules":{"moduleOne":{"item":"pdf","header":"Platform Strategy","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","image":"/Projects/case-studies/myvector-case-study.pdf","style":""}}},
    
      html: "",
     }

/***/ }),

/***/ 48:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Cerini & Assoc.","type":"portfolio","category":"web-design","position":"Freelance Designer","client":"Cerini & Associates","role":"Web Designer and Developer","tools":"Wordpress","image":"/cerini-thumbnail.png","featuredImage":"/cerini-02.png","tags":"freelance work, web-design","url":"http://www.ceriniandassociates.com"},
    
      html: "",
     }

/***/ }),

/***/ 49:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Cerinic Apparel","type":"portfolio","category":"web-design","client":"Cerinic Apparel","position":"Freelance Designer","role":"Web Designer and Developer","tools":"Wordpress","image":"/cerinic-thumbnail.png","featuredImage":"/cerinic-dev.png","tags":"freelance work, web-design","url":"http://www.cerinic.com"},
    
      html: "",
     }

/***/ }),

/***/ 50:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"COVID Dashboards","type":"portfolio","category":"design-research","client":"RPI Data Incites","media":"Design Thinking | Design Research | UI/UX Design","position":"Design Research Assistant","role":"UI/UX Designer & Front-end Developer","tools":"UXPin & RStudio","dateStart":"May 2020","dateEnd":"August 2020","link":"https://preview.uxpin.com/c8e3d1e6ab45179a280d5ba56bab8a88d7d16774#/pages/130758811?mode=f","link-text":"View Prototype","link-title":"Prototype","description":"Worked with a team of students and developers to create a series of web applications to be used by Rensselaer Polytechnic Institute following the COVID-19 outbreak. I served as the 'design consultant' and oversaw/helped to implement all UI design for web applications. I also created a series of templates to be used by students in future projects.","image":"/covid-thumbnail.png","tags":"Design Research, Prototyping, UXpin","languages":"CSS, R Shiny","featuredImage":"/Projects/Covid/covid.png","cModules":{"moduleOne":{"item":"button-grid","header":"","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","inner":{"contents":{"objectOne":{"class":"minder","id":"school_icon","text":"Minder","link":"window.open(https://inciteprojects.idea.rpi.edu/apps/covidminder/?_inputs_&state_name=%22Vermont%22&tab=%22national_report_card%22&_values_&adamodal=true,'_blank','resizable=yes')"},"objectTwo":{"class":"warroom","id":"school_icon","text":"War Room","link":"window.open(https://inciteprojects.idea.rpi.edu/apps/warroom/,'_blank','resizable=yes')"},"objectThree":{"class":"back-to-school","id":"school_icon","text":"Back-to-School","link":"window.open(https://inciteprojects.idea.rpi.edu/apps/backtoschool/,'_blank', 'resizable=yes')"}}}},"moduleTwo":{"item":"pdf","header":"Working Files:","class":"col-xs-12 col-sm-12 col-md-6 col-lg-6","image":"/Projects/Covid/Proposal.pdf","style":""},"moduleFive":{"item":"pdf","header":"Working Files:","class":"col-xs-12 col-sm-12 col-md-6 col-lg-6","image":"/Projects/Covid/CM_Feedback_05-13-2020.pdf","style":""},"moduleThree":{"item":"image","header":"Stylesheet","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","image":"/Projects/Covid/COVIDMINDER-BRAND-GUIDELINES.jpg","style":""},"moduleFour":{"item":"button","header":"UXPin Prototypes","inner":{"contents":{"src":"https://preview.uxpin.com/c8e3d1e6ab45179a280d5ba56bab8a88d7d16774#/pages/130758811?mode=f","text":"View in New Tab"}}}}},
    
      html: "",
     }

/***/ }),

/***/ 51:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Digital Penmanship Project Proposal","type":"blog","topic":"Project Proposal","category":"development","datePosted":"May 2021","previewText":"Project proposal outlining future implementation and research for the Digital Penmanship application","image":null,"tags":"Design Praxis, Design Education, Design Theory","featuredImage":null,"cModules":{"moduleOne":{"item":"pdf","header":"Project Proposal","src":"/ProjectProposal/DP-Proposal_V3.pdf"}}},
    
      html: "",
     }

/***/ }),

/***/ 52:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Digital Penmanship","type":"portfolio","client":"Doctoral Dissertation","category":"design-research","display":"featured","media":"Design Thinking | Design Research | UI/UX Design | Front-End Dev.","dateStart":"August 2016","dateEnd":"July 2022","link":"https://digitalpenmanship.app/","linkText":"View Application","linkTitle":"Application","position":"Doctoral Candidate","role":"Innovator, Developer, & Designer","tools":"React.JS, Redux, PubNub, MongoDB, Draft.JS","description":"In an effort to allow for greater presence of the individual in their communication within many-to-many communication systems, an application was developed that maps an individuals keystroke biometrics to a variable font.","image":"/DP-Mockup.png","tags":"Design Research, JS, Modeling, Chat Based Application","featuredImage":null,"cModules":{"moduleOne":{"item":"pdf-grid","header":"Project Proposal:","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","inner":{"contents":{"objectOne":{"col":"col-xs-12 col-sm-12 col-md-12 col-lg-12","row":1,"images":{"doc1":"/Projects/DigitalPenmanship/DP-Proposal_V3.pdf"}}}}},"moduleTwo":{"item":"iframe","header":null,"class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://miro.com/app/live-embed/uXjVOJG7pz8=/?moveToViewport=-442513,-326454,161438,89047&embedId=49446607528"}},"moduleThree":{"item":"iframe","header":"Typing Resize Parameters Sketch","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"/dissertation/Type_resize_parameters/index.html"}},"moduleFour":{"item":"image-grid","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"contents":{"objectOne":{"col":"colTwo","row":1,"images":{"imageOne":"/dissertation/1.png","imageTwo":"/dissertation/2.png"}},"objectTwo":{"col":"colTwo","row":1,"images":{"imageOne":"/dissertation/5.png","imageTwo":"/dissertation/6.png"}},"objectThree":{"col":"colTwo","row":1,"images":{"imageOne":"/dissertation/7.png","imageTwo":"/dissertation/4.png"}},"objectFour":{"col":"colTwo","row":1,"images":{"imageOne":"/dissertation/3.png"}}}}},"moduleFive":{"item":"iframe","header":null,"class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://lucid.app/documents/embedded/ff1d06dc-77b1-4b1b-b2ad-5eb0fd9eaafd"}}}},
    
      html: "",
     }

/***/ }),

/***/ 53:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"HEALS Health Application","type":"portfolio","client":"RPI-IBM HEALS PROGRAM","category":"ui-ux-design","display":"featured","media":"Design Thinking | Design Research | UI/UX Design | Front-End Dev.","dateStart":"August 2020","dateEnd":"May 2021","position":"Design Research Assistant","role":"UI/UX Designer & Front-end Developer","tools":"Adobe XD & Nuxt.JS","link":"/Projects/case-studies/heals-case-study.pdf","linkText":"View Case Study","linkTitle":"Project Overview","description":"Worked to develop a health application prototype with a team of researchers. Application designed for user testing and proof of concWept. Developed and executed design research methodology to aid in UI/UX design development.","image":"/HEALS-blog.png","tags":"Design Research, Prototyping, XD, JS, Mobile Application","featuredImage":"/Projects/HEALS/HEALS-Screens.png","cModules":{"moduleOne":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-6 col-lg-6","image":"/Projects/HEALS/HEALS-mockup.png","style":""},"moduleTwo":{"item":"text","header":"Design Goal","class":"col-xs-12 col-sm-12 col-md-6 col-lg-6","style":"","inner":{"itemOne":{"style":"font-size: 1.0rem;","class":"padding-bottom-base","text":"Individuals with diabetes are given guidelines to follow to help live a healthier lifestyle; however, those guidelines are often difficult to understand and are not accompanied by information regarding how to better adhere to them."},"itemTwo":{"style":"font-size: 1.0rem; color: var(--color-primary); font-weight: 700","class":"padding-bottom-base","text":"How do we help individuals with diabetes to lead a healthier lifestyle?"},"itemThree":{"style":"font-size: 1.1rem; color: var(--color-primary-60); font-weight: 600;","class":"padding-bottom-base","text":"Assumptions"},"itemFour":{"style":"","class":"padding-bottom-base","text":"Individuals with diabetes are not adhering to the necessary health guidelines"},"itemFive":{"style":"","class":"padding-bottom-base","text":"Part of the reason why people do not follow the guidelines is because they do not know how"},"itemSix":{"style":"","class":"padding-bottom-base","text":"Presently, if an individual with diabetes wants to receive custom guidance on how to better adhere to the necessary guidelines, they need to go to a nutritionist or an expert."},"itemSeven":{"style":"","class":"padding-bottom-base","text":"People do not go to nutritionists because of the high cost."},"itemEight":{"style":"","class":"padding-bottom-base","text":"If people had custom guidance, they would follow it"}}},"moduleaThree":{"itemOne":{"style":"font-size: 1.0rem;","class":"padding-bottom-base","text":"How to differentiate the personalized content from the scripted/standard information?"}},"moduleSix":{"item":"button","header":"XD Prototype Embed","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","style":null,"inner":{"contents":{"src":"https://xd.adobe.com/view/c310aa74-64ad-4b84-ac1c-cb387f0b0fd4-9643/","text":"View in New Tab"}}},"moduleSeven":{"item":"iframe","header":null,"class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 phoneHolder","inner":{"src":"https://xd.adobe.com/embed/c310aa74-64ad-4b84-ac1c-cb387f0b0fd4-9643/"}}}},
    
      html: "",
     }

/***/ }),

/***/ 54:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Application Hub","type":"portfolio","client":"BAM Technologies","tools":"Adobe XD","role":"UX Designer","position":"UX Manager & Platform Strategist","link":"https://xd.adobe.com/embed/637e9845-d1dc-46ff-9728-1e47197f235b-362d/","linkText":"View Prototype","linkTitle":"Prototype","category":"ui-ux-design","media":"UI/UX Design | Design System | UX Management","dateStart":"June 2021","dateEnd":"November 2022","description":"Functioned as UX Manager and Platform Strategist for an enterprise platform. Developed design thinking toolkit and championed the movement of design as part of development teams. Built out design operation processes, such as file management, onboarding, and interviewing. Was responsible for building out Information Architecture and Project Road Map for the Design System.","image":"/Application-hub-mockup.png","tags":"Design Research, Prototyping, XD","featuredImage":"/Application-hub-mockup.png","cModules":{"moduleSix":{"item":"button","header":"Application Hub","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","style":null,"inner":{"contents":{"src":"https://xd.adobe.com/embed/637e9845-d1dc-46ff-9728-1e47197f235b-362d/","text":"View in New Tab"}}},"moduleSeven":{"item":"iframe","header":null,"class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 desktop-holder","style":"border: solid 2px #e6e6e6; border-radius: 8px;","inner":{"src":"https://xd.adobe.com/embed/637e9845-d1dc-46ff-9728-1e47197f235b-362d/"}}}},
    
      html: "",
     }

/***/ }),

/***/ 55:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Mortality Minder","type":"portfolio","category":"design-research","client":"RPI Data Incites","media":"Design Thinking | Design Research | UI/UX Design","dateStart":"September 2019","dateEnd":"May 2020","link":"/MortalityMinder/index.html","linkText":"Application Info Page","linkTitle":"Application Prototype","description":"Worked as a design consultant and CSS specialist on the award winning MortalityMinder web application, as well as built the info webpage for.","image":"/mortality-minder.png","tags":"Design Research, UI/UX Design, Design Consultant","tools":"CSS, R Shiny","featuredImage":"/mortalityminder-01.png","cModules":{"moduleOne":{"item":"button","header":null,"inner":{"contents":{"src":"/MortalityMinder/index.html","text":"View in New Tab"}}},"moduleTwo":{"item":"iframe","header":"Application Info Page","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","style":"width: 100%; height: 600px; max-height: 100vh;","inner":{"src":"/MortalityMinder/index.html"}}}},
    
      html: "",
     }

/***/ }),

/***/ 56:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"NY Cake Academy Website","type":"portfolio","client":"A series of mockups from the NY Cake Academy site.","category":"ui-ux-design","media":"Graphic Design | Illustration | Digital Design | Marketing | Content Management","dateStart":"Summer 2018","dateEnd":"Winter 2020","link":"https://www.figma.com/proto/7yXQR1cqCPXJ66FfDLKNvL/NY-Cake-Academy?page-id=0%3A1&node-id=54%3A7749&viewport=6265%2C2087%2C0.48&scaling=scale-down&starting-point-node-id=54%3A7749","linkText":"View Prototype","linkTitle":"Prototype","position":"Digital Designer","description":"The work displayed below is a recreation of the website I developed while working for NY Cake. The original website was built using Wordpress, but it is no longer being used. The recreation is fairly close to the original, but does contain some enhancements.","role":"Brand Manager, Designer, and Developer","tools":"Figma, Divi Builder, & Wordpress","image":"/Academy.png","tags":"Graphic Design, Illustration, Digital Design, Marketing, Content Management","featuredImage":"/Projects/NYCake/nyc-academy_website.png","cModules":{"moduleEight":{"item":"text","header":"Project Brief","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12","style":"margin-right: auto; ","inner":{"itemOne":{"style":"font-size: 1.0rem;","class":"padding-bottom-base","text":"NY Cake is a cake decorating company located in NYC. The company consists of several different sub-sections, but this website is specifically dealing with the Academy. NY Cake Academy is a premier cake decorating and baking school located in NYC. The website is the companies sole POS for classes. The system was intended to manage class stock and descriptions, allow instructors to easily get their class numbers and attendance sheets, and make suggestions to students based on their previous enrollments to help build retention."}}},"moduleOne":{"item":"iframe","header":"Components","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7yXQR1cqCPXJ66FfDLKNvL%2FNY-Cake-Academy%3Fnode-id%3D54%253A9452%26t%3DOqRHw6642EavSXiQ-1"}},"moduleTwo":{"item":"iframe","header":"Patterns","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7yXQR1cqCPXJ66FfDLKNvL%2FNY-Cake-Academy%3Fnode-id%3D54%253A9574%26t%3DbJOMW20lQlesLD6J-1"}},"moduleThree":{"item":"iframe","header":"Widgets","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7yXQR1cqCPXJ66FfDLKNvL%2FNY-Cake-Academy%3Fnode-id%3D54%253A10304%26t%3DbJOMW20lQlesLD6J-1"}},"moduleFour":{"item":"iframe","header":"Website Mockup","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7yXQR1cqCPXJ66FfDLKNvL%2FNY-Cake-Academy%3Fpage-id%3D0%253A1%26node-id%3D54%253A7749%26viewport%3D6265%252C2087%252C0.48%26scaling%3Dscale-down%26starting-point-node-id%3D54%253A7749"}}}},
    
      html: "",
     }

/***/ }),

/***/ 57:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"NY Cake","type":"portfolio","client":"NY Cake","description":"Assortment of print and graphic design projects","role":"Communications Designer","tools":"Adobe Creative Suite","category":"communications-design","media":"Graphic Design | Illustration | Digital Design | Marketing | Content Management","dateStart":"Winter 2016","dateEnd":"Winter 2020","image":"/giftcard-thumb.png","tags":"Graphic Design, Illustration, Digital Design, Marketing, Content Management","cModules":{"moduleOne":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-show_front.png","style":"margin-left: auto;"},"moduleTwo":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-show_back.png","style":"margin-right: auto;"},"moduleThree":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-cafe_table-sign_front.png","style":"margin-left: auto;"},"moduleFour":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-cafe_table-sign_back.png","style":"margin-right: auto;"},"moduleFive":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-cafe_social-flyer_front.png","style":"margin-left: auto;"},"moduleSix":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-cafe_social-flyer_back.png","style":"margin-right: auto;"},"moduleSeven":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-academy_email-header_01.png","style":"margin-left: auto;"},"moduleEight":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-academy_email-header_02.png","style":"margin-right: auto;"},"moduleNine":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/Projects/NYCake/nyc-academy_email-header_03.png","style":"margin: auto;"}}},
    
      html: "",
     }

/***/ }),

/***/ 58:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Prime Shine Mobile","type":"portfolio","category":"web-design","client":"Prime Shine Mobile","position":"Freelance Designer","role":"Web Designer and Developer","tools":"Wordpress","image":"/prime-thumbnail.png","featuredImage":"/primeshine01.png","tags":"freelance work, web-design","url":"http://www.primeshinemobile.com"},
    
      html: "",
     }

/***/ }),

/***/ 59:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Branding Icons","type":"portfolio","client":"Scholastic","description":"A series of icons created for a rebranding project that a client was doing.","category":"communications-design","position":"Freelance Designer","role":"Designer","tools":"Adobe Illustrator","media":"Graphic Design | Icons","dateStart":"Winter 2020","dateEnd":"Winter 2020","image":"/school-icons.png","tags":"Graphic Design, Branding, Icons","cModules":{"moduleOne":{"item":"image","header":null,"class":"col-xs-6 col-sm-6 col-md-4 col-lg-4","image":"/Projects/icons/schol-asset1.png","style":""},"moduleTwo":{"item":"image","header":null,"class":"col-xs-6 col-sm-6 col-md-4 col-lg-4","image":"/Projects/icons/schol-asset2.png","style":""},"moduleThree":{"item":"image","header":null,"class":"col-xs-6 col-sm-6 col-md-4 col-lg-4","image":"/Projects/icons/schol-asset4.png","style":""},"moduleFour":{"item":"image","header":null,"class":"col-xs-6 col-sm-6 col-md-4 col-lg-4","image":"/Projects/icons/schol-asset5.png","style":""},"moduleFive":{"item":"image","header":null,"class":"col-xs-6 col-sm-6 col-md-4 col-lg-4","image":"/Projects/icons/schol-asset3.png","style":""}}},
    
      html: "",
     }

/***/ }),

/***/ 60:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Minimalize","type":"portfolio","category":"communications-design","client":"The type that minimalizes.","media":"Design Thinking | Design Research | Social Media | Critical Design","dateStart":"Fall 2016","dateEnd":"Fall 2016","description":"Minimalize is a dynamic typeface that was designed to embody the evolution of social media. Like with social media platforms, ‘Minimalize’ evolves based off of users engagement within a pre-defined system. Each time a user uses a character in their text, the character loses one of its axis points. The typeface continues to simplify until there is one a single line remaining, making the characters almost indistinguishable from one-another.","image":"/minimalize.gif","tags":"Design Research, Prototyping, UXpin","featuredImage":"/minimalize-poster_mockup.png","cModules":{"moduleOne":{"item":"pdf","header":"Researching the History of Social Media","class":"col-xs-12, col-sm-12, col-md-12, col-lg-12","image":"/Projects/Social-Media/Assignment-2.pdf","style":""},"moduleTwo":{"item":"image","class":"col-xs-12, col-sm-12, col-md-6, col-lg-6","image":"/Projects/Social-Media/sm-research1.jpg","style":""},"moduleThree":{"item":"image","class":"col-xs-12, col-sm-12, col-md-6, col-lg-6","image":"/Projects/Social-Media/sm-research2.jpg","style":""},"moduleFour":{"item":"image","header":"Visual Language","class":"col-xs-12, col-sm-12, col-md-12, col-lg-12","image":"/Projects/Social-Media/minimalize-01.png","style":""}}},
    
      html: "",
     }

/***/ }),

/***/ 61:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Design System Token Strategy","type":"portfolio","category":"ui-ux-design","client":"Paylocity","display":"featured","position":"Staff Designer","role":"Lead Designer & Design System Architect","tools":"Figma","image":"/tokens-thumbnail.png","tags":"design system","url":"https://www.figma.com/proto/aImBvKBHCpKkCDgGFq1OeJ/Citrus-Tokens?page-id=0%3A1&type=design&node-id=21-2099&viewport=7343%2C1529%2C0.42&t=MUT4XmmYyAa1JpAo-1&scaling=scale-down&mode=design","link":"https://www.figma.com/proto/aImBvKBHCpKkCDgGFq1OeJ/Citrus-Tokens?page-id=0%3A1&type=design&node-id=21-2099&viewport=7343%2C1529%2C0.42&t=MUT4XmmYyAa1JpAo-1&scaling=scale-down&mode=design","linkText":"View Presentation","dateStart":"March 2023","dateEnd":"August 2023","media":"UI/UX Design | Design System | UX Management","cModules":{"moduleTwo":{"item":"iframe","header":"Application Info Page","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 figma","inner":{"src":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuePLNJFN5qfII9EQDkjKhw%2FToken-System-Strategy%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-1754%26viewport%3D489%252C518%252C0.08%26t%3DZ3al2BOSZSC1ymgN-1%26scaling%3Dmin-zoom%26mode%3Ddesign"}}}},
    
      html: "",
     }

/***/ }),

/***/ 62:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Morphing Typography Experimentations","type":"portfolio","client":"Doctoral Dissertation","role":"Communications Designer & Experimenter","description":"Series of graphic explorations surrounding morphing type","category":"communications-design","tools":"Adobe Creative Suite","media":"Graphic Design | Posters","dateStart":"Winter 2018","dateEnd":"Winter 2018","image":"/dp-posters.png","tags":"Graphic Design, Posters, Creative Exploration, Visual Poetry, Dissertation","cModules":{"moduleOne":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/1.png","style":"margin-left: auto;"},"moduleTwo":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/2.png","style":"margin-right: auto;"},"moduleThree":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/5.png","style":"margin-left: auto;"},"moduleFour":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/6.png","style":"margin-right: auto;"},"moduleFive":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/7.png","style":"margin-left: auto;"},"moduleSix":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/4.png","style":"margin-right: auto;"},"moduleSeven":{"item":"image","header":null,"class":"col-xs-12 col-sm-12 col-md-5 col-lg-5 card-mockup","image":"/dissertation/3.png","style":"margin: auto;"}}},
    
      html: "",
     }

/***/ }),

/***/ 63:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"title":"Zenith Design System","type":"portfolio","client":"Undisclosed","category":"ui-ux-design","media":"UI/UX Design | Design System | UX Management","display":"featured","dateStart":"June 2021","dateEnd":"November 2022","position":"UX Manager & Platform Strategist","role":"Project Lead & Design System Architect","tools":"XD & Outsystems","link":"https://lucid.app/documents/view/b6fb047f-72b2-4068-b73e-3d3a4de55eee","linkText":"View Style Guide IA","linkTitle":"Information Architecture","description":"A fully themeable design system that was initially created for an enterprise platform. Went on to be expanded upon so that it could be used by any project that the company took on.","image":"/design-system.png","tags":"Design System","featuredImage":null,"cModules":{"moduleOne":{"item":"text","header":"Design Goal","class":"col-xs-12 col-sm-12 col-md-5 col-lg-4","style":"margin-right: auto; ","inner":{"itemOne":{"style":"font-size: 1.0rem;","class":"padding-bottom-base","text":"Development teams are tasked with creating intuitive user experiences consistent across the platform. Presently, there is a lack of consistency between created mockups and executed designs, as well as a lack of continuity throughout the platform."},"itemTwo":{"style":"font-size: 1.0rem; color: var(--color-primary); font-weight: 700","class":"padding-bottom-base","text":"How can we empower teams to meet platform standards better and deliver the best UX possible?"},"itemThree":{"style":"font-size: 1.1rem; color: var(--color-primary-60); font-weight: 600;","class":"padding-bottom-base","text":"Assumptions"},"itemFour":{"style":"","class":"padding-bottom-base","text":"The reason for the lack of consistency is that there is no onboarding or training process for individuals coming in. In addition, there is no central location where best practices are documented and shared."},"itemFive":{"style":"","class":"padding-bottom-base","text":"If teams were to have the information and guidance needed, we would see an increase in consistency across the platform."},"itemSix":{"style":"","class":"padding-bottom-base","text":"The reason why repeat functionality exists within the platform is that teams were unaware that the tools they needed already existed."}}},"moduleTwo":{"item":"text","header":"Problem Statements","class":"col-xs-12 col-sm-12 col-md-5 col-lg-4","style":"margin-left: auto; ","inner":{"itemOne":{"style":"font-size: 1.0rem; font-weight: 700;","class":"padding-bottom-base","text":"Throughout the company, there are the following:"},"itemFour":{"style":"","class":"padding-bottom-base","text":"a lack of design resources available for individual project teams"},"itemFive":{"style":"","class":"padding-bottom-base","text":"repeat functionality and UI Elements being built"},"itemSix":{"style":"","class":"padding-bottom-base","text":"a lack of resources to resolve problems previously solved by others"},"itemSeven":{"style":"","class":"padding-bottom-base","text":"a lack of clearly defined standards and best practices"},"itemEight":{"style":"font-size: 1.0rem; font-weight: 700;","class":"padding-bottom-base","text":"Within the platform, there are the following:"},"itemNine":{"style":"","class":"padding-bottom-base","text":"a lack of time and resources devoted to maintaining and implementing a design system (both in design and development)"},"itemTen":{"style":"","class":"padding-bottom-base","text":"a lack of knowledge on how to use the design system"},"itemEleven":{"style":"","class":"padding-bottom-base","text":"a lack of clearly defined best practices for UI design and front-end implementation"}}},"moduleThree":{"item":"iframe","header":"CSS Library","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/06e34704-1115-4e52-87ce-a07ca469fcbf-53b0/"}},"moduleFour":{"item":"iframe","header":"CORE UI Library","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/b9de13fc-a457-4d4c-a3df-1381dbf97e85-ec8d"}},"moduleFive":{"item":"iframe","header":"Layout UI","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/3f0da562-e63d-4c72-957e-6ac01bc5a0cc-6a5e/"}},"moduleSix":{"item":"iframe","header":"Information UI","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/dc42502e-b75c-45b2-9a11-32f29634f325-8911/"}},"moduleSeven":{"item":"iframe","header":"Theme Patterns","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/548b91ad-95f9-4ee2-9dae-bf6256e1fec7-01d8/"}},"moduleEight":{"item":"iframe","header":"Icon Library","class":"col-xs-12 col-sm-12 col-md-12 col-lg-12 design-system","inner":{"src":"https://xd.adobe.com/embed/6a32a1f2-fb6d-421b-b8e8-8527a50a665c-3f61/"}}}},
    
      html: "",
     }

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCard_vue_vue_type_style_index_0_id_ffee1b3e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCard_vue_vue_type_style_index_0_id_ffee1b3e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCard_vue_vue_type_style_index_0_id_ffee1b3e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCard_vue_vue_type_style_index_0_id_ffee1b3e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCard_vue_vue_type_style_index_0_id_ffee1b3e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".row{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin:0 auto;width:100%}.row.reverse{flex-direction:row-reverse}.row.natural-height{align-items:flex-start}.row.flex-column{flex-direction:column}.col{box-sizing:border-box;flex-basis:0;flex-grow:1;max-width:100%;padding:1rem}.col.reverse{flex-direction:column-reverse}.first{order:-1}.last{order:1}.align-start{align-self:flex-start}.align-end{align-self:flex-end}.align-center{align-self:center}.align-baseline{align-self:baseline}.align-stretch{align-self:stretch}.col-xs{flex-basis:0;flex-grow:1;max-width:100%}.col-xs,.col-xs-1{box-sizing:border-box;padding:1rem}.col-xs-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-xs-offset-1{margin-left:8.3333333333%}.col-xs-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xs-offset-2{margin-left:16.6666666667%}.col-xs-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xs-offset-3{margin-left:25%}.col-xs-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xs-offset-4{margin-left:33.3333333333%}.col-xs-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xs-offset-5{margin-left:41.6666666667%}.col-xs-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xs-offset-6{margin-left:50%}.col-xs-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xs-offset-7{margin-left:58.3333333333%}.col-xs-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xs-offset-8{margin-left:66.6666666667%}.col-xs-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xs-offset-9{margin-left:75%}.col-xs-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xs-offset-10{margin-left:83.3333333333%}.col-xs-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xs-offset-11{margin-left:91.6666666667%}.col-xs-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xs-offset-12{margin-left:100%}.row.start-xs{justify-content:flex-start}.row.center-xs{justify-content:center}.row.end-xs{justify-content:flex-end}.row.top-xs{align-items:flex-start}.row.middle-xs{align-items:center}.row.bottom-xs{align-items:flex-end}.row.around-xs{justify-content:space-around}.row.between-xs{justify-content:space-between}.first-xs{order:-1}.last-xs{order:1}@media only screen and (min-width:41rem){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm,.col-sm-1{box-sizing:border-box;padding:1rem}.col-sm-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-sm-offset-3{margin-left:25%}.col-sm-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-sm-offset-6{margin-left:50%}.col-sm-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-sm-offset-9{margin-left:75%}.col-sm-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-sm-offset-12{margin-left:100%}.row.start-sm{justify-content:flex-start}.row.center-sm{justify-content:center}.row.end-sm{justify-content:flex-end}.row.top-sm{align-items:flex-start}.row.middle-sm{align-items:center}.row.bottom-sm{align-items:flex-end}.row.around-sm{justify-content:space-around}.row.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}@media only screen and (min-width:65rem){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md,.col-md-1{box-sizing:border-box;padding:1rem}.col-md-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-md-offset-3{margin-left:25%}.col-md-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-md-offset-6{margin-left:50%}.col-md-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-md-offset-9{margin-left:75%}.col-md-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-md-offset-12{margin-left:100%}.row.start-md{justify-content:flex-start}.row.center-md{justify-content:center}.row.end-md{justify-content:flex-end}.row.top-md{align-items:flex-start}.row.middle-md{align-items:center}.row.bottom-md{align-items:flex-end}.row.around-md{justify-content:space-around}.row.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}@media only screen and (min-width:101rem){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg,.col-lg-1{box-sizing:border-box;padding:1rem}.col-lg-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-lg-offset-3{margin-left:25%}.col-lg-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-lg-offset-6{margin-left:50%}.col-lg-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-lg-offset-9{margin-left:75%}.col-lg-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-lg-offset-12{margin-left:100%}.row.start-lg{justify-content:flex-start}.row.center-lg{justify-content:center}.row.end-lg{justify-content:flex-end}.row.top-lg{align-items:flex-start}.row.middle-lg{align-items:center}.row.bottom-lg{align-items:flex-end}.row.around-lg{justify-content:space-around}.row.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}@media only screen and (min-width:121rem){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl,.col-xl-1{box-sizing:border-box;padding:1rem}.col-xl-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{box-sizing:border-box;flex-basis:16.6666666667%;max-width:16.6666666667%;padding:1rem}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{box-sizing:border-box;flex-basis:25%;max-width:25%;padding:1rem}.col-xl-offset-3{margin-left:25%}.col-xl-4{box-sizing:border-box;flex-basis:33.3333333333%;max-width:33.3333333333%;padding:1rem}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{box-sizing:border-box;flex-basis:41.6666666667%;max-width:41.6666666667%;padding:1rem}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{box-sizing:border-box;flex-basis:50%;max-width:50%;padding:1rem}.col-xl-offset-6{margin-left:50%}.col-xl-7{box-sizing:border-box;flex-basis:58.3333333333%;max-width:58.3333333333%;padding:1rem}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{box-sizing:border-box;flex-basis:66.6666666667%;max-width:66.6666666667%;padding:1rem}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{box-sizing:border-box;flex-basis:75%;max-width:75%;padding:1rem}.col-xl-offset-9{margin-left:75%}.col-xl-10{box-sizing:border-box;flex-basis:83.3333333333%;max-width:83.3333333333%;padding:1rem}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{box-sizing:border-box;flex-basis:91.6666666667%;max-width:91.6666666667%;padding:1rem}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{box-sizing:border-box;flex-basis:100%;max-width:100%;padding:1rem}.col-xl-offset-12{margin-left:100%}.row.start-xl{justify-content:flex-start}.row.center-xl{justify-content:center}.row.end-xl{justify-content:flex-end}.row.top-xl{align-items:flex-start}.row.middle-xl{align-items:center}.row.bottom-xl{align-items:flex-end}.row.around-xl{justify-content:space-around}.row.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}.col-gutter-lr{padding:0 1rem}.col-no-gutter{padding:0}.row.show,.show{display:flex!important}.hide{display:none!important}.row.show-xs,.show-xs{display:flex!important}.hide-xs{display:none!important}@media only screen and (max-width:40rem){.row.show-xs-only,.show-xs-only{display:flex!important}.hide-xs-only{display:none!important}}@media only screen and (min-width:41rem){.row.show-sm,.show-sm{display:flex!important}.hide-sm{display:none!important}}@media only screen and (min-width:41rem)and (max-width:64rem){.row.show-sm-only,.show-sm-only{display:flex!important}.hide-sm-only{display:none!important}}@media only screen and (min-width:65rem){.row.show-md,.show-md{display:flex!important}.hide-md{display:none!important}}@media only screen and (min-width:65rem)and (max-width:100rem){.row.show-md-only,.show-md-only{display:flex!important}.hide-md-only{display:none!important}}@media only screen and (min-width:101rem){.row.show-lg,.show-lg{display:flex!important}.hide-lg{display:none!important}}@media only screen and (min-width:101rem)and (max-width:120rem){.row.show-lg-only,.show-lg-only{display:flex!important}.hide-lg-only{display:none!important}}@media only screen and (min-width:121rem){.row.show-xl,.show-xl{display:flex!important}.hide-xl{display:none!important}}*,:after,:before{box-sizing:border-box}blockquote,body,dd,dl,figure,h1,h2,h3,h4,p{margin-bottom:0}ol[role=list],ul[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{line-height:1.5;min-height:100vh;text-rendering:optimizeSpeed}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img,picture{display:block;max-width:100%}button,input,select,textarea{font:inherit}@media(prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}.header1,.heading1,h1{font-size:1.875rem}.header1,.header2,.heading1,.heading2,h1,h2{font-weight:600;letter-spacing:.005em;margin:0}.header2,.heading2,h2{font-size:1.75rem}.header3,.heading3,h3{font-size:1.5rem;font-weight:600;letter-spacing:.005em}.header4,.heading4,h4{font-size:1.25rem;font-weight:700;letter-spacing:.005em;margin:0}.header5,.heading5,h5{font-size:1.125rem}.header5,.header6,.heading5,.heading6,h5,h6{font-weight:600;letter-spacing:.005em;margin:0}.header6,.heading6,h6{font-size:1rem}.body-text,.p,p{font-size:1rem}.body-text,.p,.small-body-text,p{font-weight:400;letter-spacing:.005em;margin:0}.small-body-text{font-size:.875rem}.smallest-body-text{font-size:.75rem;font-weight:400;letter-spacing:.005em;margin:0}.bold{font-weight:700}.semi-bold{font-weight:600}.regular{font-weight:700}a{color:#012a4d}a:hover{color:#ff9195;font-weight:600}.nav-link{color:#012a4d}.nav-link:hover{color:#012a4d;font-weight:600}.tertiary-text{color:#bbc909}.display-text{color:#bbc909;font-size:7rem}.hero-text{font-size:5rem;font-weight:600;line-height:6rem;margin:0}.hero-text,.sub-header{color:#012a4d;padding-bottom:.625rem}.sub-header{font-size:2.25rem;font-weight:500;line-height:2.875rem}.rounded{border-radius:24px}.border-weight-base{border-width:3px}.border-color-primary{border-color:#012a4d}.backdrop-tertiary-lightest{background-color:#fdffe6}div{box-sizing:border-box}.padding-xxs{padding:2px}.padding-xs{padding:4px}.padding-s{padding:8px}.padding-base{padding:16px}.padding-md{padding:24px}.padding-lg{padding:32px}.padding-xl{padding:40px}.padding-xxl{padding:48px}.padding-xxxl{padding:56px}.padding-y-xxs{padding-bottom:2px;padding-top:2px}.padding-y-xs{padding-bottom:4px;padding-top:4px}.padding-y-s{padding-bottom:8px;padding-top:8px}.padding-y-base{padding-bottom:16px;padding-top:16px}.padding-y-md{padding-bottom:24px;padding-top:24px}.padding-y-lg{padding-bottom:32px;padding-top:32px}.padding-y-xl{padding-bottom:40px;padding-top:40px}.padding-y-xxl{padding-bottom:48px;padding-top:48px}.padding-y-xxxl{padding-bottom:48px;padding-top:56px}.padding-x-xxs{padding-left:2px;padding-right:2px}.padding-x-xs{padding-left:4px;padding-right:4px}.padding-x-s{padding-left:8px;padding-right:8px}.padding-x-base{padding-left:16px;padding-right:16px}.padding-x-md{padding-left:24px;padding-right:24px}.padding-x-lg{padding-left:32px;padding-right:32px}.padding-x-xl{padding-left:40px;padding-right:40px}.padding-x-xxl{padding-left:48px;padding-right:48px}.padding-x-xxxl{padding-left:56px;padding-right:48px}.padding-right-xxs{padding-right:2px}.padding-right-xs{padding-right:4px}.padding-right-s{padding-right:8px}.padding-right-base{padding-right:16px}.padding-right-md{padding-right:24px}.padding-right-lg{padding-right:32px}.padding-right-xl{padding-right:40px}.padding-right-xxl,.padding-right-xxxl{padding-right:48px}.padding-bottom-xxs{padding-bottom:2px}.padding-bottom-xs{padding-bottom:4px}.padding-bottom-s{padding-bottom:8px}.padding-bottom-base{padding-bottom:16px}.padding-bottom-md{padding-bottom:24px}.padding-bottom-lg{padding-bottom:32px}.padding-bottom-xl{padding-bottom:40px}.padding-bottom-xxl,.padding-bottom-xxxl{padding-bottom:48px}.padding-top-xxs{padding-top:2px}.padding-top-xs{padding-top:4px}.padding-top-s{padding-top:8px}.padding-top-base{padding-top:16px}.padding-top-md{padding-top:24px}.padding-top-lg{padding-top:32px}.padding-top-xl{padding-top:40px}.padding-top-xxl,.padding-top-xxxl{padding-top:48px}.padding-left-xxs{padding-left:2px}.padding-left-xs{padding-left:4px}.padding-left-s{padding-left:8px}.padding-left-base{padding-left:16px}.padding-left-md{padding-left:24px}.padding-left-lg{padding-left:32px}.padding-left-xl{padding-left:40px}.padding-left-xxl,.padding-left-xxxl{padding-left:48px}.margin-base{margin:16px}.margin-md{margin:24px}.margin-y-xxs{margin-bottom:2px;margin-top:2px}.margin-y-xs{margin-bottom:4px;margin-top:4px}.margin-y-s{margin-bottom:8px;margin-top:8px}.margin-y-xxs{margin-bottom:16px;margin-top:16px}.margin-y-lg{margin-bottom:32px;margin-top:32px}.margin-y-xl{margin-bottom:40px;margin-top:40px}.margin-y-xxl{margin-bottom:48px;margin-top:48px}.margin-y-xxxl{margin-bottom:48px;margin-top:56px}.margin-x-xxs{margin-left:2px;margin-right:2px}.margin-x-xs{margin-left:4px;margin-right:4px}.margin-x-s{margin-left:8px;margin-right:8px}.margin-x-base{margin-left:16px;margin-right:16px}.margin-x-md{margin-left:24px;margin-right:24px}.margin-x-lg{margin-left:32px;margin-right:32px}.margin-x-xl{margin-left:40px;margin-right:40px}.margin-x-xxl{margin-left:48px;margin-right:48px}.margin-x-xxxl{margin-left:56px;margin-right:48px}.margin-right-xxs{margin-right:2px}.margin-right-xs{margin-right:4px}.margin-right-s{margin-right:8px}.margin-right-base{margin-right:16px}.margin-right-md{margin-right:24px}.margin-right-lg{margin-right:32px}.margin-right-xl{margin-right:40px}.margin-right-xxl,.margin-right-xxxl{margin-right:48px}.margin-bottom-xxs{margin-bottom:2px}.margin-bottom-xs{margin-bottom:4px}.margin-bottom-s{margin-bottom:8px}.margin-bottom-base{margin-bottom:16px}.margin-bottom-md{margin-bottom:24px}.margin-bottom-lg{margin-bottom:32px}.margin-bottom-xl{margin-bottom:40px}.margin-bottom-xxl,.margin-bottom-xxxl{margin-bottom:48px}.margin-top-xxs{margin-top:2px}.margin-top-xs{margin-top:4px}.margin-top-s{margin-top:8px}.margin-top-md{margin-top:24px}.margin-top-lg{margin-top:32px}.margin-top-xl{margin-top:40px}.margin-top-xxl,.margin-top-xxxl{margin-top:48px}.margin-left-xxs{margin-left:2px}.margin-left-xs{margin-left:4px}.margin-left-s{margin-left:8px}.margin-left-base{margin-left:16px}.margin-left-md{margin-left:24px}.margin-left-lg{margin-left:32px}.margin-left-xl{margin-left:40px}.margin-left-xxl,.margin-left-xxxl{margin-left:48px}.padding-none{padding:0}.margin-none{margin:0}.margin-xxs{margin:2px}.margin-xs{margin:4px}.margin-s{margin:8px}.margin-xxs{margin:16px}.margin-lg{margin:32px}.margin-xl{margin:40px}.margin-xxl{margin:48px}.margin-xxxl{margin:56px}.vertical-align-middle{vertical-align:middle}.align-content-center{align-content:center}.align-items-center{align-items:center}.inset-shadow{box-shadow:inset 0 3px 6px 0 rgba(0,0,0,.161)}@media only screen and (min-width:50em){.wrapper{max-width:65em;width:95%}.column-1{width:8.3333333333%}.column-2{width:4.1666666667%}.column-3{width:2.7777777778%}.column-4{width:2.0833333333%}.column-5{width:1.6666666667%}.column-6{width:1.3888888889%}.column-7{width:1.1904761905%}.column-8{width:1.0416666667%}.column-9{width:.9259259259%}.column-10{width:.8333333333%}.column-11{width:.7575757576%}.column-12{width:.6944444444%}aside{display:flex;flex-direction:column;justify-content:flex-end;max-width:440px}}.margin-auto{margin:auto}.margin-top-base{margin-top:16px}.home-header{padding:16px 32px 32px 40px;position:absolute;width:100%}.sub-page{background:#fafdff;box-shadow:3px 0 12px rgba(0,0,0,.16);justify-content:space-between;padding-left:40px;padding-top:0;position:fixed;z-index:1}.page-wrapper{height:100%}body{margin:0}.not-full-width{padding:2rem}.display-flex{display:flex}.flex-direction-row{flex-direction:row}.flex-direction-column{flex-direction:column}.flex-direction-row-reverse{flex-direction:row-reverse}.flex-direction-column-reverse{flex-direction:column-reverse}.justify-content-space-between{justify-content:space-between}.justify-content-space-around{justify-content:space-around}.justify-content-space-evenly{justify-content:space-evenly}.justify-content-flex-end{justify-content:flex-end}.justify-content-center{justify-content:center}.width-100vw{width:100vw}.full-width{width:100%}.figma>iframe{height:100%;max-height:100vh;min-height:450px;width:100%}.cards-container{padding:1rem;position:relative}.cards-container .card-figure{background-color:#e0e0e0;overflow:hidden}.cards-container .card-body{border:1px solid #e6e6e6;border-radius:24px;display:flex;flex-direction:column;height:100%;overflow:hidden}.cards-container .card-title{font-size:1.2rem;margin-bottom:.2rem}.cards-container .card-text{font-size:1rem;padding:1.5em}.cards-container .card-link{-webkit-text-decoration:none;text-decoration:none}.cards-container .category{background:#fcf0f0;border:2px solid #ff9195;border-radius:24px;color:#012a4d;margin-bottom:8px;margin-right:8px;margin-top:0;padding:4px 8px;width:-moz-fit-content;width:fit-content}button{background:rgba(254,214,216,0);background-blend-mode:soft-light;border:none;border-radius:4px;color:#fff;font-feature-settings:\"smcp\",normal,normal,\"smcp\";font-size:1.125rem;font-variant:small-caps;font-variant-caps:small-caps;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:600;letter-spacing:.02rem;padding:16px;position:relative;text-transform:uppercase}button:hover{background:rgba(254,214,216,.32);box-shadow:0 0 8px 0 rgba(0,0,0,.161)}button:selected{box-shadow:0 0 5px 0 rgba(0,0,0,.18)}button:active{background:rgba(254,214,216,.16);box-shadow:inset 0 0 6px 0 rgba(0,0,0,.212)}.button-link:hover{color:#fff}button.btn:before{background:#ff9195;background-blend-mode:normal;border-radius:4px;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1}.menu-icon-shape{display:flex;flex-direction:column;height:24px;justify-content:space-between;text-align:center}.menu-trigger .button:before{border-radius:100px}.icon-bar{background:#012a4d;border-radius:8px;height:3.25px;margin:auto;width:24px}.icon-bar.middle{visibility:visible}.icon-bar.bottom,.icon-bar.top{transform:none;transition:transform .5s}.menu-icon{margin:auto;width:24px}.icon-button{background:#fafdff;border:3px solid #012a4d;border-radius:100px;height:56px;padding:0;width:56px}.icon-button:hover{background:#ebf5ff;transition:background .5s}.icon-button.open{background:#053259;transition:background .5s}.icon-button.open .icon-bar{background:#fafdff}.icon-button.open .icon-bar.top{transform:translateY(8px) rotate(45deg);transition:transform .5s}.icon-button.open .icon-bar.bottom{transform:translateY(-8px) rotate(-45deg);transition:transform .5s}.icon-button.open .icon-bar.middle{visibility:hidden}.small-image-frame{overflow:hidden;width:20em}.section-banner{background-color:#f4fc97;padding-right:16px}.card-wrapper{border:1px solid #e6e6e6;border-radius:8px;box-shadow:0 0 7px 0 rgba(0,0,0,.161);overflow:hide;padding:0}.img-holder>img{border-radius:8px 8px 0 0;overflow:hide}img{bottom:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/SliderCard.vue?vue&type=template&id=ffee1b3e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
    attrs: {
      "id": "container_slider-card"
    }
  }, [_vm._ssrNode("<div id=\"container_card-wrapper\" class=\"card-wrapper\"><div id=\"container_img-holder\" class=\"img-holder\"><img alt=\"proj-img\"" + _vm._ssrAttr("src", `${_vm.post.attributes.image}`) + "></div> <div class=\"row padding-base info-section\"><div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\" style=\"padding-bottom: 0px; padding-top: 0px;\"><p id=\"p_project-name\" class=\"project-name margin-none\">" + _vm._ssrEscape(_vm._s(_vm.post.attributes.title)) + "</p></div> <div class=\"card-footer col-xs-12 col-sm-12 col-md-12 col-lg-12\"><a" + _vm._ssrAttr("href", `/portfolio/${_vm.post.attributes.category}/${_vm.post.slug}`) + ">View Project\n                </a></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base-ui-elements/cards/SliderCard.vue?vue&type=template&id=ffee1b3e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/SliderCard.vue?vue&type=script&lang=js
/* harmony default export */ var SliderCardvue_type_script_lang_js = ({
  name: 'SliderCard',
  props: {
    post: Object,
    prefix: String,
    ct: String
  }
});
// CONCATENATED MODULE: ./components/base-ui-elements/cards/SliderCard.vue?vue&type=script&lang=js
 /* harmony default export */ var cards_SliderCardvue_type_script_lang_js = (SliderCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base-ui-elements/cards/SliderCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_SliderCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e115cc1a"
  
)

/* harmony default export */ var SliderCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlainCards_vue_vue_type_style_index_0_id_62d5819a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlainCards_vue_vue_type_style_index_0_id_62d5819a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlainCards_vue_vue_type_style_index_0_id_62d5819a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlainCards_vue_vue_type_style_index_0_id_62d5819a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlainCards_vue_vue_type_style_index_0_id_62d5819a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/PlainCards.vue?vue&type=template&id=62d5819a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section section-plain-cards"
  }, [_c('client-only', [_c('div', {
    staticClass: "card-grid row"
  }, _vm._l(_vm.posts, function (post) {
    return _c('slider-card', {
      key: post.slug,
      attrs: {
        "prefix": _vm.prefix,
        "post": post,
        "ct": post.attributes.category
      }
    });
  }), 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base-ui-elements/cards/PlainCards.vue?vue&type=template&id=62d5819a

// EXTERNAL MODULE: ./components/base-ui-elements/cards/SliderCard.vue + 4 modules
var SliderCard = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/cards/PlainCards.vue?vue&type=script&lang=js

/* harmony default export */ var PlainCardsvue_type_script_lang_js = ({
  components: {
    SliderCard: SliderCard["default"]
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array,
    featured: Boolean
  }
});
// CONCATENATED MODULE: ./components/base-ui-elements/cards/PlainCards.vue?vue&type=script&lang=js
 /* harmony default export */ var cards_PlainCardsvue_type_script_lang_js = (PlainCardsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base-ui-elements/cards/PlainCards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_PlainCardsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e9313bca"
  
)

/* harmony default export */ var PlainCards = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./airforce-hr.md": 47,
	"./cerini-and-assoc.md": 48,
	"./cerinic.md": 49,
	"./covid-dashboards.md": 50,
	"./digital-penmanship-proposal.md": 51,
	"./digital-penmanship.md": 52,
	"./heals-health-application.md": 53,
	"./hr-platform.md": 54,
	"./mortality-minder.md": 55,
	"./ny-cake-academy-website.md": 56,
	"./ny-cake.md": 57,
	"./prime-shine.md": 58,
	"./scholastic-icons.md": 59,
	"./social-media.md": 60,
	"./token-strategy.md": 61,
	"./type-explorations.md": 62,
	"./zenith-design-system.md": 63
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 77;

/***/ })

};;
//# sourceMappingURL=index.js.map