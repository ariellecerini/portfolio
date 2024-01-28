exports.ids = [1];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/Card.vue?vue&type=template&id=68451164
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cards-container col-xs-12 col-sm-6 col-md-4 col-lg-4",
    class: [{
      'card-plain': _vm.plain
    }, {
      'card-raised': _vm.raised
    }, {
      [`card-${_vm.type}`]: _vm.type
    }],
    attrs: {
      "data-background-color": _vm.color
    }
  }, [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode((_vm.$slots.category || _vm.category ? "<h6 class=\"card-category\">" + _vm._ssrEscape(_vm._s(_vm.category)) + "</h6>" : "<!---->") + " "), _vm.$slots.image ? _vm._ssrNode("<div class=\"card-figure\">", "</div>", [_vm._t("image")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.$slots.avatar ? _vm._ssrNode("<div class=\"card-avatar\">", "</div>", [_vm._t("avatar")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.$slots.info ? _vm._ssrNode("<div class=\"info\">", "</div>", [_vm._t("info")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.$slots.header || _vm.title ? _vm._ssrNode("<div" + _vm._ssrClass(null, _vm.headerClasses) + ">", "</div>", [_vm._t("header", function () {
    return [_vm.title ? _c('h1', {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.subTitle ? _c('h3', {
      staticClass: "card-category"
    }, [_vm._v(_vm._s(_vm.subTitle))]) : _vm._e(), _vm._v(" "), _vm.description ? _c('p', {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()];
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.$slots.default ? _vm._ssrNode("<div" + _vm._ssrClass(null, _vm.cardBodyClasses) + ">", "</div>", [_vm._t("default")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._t("raw-content"), _vm._ssrNode(" " + (_vm.$slots.footer && !_vm.noFooterLine ? "<hr>" : "<!---->") + " "), _vm.$slots.footer ? _vm._ssrNode("<div class=\"card-footer\">", "</div>", [_vm._t("footer")], 2) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base-ui-elements/Card.vue?vue&type=template&id=68451164

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base-ui-elements/Card.vue?vue&type=script&lang=js
/* harmony default export */ var Cardvue_type_script_lang_js = ({
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
});
// CONCATENATED MODULE: ./components/base-ui-elements/Card.vue?vue&type=script&lang=js
 /* harmony default export */ var base_ui_elements_Cardvue_type_script_lang_js = (Cardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base-ui-elements/Card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_ui_elements_Cardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "067a4ac6"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=base-ui-elements-card.js.map